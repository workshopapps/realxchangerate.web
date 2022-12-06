from typing import Optional, List, Any

from sqlalchemy.orm import Session

from app.crud.base import CRUDBase
from fastapi.encoders import jsonable_encoder

from app.models.adverts import Advert
from app.schemas.adverts import AdvertCreate, AdvertUpdate


class CRUDAdvert(CRUDBase[Advert, AdvertCreate, AdvertUpdate]):
    """
    Advert Crud
    """

    def create(self, db:Session, obj_in: AdvertCreate) -> Advert:
        obj_in_data = jsonable_encoder(obj_in)
        db_oj = Advert(
          **obj_in_data
        )
        
        db.add(db_oj)
        db.commit()
        db.refresh(db_oj)
        return db_oj

    def get_all_adverts(self, db: Session):
        """Returns all adverts"""
        return db.query(Advert).all()    

advert=CRUDAdvert(Advert)