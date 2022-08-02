from datetime import datetime
from typing import Optional
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