from datetime import datetime
from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.orm import relationship

from app.database.base_class import Base


class Faq(Base):
    __tablename__ = "faq"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, unique=True, index=True, nullable=False)
    content = Column(String, nullable=False)
    last_updated = Column(DateTime, default=datetime.utcnow())
