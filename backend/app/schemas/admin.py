from typing import List, Union, Optional

from pydantic import BaseModel


class AdminBase(BaseModel):
    email: str


class AdminCreate(AdminBase):
    password: str


class Admin(AdminBase):
    id: int
    is_active: bool

    class Config:
        orm_mode = True

class AdminUpdate(AdminBase):
    password: Optional[str] = None
