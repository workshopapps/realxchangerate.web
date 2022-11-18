from sqlalchemy import Column, Integer, String, Float, DateTime

from app.database.base_class import Base


class Rate(Base):
    __tablename__ = "rates"

    id = Column(Integer, primary_key=True, index=True)
    official_buy = Column(Float)
    official_sell = Column(Float)
    parallel_buy = Column(Float)
    parallel_sell = Column(Float)
    last_updated = Column(DateTime)
    currency_id = Column(Integer, ForeignKey("currencies.id"))

    currency = relationship(
        "Currency", back_populates="rates", passive_deletes=True)
