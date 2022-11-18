from typing import Optional, List

from sqlalchemy.orm import Session

from app.crud.base import CRUDBase
from app.models.currency import Currency
from app.schemas.currency import Currency as currency_schema


class CRUDProduct(CRUDBase[Product, ProductCreate, ProductUpdate]):
    # Declare model specific CRUD operation methods.
    pass


product = CRUDProduct(Product)
