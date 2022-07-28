from datetime import datetime, timedelta
from fastapi.security import OAuth2PasswordBearer
from jose import JWTError, jwt
from fastapi import Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.database import get_db
from app.models import Users

from app.settings import app_settings

SECRET_KEY = app_settings.JWT_SECRET
ALGORITHM = app_settings.JWT_ALGORITHM
ACCESS_TOKEN_EXPIRE_MINUTES = app_settings.JWT_EXPIRES_IN

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/api/v1/auth/login")

def create_access_token(data: dict):
    to_encode = data.copy()

    expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})

    token = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

    return token

def verify_access_token(token: str, credential_exception) -> dict:
    try:
        token_decoded = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
    except JWTError as err:
        print(err)
        raise credential_exception

    return token_decoded

def get_current_user(db: Session = Depends(get_db), token: str = Depends(oauth2_scheme)):
    
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )

    decoded_token = verify_access_token(token, credentials_exception)

    if "user_id" in decoded_token.keys():
        user = db.query(Users).filter(Users.id == decoded_token["user_id"]).first()

        if not user:
            raise credentials_exception
        else:
            return {"user": user}
    else:
        raise credentials_exception