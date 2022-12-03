from sqlalchemy import Column, Integer, String, Boolean
from sqlalchemy_utils import EmailType
from app.database.base_class import Base
# from sqlalchemy.dialects.mysql import VARCHAR


class Admin(Base):
    __tablename__ = "admins"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(EmailType, unique=True, index=True)
    password = Column(String(length=100), nullable=False)
    is_active = Column(Boolean, default=True)
