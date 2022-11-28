from datetime import datetime
from email.policy import default
from sqlalchemy import Column, Integer, String, Float, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from app.database.base_class import Base
import datetime


class Rate(Base):
    __tablename__ = "rates"

    id = Column(Integer, primary_key=True, index=True)
    official_buy = Column(Float)
    official_sell = Column(Float)
    parallel_buy = Column(Float)
    parallel_sell = Column(Float)
    last_updated = Column(DateTime, default=datetime.datetime.utcnow)
    currency_id = Column(Integer, ForeignKey("currencies.id"), nullable=False)

    currency = relationship(
        "Currency", back_populates="rates", passive_deletes=True)
