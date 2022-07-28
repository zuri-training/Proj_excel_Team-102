from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

from app.settings import app_settings

SQLALCHEMY_DATABASE_URL = f"postgresql://{app_settings.DB_USERNAME}:{app_settings.DB_PASSWORD}@{app_settings.DB_HOST}:{app_settings.DB_PORT}/{app_settings.DB}"

engine = create_engine(SQLALCHEMY_DATABASE_URL)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()