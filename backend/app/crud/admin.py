from typing import Any, Optional, Union, Dict
from sqlalchemy.orm import Session

from app.crud.base import CRUDBase
from app.models.admin import Admin
from app.schemas.admin import AdminCreate, AdminUpdate

from app.core.security import get_password_hash, verify_password

class CRUDAdmin(CRUDBase[Admin, AdminCreate, AdminUpdate]):
    """
    Admin Crud
    """
    def get_by_email(self, db:Session, *, email: str) -> Optional[Admin]:
        return db.query(Admin).filter(Admin.email == email).first()

    def create(self, db:Session, obj_in: AdminCreate) -> Admin:
        db_obj = Admin(
            email=obj_in.email,
            password=get_password_hash(obj_in.password),
        )
        db.add(db_obj)
        db.commit()
        db.refresh(db_obj)
        return db_obj

    def update(self, db: Session, *, db_obj: Admin, obj_in: Union[AdminUpdate, Dict[str, Any]]) -> Admin:
        if isinstance(obj_in, dict):
            update_data = obj_in
        else:
            update_data = obj_in.dict(exclude_unset=True)
        if update_data["password"]:
            hashed_password = get_password_hash(update_data["password"])
            del update_data["password"]
            update_data["password"] = hashed_password
        return super().update(db, db_obj=db_obj, obj_in=update_data)

    def authenticate(self, db: Session, *, email: str, password: str) -> Optional[Admin]:
        admin = self.get_by_email(db, email=email)
        if not admin:
            return None
        if not verify_password(password, admin.password):
            return None
        return admin
    
    def is_active(self, admin: Admin) -> bool:
        return admin.is_active

admin = CRUDAdmin(Admin)
