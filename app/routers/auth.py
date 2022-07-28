from fastapi import APIRouter, Depends, status, Response
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session

from app.database import get_db
from app.models import Users
from app.oauth import get_current_user

from app.utils import verify_password
from app.oauth import create_access_token

from app.schemas import Login

router = APIRouter(
    prefix="/api/v1/auth",
    tags=["Auth"]
)

@router.post("/login", status_code=status.HTTP_200_OK, response_model=Login)
def user_login(response: Response, db: Session = Depends(get_db), form_data: OAuth2PasswordRequestForm = Depends()):
    user = db.query(Users).filter(Users.email_address == form_data.username).first()

    if not user or not verify_password(form_data.password, user.password):
        response.status_code = status.HTTP_401_UNAUTHORIZED
        return {"message": "Invalid email address or password"}
    
    access_token = create_access_token({"user_id": user.id})

    return {"message": "Login successfully", "access_token": access_token, "token_type": "Bearer"}

@router.get("/verify", status_code=status.HTTP_200_OK)
def verify_user(auth: dict = Depends(get_current_user)):
    return {"message": "User verified successfully", "user": auth["user"]}