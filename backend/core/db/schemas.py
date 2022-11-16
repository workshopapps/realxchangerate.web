from typing import List, Union

from pydantic import BaseModel
from datetime import datetime


class RateBase(BaseModel):
    official_buy: float
    official_buy: float
    parallel_sell: float
    parallel_sell: float
    last_updated = datetime.now()


class RateCreate(RateBase):
    pass


class Rate(RateBase):
    id: int
    currency_id: int

    class Config:
        orm_mode = True


class CurrencyBase(BaseModel):
    country: str
    isocode: str
    symbol: str


class CurrencyCreate(CurrencyBase):
    pass


class Currency(CurrencyBase):
    id: int
    black_market_rates: List[BlackMarketRate] = []
    official_market_rates: List[OfficialMarketRate] = []

    class Config:
        orm_mode = True


class AdminBase(BaseModel):
    email: str


class AdminCreate(AdminBase):
    password: str


class Admin(AdminBase):
    id: int
    is_active: bool

    class Config:
        orm_mode = True
