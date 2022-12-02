from datetime import datetime
from sqlalchemy import Column, Integer, String, DateTime, Text, Enum

from app.database.base_class import Base

class Status(enum.Enum):
    Read = "Read"
    Unread = "Unread"


class Contact(Base):
    __tablename__ = "contacts"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    email = Column(String, index=True, nullable=False)
    message = Column(Text, nullable=False)
    last_updated = Column(DateTime, default=datetime.utcnow())
    status = Column(Enum(Status), default=Status.Unread)
