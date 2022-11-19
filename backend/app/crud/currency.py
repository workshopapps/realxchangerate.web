from typing import Optional, List, Any

from sqlalchemy.orm import Session

from app.crud.base import CRUDBase
from app.models.currency import Currency
# from app.schemas.currency import Currency as currency_schema
from app.schemas.currency import CurrencyCreate, CurrencyUpdate


class CRUDCurrency(CRUDBase[Currency, CurrencyCreate, CurrencyUpdate]):
    # Declare model specific CRUD operation methods.
    def get_currency_by_isocode(self, db:Session, isocode:str) -> Any:
        return db.query(Currency).filter(Currency.isocode == isocode).first()


currency = CRUDCurrency(Currency)
