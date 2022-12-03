
from typing import Optional, List, Any

from sqlalchemy.orm import Session
from fastapi.encoders import jsonable_encoder
from sqlalchemy import desc
from app.crud.base import CRUDBase
from app. models import Rate
from app import crud
from app.schemas import currency
from app.schemas.rate import RateCreate, RateBase
from app.crud.currency import currency
from app.utils import calculate_percentage_change

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
    
    def get_percentage_rate_change(self, db:Session, isocode: str):
        """
        Sends the percentage change of the last 2 rates of currency passed.
        """
        
        # Respond with percentage change

        # Get the currency using the isocode
        get_currency = currency.get_currency_by_isocode(db=db, isocode=isocode)

        if get_currency == None:
            response = {'status': False, 'message': 'Currency not found!'}

            return response

        # Get the last two rates of the currency
        rates = get_currency.rates[-2:]

        previous_rate = rates[0]
        current_rate = rates[1]

        # Previous Parallel rates
        previous_parallel_buy_rate = previous_rate.parallel_buy
        previous_parallel_sell_rate = previous_rate.parallel_sell
        
        # Current Parallel rates
        current_parallel_buy_rate = current_rate.parallel_buy
        current_parallel_sell_rate = current_rate.parallel_sell

        # Previous Official rates
        previous_official_buy_rate = previous_rate.official_buy
        previous_official_sell_rate = previous_rate.official_sell

        # Current Official rates
        current_official_buy_rate = current_rate.official_buy
        current_official_sell_rate = current_rate.official_sell


        # Calculate the percentage change for parallel rates
        parallel_buy_percentage_change = calculate_percentage_change(previous_parallel_buy_rate, current_parallel_buy_rate)
        parallel_sell_percentage_change = calculate_percentage_change(previous_parallel_sell_rate, current_parallel_sell_rate)

        # Calculate the percentage change for official rates
        official_buy_percentage_change = calculate_percentage_change(previous_official_buy_rate, current_official_buy_rate)
        official_sell_percentage_change = calculate_percentage_change(previous_official_sell_rate, current_official_sell_rate)
        
        response = {
            'status': True,
            'message': 'Percentage change gotten',
            'data':{
                'currency': get_currency.name,
                'parallel_buy_percentage_change': parallel_buy_percentage_change,
                'parallel_sell_percentage_change': parallel_sell_percentage_change,
                'official_buy_percentage_change': official_buy_percentage_change,
                'official_sell_percentage_change': official_sell_percentage_change
            }
            
        }

        return response
    def get_last_parallel_buy_rate(self, db: Session):
        # gets the last parallel_buy_rate
        last_buy_rate = db.query(Rate).order_by(Rate.parallel_buy.desc()).first()
        return last_buy_rate

    def get_last_parallel_sell_rate(self, db: Session):
        # gets the last parallel_sell_rate
        last_sell_rate = db.query(Rate).order_by(Rate.parallel_sell.desc()).first()
        return last_sell_rate


rate = CRUDRate(Rate)
