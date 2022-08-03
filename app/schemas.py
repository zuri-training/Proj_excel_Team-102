from datetime import datetime
from email import message
from typing import List, Optional
from pydantic import BaseModel

class AddUser(BaseModel):
    first_name: str
    last_name: str
    email_address: str
    password: str

    class Config:
        orm_mode = True

class User(AddUser):
    id: int
    time_added: datetime

class GetUser(BaseModel):
    message: str
    user: Optional[User]

class Login(BaseModel):
    message: str
    access_token: Optional[str]
    token_type: Optional[str]
    user_info: Optional[User]

class File(BaseModel):
    id: int
    user_id: int
    file_name: str
    status: int
    time_added: datetime
    file_content: List

    class Config:
        orm_mode = True

class GetFile(BaseModel):
    message: str
    file: Optional[File]

    class Config:
        orm_mode = True 