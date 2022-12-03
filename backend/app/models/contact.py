from datetime import datetime
from sqlalchemy import Column, Integer, String, DateTime, Text, Enum
<<<<<<< HEAD
=======
from sqlalchemy_utils import EmailType
from app.schemas.contact import Status
>>>>>>> d0c10cac25561c982c3b842eecd664fa38be4c16

import enum
from app.database.base_class import Base

class Status(enum.Enum):
    Unread = "Unread"
    Read = "Read"
    


class Contact(Base):
    __tablename__ = "contacts"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(255), nullable=False)
    email = Column(EmailType, index=True, nullable=False)
    message = Column(Text, nullable=False)
    last_updated = Column(DateTime, default=datetime.utcnow())
<<<<<<< HEAD
    status = Column(Enum(Status), default=Status.Unread)
=======
    status = Column(Enum(Status), default=Status.in_review)
>>>>>>> d0c10cac25561c982c3b842eecd664fa38be4c16
