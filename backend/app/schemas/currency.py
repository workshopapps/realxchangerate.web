from typing import List
from pydantic import BaseModel


class CurrencyBase(BaseModel):
    country: str
    isocode: str
    symbol: str


class CurrencyCreate(CurrencyBase):
    pass


class Currency(CurrencyBase):
    id: int
    rates: List[Rate] = []

    class Config:
        orm_mode = True
