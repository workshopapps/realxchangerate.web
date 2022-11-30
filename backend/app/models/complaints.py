from sqlalchemy import Column, Integer, String, DateTime, DateTime
from sqlalchemy_utils import EmailType
from sqlalchemy.orm import relationship
from datetime import datetime

from app.database.base_class import Base


class Complaint(Base):
    __tablename__ = "complaints"

    id = Column(Integer, primary_key=True, index=True)
    full_name = Column(String, unique=True, index=True, nullable=False)
    email = Column(EmailType, nullable=False)
    complaint = Column(String(256), nullable=False)
    timestamp = Column(DateTime(timezone=True), nullable=False, default=datetime.now())
