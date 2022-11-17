from slugify import slugify
from sqlalchemy import Boolean, Column, DateTime, Float, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

from db.database import Base, engine


class Currency(Base):
    __tablename__ = "currencies"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    country = Column(String, unique=True, index=True, nullable=False)
    isocode = Column(String, nullable=False)
    symbol = Column(String, unique=True)
    slug = Column(String, nullable=False, unique=True)

    rates = relationship("Rate", back_populates="currency")

    def __str__(self):
        """Returns description of a currency object"""
        return f"{self.isocode}: {self.country}"


class Rate(Base):
    __tablename__ = "rates"

    id = Column(Integer, primary_key=True, index=True)
    official_buy = Column(Float)
    official_sell = Column(Float)
    parallel_buy = Column(Float)
    parallel_sell = Column(Float)
    last_updated = Column(DateTime)
    currency_id = Column(Integer, ForeignKey("currencies.id"))

    currency = relationship("Currency", back_populates="rates")


class Admin(Base):
    __tablename__ = "admins"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    password = Column(String)
    is_active = Column(Boolean, default=True)


# create database and tables
Base.metadata.create_all(engine)
