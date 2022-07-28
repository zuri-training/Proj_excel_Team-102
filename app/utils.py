from passlib.context import CryptContext
from math import floor

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def get_password_hash(password):
    return pwd_context.hash(password)

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def get_pagination(num_records, division):
    if not num_records:
        return 0
    pages = floor(num_records/division)
    return pages + 1 if (num_records % division) > 0 else pages

def get_skip(page, division):
    return (page - 1) * division