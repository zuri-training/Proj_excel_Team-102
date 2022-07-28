from pydantic import BaseSettings

class AppSettings(BaseSettings):
    DB: str
    DB_HOST: str
    DB_PORT: int
    DB_USERNAME: str
    DB_PASSWORD: str
    JWT_SECRET: str
    JWT_ALGORITHM: str
    JWT_EXPIRES_IN: int

    class Config:
        env_file = ".env"

app_settings = AppSettings()