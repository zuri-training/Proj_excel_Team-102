from sqlalchemy import text, TIMESTAMP, Column, Integer, String

from app.database import Base

class Users(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, nullable=False)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    email_address = Column(String, unique=True, nullable=False)
    password = Column(String, nullable=False)
    time_added = Column(TIMESTAMP(timezone=True), nullable=False, server_default=text("now()"))