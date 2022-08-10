from datetime import datetime
import os

from typing import Union

from fastapi import APIRouter, Depends, Response, status, UploadFile

from sqlalchemy.orm import Session

from app.database import get_db
from app.models import Users
from app.oauth import create_access_token, get_current_user
from app.schemas import AddUser, ChangePassword, GetUser, Login, UserInfo
from app.utils import get_password_hash, verify_password, upload_file as op__upload_file

router = APIRouter(
    prefix="/api/v1/users",
    tags=["Users"]
)

@router.post("/", status_code=status.HTTP_201_CREATED, response_model=Login)
def add_user(user_add: AddUser, response: Response, db: Session = Depends(get_db)):

    email_exists = db.query(Users).filter(Users.email_address == user_add.email_address).count()
    if email_exists:
        response.status_code = status.HTTP_406_NOT_ACCEPTABLE
        return {"message": "Email has been used"}

    user_add.password = get_password_hash(user_add.password)

    user = Users(**user_add.dict())

    db.add(user)
    db.commit()
    db.refresh(user)

    # create user directory
    os.mkdir(f"static/dc/{user.id}/")

    access_token = create_access_token({"user_id": user.id})

    return {
        "message": "Account created successfully", 
        "access_token": access_token, 
        "token_type": "Bearer", 
        "user_info": user
    }

@router.patch("/info", status_code=status.HTTP_200_OK, response_model=GetUser)
def update_user_info(user_info: UserInfo, response: Response, db: Session=Depends(get_db), user: Users = Depends(get_current_user)):
    
    email_exists = db.query(Users).filter(Users.email_address == user_info.email_address, Users.id != user.id).count()
    if email_exists:
        response.status_code = status.HTTP_406_NOT_ACCEPTABLE
        return {"message": "Email has been used"}

    users_query = db.query(Users).filter(Users.id == user.id)

    users_query.update(user_info.dict(), synchronize_session=False)
    db.commit()

    user = users_query.first()

    return {"message": "User info updated successfully", "user": user}

@router.patch("/password", status_code=status.HTTP_200_OK, response_model=GetUser)
def update_user_password(change_password: ChangePassword, response: Response, db: Session=Depends(get_db), user: Users = Depends(get_current_user)):
    
    if change_password.new_password != change_password.confirm_new_password:
        response.status_code = status.HTTP_406_NOT_ACCEPTABLE
        return {"message": "Passwords do not match"}

    if not verify_password(change_password.current_password, user.password):
        response.status_code = status.HTTP_406_NOT_ACCEPTABLE
        return {"message": "Invalid current password"}

    users_query = db.query(Users).filter(Users.id == user.id)

    users_query.update({"password": get_password_hash(change_password.new_password)}, synchronize_session=False)
    db.commit()

    user = users_query.first()

    return {"message": "User password updated successfully", "user": user}

@router.patch("/picture", status_code=status.HTTP_200_OK, response_model=GetUser)
async def update_user_password(response: Response, db: Session = Depends(get_db), user: Users = Depends(get_current_user),
picture: Union[UploadFile, None] = None):

    users_query = db.query(Users).filter(Users.id == user.id)

    if not picture:
        users_query.update({"profile_picture": None}, synchronize_session=False)
        db.commit()
    else:
        extension = picture.filename.split(".")[-1]

        if extension not in ["png", "jpg", "jpeg", "gif"]:
            response.status_code = status.HTTP_406_NOT_ACCEPTABLE
            return {"message": "Unaccepted file format"}

        files_root_path = f"static/dc/{user.id}/"

        unique_name = f"{abs(hash(datetime.now()))}_{picture.filename}"

        file_path = f"{files_root_path}{unique_name}"
        await op__upload_file(file_path, picture)

        users_query.update({"profile_picture": unique_name}, synchronize_session=False)
        db.commit()

    user = users_query.first()

    return {"message": "User picture updated successfully", "user": user}