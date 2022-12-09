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

<<<<<<< HEAD
    def get_all_adverts(self, db: Session):
        """Returns all adverts"""
        return db.query(Advert).all() 

    def get_adverts_by_id(self, db:Session, id) -> Any:  
        """gets adverts by id"""
        return db.query(Advert).filter(Advert.id == id).first()    

=======
>>>>>>> 6f57805a769a6279cd050f6849011e394528fb69
advert=CRUDAdvert(Advert)