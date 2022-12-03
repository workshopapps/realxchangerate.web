
from typing import Optional, List, Any

from sqlalchemy.orm import Session
from fastapi.encoders import jsonable_encoder
from sqlalchemy import desc
from app.crud.base import CRUDBase
from app. models import Rate
from app import crud
from app.schemas import currency
from app.schemas.rate import RateCreate, RateBase

class CRUDRate(CRUDBase[Rate, RateCreate, RateBase]):
    def create(self, db:Session, obj_in: RateCreate) -> Rate:
        obj_in_data = jsonable_encoder(obj_in)
        db_oj = Rate(
          **obj_in_data
        )
        
        db.add(db_oj)
        db.commit()
        db.refresh(db_oj)
        return db_oj
    # Declare model specific CRUD operation methods.
    def get_rates_by_limit(self, db: Session, currency_id, skip: int = 0, limit: int = 15):
        """
        Queries the database and return rates of a 
        particular currency based on the limit set

        @currency_id: id of currency
        @limit: no of rates to query for
        """
        return db.query(self.model).filter(self.model.currency_id == currency_id).order_by(self.model.last_updated.desc()).limit(limit).all()    

    def get_rate_by_currency_id(self, db: Session, currency_id: int) -> Optional[Rate]:
        """
        Gets the latest rate of a currency using the currency_id.
        """
        return (
            db.query(Rate)
            .filter(Rate.currency_id == currency_id)
            .order_by(desc(Rate.id))
            .first()
        )

    def get_rate_by_currency_id(self, db: Session, currency_id: int) -> Optional[Rate]:
        """
        Gets the latest rate of a currency using the currency_id.
        """
        return (
            db.query(Rate)
            .filter(Rate.currency_id == currency_id)
            .order_by(desc(Rate.id))
            .first()
        )
    
    def get_last_parallel_buy_rate(self, db: Session):
        # gets the last parallel_buy_rate
        last_buy_rate = db.query(Rate).order_by(Rate.parallel_buy.desc()).first()
        return last_buy_rate

    def get_last_parallel_sell_rate(self, db: Session):
        # gets the last parallel_sell_rate
        last_sell_rate = db.query(Rate).order_by(Rate.parallel_sell.desc()).first()
        return last_sell_rate


rate = CRUDRate(Rate)
