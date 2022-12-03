import secrets
import os
from dotenv import load_dotenv


from pydantic import BaseSettings

load_dotenv()
class Settings(BaseSettings):
    API_V1_STR: str = "/api"
    PROJECT_NAME: str = "RealExchangeRates"
    ADMIN_USER_NAME: str = os.getenv("ADMIN_USER_NAME")
    ADMIN_PASSWORD: str = os.getenv("ADMIN_PASSWORD")
    SECRET_KEY: str = secrets.token_urlsafe(32)
    ALGORITHM: str = os.getenv("ALGORITHM")
    ACCESS_TOKEN_EXPIRE_MINUTES: int = os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES")
    SQLALCHEMY_DATABASE_URI: str = os.getenv("SQLALCHEMY_DATABASE_URI")
    TELEGRAM_BOT_API: str = os.getenv("TELEGRAM_BOT_API_KEY")

    class Config:
        env_file = "env"


settings = Settings()
