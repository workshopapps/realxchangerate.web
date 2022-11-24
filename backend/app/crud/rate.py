from typing import Optional, List, Any

from sqlalchemy.orm import Session
from fastapi.encoders import jsonable_encoder
from app.crud.base import CRUDBase
from app. models import Rate
from app.schemas.rate import RateCreate, RateBase

class CRUDRate(CRUDBase[RateCreate, RateBase]):
    def create(self, db:Session, obj_in: RateCreate) -> Rate:
        obj_in_data = jsonable_encoder(obj_in)
        db_oj = Rate(
          **obj_in_data
        )
        db.add(db_oj)
        db.commit()
        db.refresh(db_oj)
        return db_oj

rate = CRUDRate(Rate)