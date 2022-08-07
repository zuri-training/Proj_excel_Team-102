from fastapi import APIRouter, Depends, UploadFile, status, Response

from sqlalchemy.orm import Session

from app.models import Users, Files
from app.schemas import GetFile, GetFiles
from app.database import get_db
from app.oauth import get_current_user

from app.utils import upload_file as op__upload_file, get_excel_contents

from datetime import datetime

import os


router = APIRouter(
    prefix="/api/v1/files",
    tags=["Files"]
)

@router.get("/", status_code=status.HTTP_200_OK, response_model=GetFiles)
def get_files(response: Response, db: Session = Depends(get_db), user: Users = Depends(get_current_user),
page: int = 1, division: int = 10):
    pass

@router.post("/", status_code=status.HTTP_201_CREATED, response_model=GetFile)
async def upload_file(file: UploadFile, response: Response, db: Session = Depends(get_db), 
user: Users = Depends(get_current_user), replace: int = 0):

    file_extension = file.filename.split(".")[-1]

    if file_extension not in ["xlsx", "csv"]:
        response.status_code = status.HTTP_406_NOT_ACCEPTABLE
        return {"message": "Unaccepted file format"}

    file_exists_query = db.query(Files).filter(Files.user_id == user.id, Files.file_name == file.filename)
    file_exists = file_exists_query.first()
    if file_exists and not replace:
        response.status_code = status.HTTP_406_NOT_ACCEPTABLE
        return {"message": "File exists with the same name"}

    files_root_path = f"static/dc/{user.id}/"

    if file_exists and replace:
        unique_name = f"{abs(hash(datetime.now()))}_{file_exists.file_name}"
        file_exists_query.update({"file_name": unique_name, "status": 0}, synchronize_session=False)
        db.commit()

        os.rename(f"{files_root_path}{file.filename}", f"{files_root_path}{unique_name}")

    # upload and create xlsx version and delete csv
    # or find better logic
    if file_extension == "csv":
        pass

    file_path = f"{files_root_path}{file.filename}"
    await op__upload_file(file_path, file)

    new_file = Files(user_id=user.id, file_name=file.filename)
    db.add(new_file)
    db.commit()
    db.refresh(new_file)

    new_file.file_content = get_excel_contents(file_path)

    return {"message": "File uploaded successfully", "file": new_file}

@router.get("/{file_id}", status_code=status.HTTP_200_OK, response_model=GetFile)
def get_file(file_id: int, response: Response, db: Session = Depends(get_db), user: Users = Depends(get_current_user)):

    file = db.query(Files).filter(Files.id == file_id, Files.user_id == user.id).first()

    if not file:
        response.status_code = status.HTTP_404_NOT_FOUND
        return {"message": "Error identifying file"}

    files_root_path = f"static/dc/{user.id}/"

    file_path = f"{files_root_path}{file.file_name}"
    file.file_content = get_excel_contents(file_path)

    return {"message": "File fetched sucessfully", "file": file}

@router.patch("/{file_id}", status_code=status.HTTP_200_OK)
def rename_file(file_id: int, response: Response, db: Session = Depends(get_db), 
user: Users = Depends(get_current_user), new_filename: str = ""):
    
    if not new_filename:
        response.status_code = status.HTTP_406_NOT_ACCEPTABLE
        return {"message": "Provide new name to give file"}

    file_query = db.query(Files).filter(Files.id == file_id, Files.user_id == user.id)
    file = file_query.first()

    if not file:
        response.status_code = status.HTTP_404_NOT_FOUND
        return {"message": "Error identifying file"}

    filename_exists = db.query(Files).filter(Files.file_name == new_filename, Files.user_id == user.id).count()

    if filename_exists:
        response.status_code = status.HTTP_406_NOT_ACCEPTABLE
        return {"message": "You already have a file with same name"}

    current_name = file.file_name

    file_query.update({"file_name": new_filename}, synchronize_session=False)
    db.commit()
    db.refresh(file)

    files_root_path = f"static/dc/{user.id}/"
    os.rename(f"{files_root_path}{current_name}", f"{files_root_path}{file.file_name}")

    return {"message": "File renamed successfully"}