from typing import Optional, List

from sqlalchemy.orm import Session

from app.crud.base import CRUDBase
from app.models.rate import Rate
# from app.schemas.currency import Currency as currency_schema
from app.schemas.rate import RateCreate, RateBase


class CRUDRate(CRUDBase[Rate, RateCreate, RateBase]):
    # Declare model specific CRUD operation methods.
    pass


rate = CRUDRate(Rate)
