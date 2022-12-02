from typing import Optional, Any

from pydantic import BaseModel


class RateBase(BaseModel):
    official_buy: float
    official_sell: float
    parallel_buy: float
    parallel_sell: float


class RateCreate(RateBase):
    currency_id: int
    pass


class RateUpdate(RateBase):
    pass


class Rate(RateBase):
    id: int
    currency_id: int
    last_updated: Any

    class Config:
        orm_mode = True
