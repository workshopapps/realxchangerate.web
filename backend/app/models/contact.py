from datetime import datetime
from sqlalchemy import Column, Integer, String, DateTime, Text, Enum
from sqlalchemy_utils import EmailType
from app.schemas.contact import Status

from app.database.base_class import Base


class Contact(Base):
    __tablename__ = "contacts"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(255), nullable=False)
    email = Column(EmailType, index=True, nullable=False)
    message = Column(Text, nullable=False)
    last_updated = Column(DateTime, default=datetime.utcnow())
    status = Column(Enum(Status), default=Status.in_review)
