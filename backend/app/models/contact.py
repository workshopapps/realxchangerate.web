from datetime import datetime
from sqlalchemy import Column, Integer, String, DateTime, Text
from sqlalchemy_utils import EmailType

from app.database.base_class import Base


class Contact(Base):
    __tablename__ = "contacts"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(255), nullable=False)
    email = Column(EmailType, index=True, nullable=False)
    message = Column(Text, nullable=False)
    last_updated = Column(DateTime, default=datetime.utcnow())
