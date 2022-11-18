from typing import Optional

from pydantic import BaseModel


class RateBase(BaseModel):
    official_buy: float
    official_buy: float
    parallel_sell: float
    parallel_sell: float
    last_updated = datetime.now().strftime('%c')


class RateCreate(RateBase):
    pass


class Rate(RateBase):
    id: int
    currency_id: int

    class Config:
        orm_mode = True
