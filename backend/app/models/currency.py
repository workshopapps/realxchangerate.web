from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship

from app.database.base_class import Base


class Currency(Base):
    __tablename__ = "currencies"

    id = Column(Integer, primary_key=True, index=True)
    country = Column(String, unique=True, index=True, nullable=False)
    isocode = Column(String, unique=True, nullable=False)
    symbol = Column(String, nullable=False)
    name = Column(String)

    rates = relationship(
        "Rate", back_populates="currency", cascade="all, delete")

    def dict(self):
        """Returns dictionary representation of currency"""
        dict = {}
        dict["id"] = self.id
        dict["country"] = self.country
        dict["isocode"] = self.isocode
        dict["symbol"] = self.symbol

        return dict
