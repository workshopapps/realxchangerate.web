from typing import List
from pydantic import BaseModel

from .rate import Rate



class CurrencyBase(BaseModel):
    country: str
    isocode: str
    symbol: str
    name: str


class CurrencyCreate(CurrencyBase):
    pass


class CurrencyUpdate(CurrencyBase):
    pass


class Currency(CurrencyBase):
    id: int
    rates: List[Rate] = []

    class Config:
        orm_mode = True
