import os
from fastapi import APIRouter, Depends, Response, status

from sqlalchemy.orm import Session

from app.database import get_db
from app.models import Users
from app.oauth import create_access_token
from app.schemas import AddUser, Login
from app.utils import get_password_hash

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