from pydantic import BaseModel
from pydantic import EmailStr


class ContactBase(BaseModel):
    name = str
    email = EmailStr
    message = str

class ContactCreate(ContactBase):
    pass

class Contact(ContactBase):
    id: int
    
    class Config:
        orm_mode = True