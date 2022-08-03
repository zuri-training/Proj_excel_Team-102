from datetime import datetime
from app.database import get_db
from app.models import Files, Users
from app.oauth import get_current_user
from app.utils import get_excel_contents, get_unique_dir, get_unique_filepath, upload_file
from fastapi import APIRouter, Depends, Response, UploadFile, Form, status

from sqlalchemy.orm import Session

import os

from app.operations.diff_checker import diff_checker
from app.operations.highlight_duplicates2 import highlight_duplicates2
from app.operations.remove_duplicates2 import remove_duplicates2

from app.schemas import GetFile

router = APIRouter(
    prefix="/api/v1/operations",
    tags=["Operations"]
)

@router.post("/file_upload", status_code=status.HTTP_201_CREATED, response_model=GetFile)
async def file_upload(file: UploadFile, response: Response, db: Session = Depends(get_db), 
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

    file_root_path = f"static/dc/{user.id}/"

    if file_exists and replace:
        unique_name = f"{abs(hash(datetime.now()))}_{file_exists.file_name}"
        file_exists_query.update({"file_name": unique_name, "status": 0}, synchronize_session=False)
        db.commit()

        os.rename(f"{file_root_path}{file.filename}", f"{file_root_path}{unique_name}")

    # upload and create xlsx version and delete csv
    # or find better logic
    if file_extension == "csv":
        pass

    file_path = f"{file_root_path}{file.filename}"
    await upload_file(file_path, file)

    new_file = Files(user_id=user.id, file_name=file.filename)
    db.add(new_file)
    db.commit()
    db.refresh(new_file)

    new_file.file_content = get_excel_contents(file_path)

    return {"message": "File uploaded successfully", "file": new_file}


@router.post("/diff_checker/")
async def do_diff_checker(file1: UploadFile, file2: UploadFile):

    # create unique directory
    unique_dirname = get_unique_dir()
    os.mkdir(unique_dirname)

    # upload file 1
    file1_path = get_unique_filepath(file1.filename, unique_dirname)
    await upload_file(file1_path, file1)

    # upload file 2
    file2_path = get_unique_filepath(file2.filename, unique_dirname)
    await upload_file(file2_path, file2)

    # do diff checker
    checked1, checked2 = diff_checker(unique_dirname, file1_path, file2_path)

    return {
        "message": "Operation Completed Successfully", 
        "checked_file_1": checked1.replace("static/", ""), 
        "checked_file_2": checked2.replace("static/", "")
    }

@router.post("/highlight_duplicates2/")
async def do_highlight_duplicates2(file: UploadFile, unique_columns: str = Form()):
    
    # create unique directory
    unique_dirname = get_unique_dir()
    os.mkdir(unique_dirname)

    # upload file 1
    file_path = get_unique_filepath(file.filename, unique_dirname)
    await upload_file(file_path, file)

    # do highlight duplicates
    highlighted, analytics = highlight_duplicates2(unique_dirname, file_path, unique_columns)

    return {
        "message": "Operation Completed Successfully", 
        "highlighted": highlighted.replace("static/", ""), 
        "analytics": analytics.replace("static/", "")
    }

@router.post("/remove_duplicates2/")
async def do_remove_duplicates2(file: UploadFile, unique_columns: str = Form()):

    # create unique directory
    unique_dirname = get_unique_dir()
    os.mkdir(unique_dirname)

    # upload file 1
    file_path = get_unique_filepath(file.filename, unique_dirname)
    await upload_file(file_path, file)

    # do highlight duplicates
    duplicates, without_duplicates = remove_duplicates2(unique_dirname, file_path, unique_columns)

    return {
        "message": "Operation Completed Successfully", 
        "highlighted": duplicates.replace("static/", ""), 
        "analytics": without_duplicates.replace("static/", "")
    }