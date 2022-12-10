from sqlalchemy import Column, Integer, String, Boolean
from sqlalchemy_utils import EmailType
from app.database.base_class import Base


class Suggestion(Base):
    __tablename__ = "suggestions"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(EmailType, nullable=False, index=True)
    full_name = Column(String(255), nullable=False, index=True)
    Suggestion = Column(String(1000), nullable=False, index=True)
