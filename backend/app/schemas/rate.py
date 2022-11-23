from typing import Optional, Any

from pydantic import BaseModel


class RateBase(BaseModel):
    official_buy: float
    official_sell: float
    parallel_buy: float
    parallel_sell: float
    currency_id: int


class RateCreate(RateBase):
    pass


class Rate(RateBase):
    id: int
    currency_id: Optional[int]
    last_updated: Any

    class Config:
        orm_mode = True
