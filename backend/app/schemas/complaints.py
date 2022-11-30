from typing import Optional, Any

from pydantic import BaseModel


<<<<<<< HEAD
class ComplaintBase(BaseModel):
=======
class Complaint(BaseModel):
    id: int
>>>>>>> 04a703cdf26a22f5479090027375469f26c9c821
    full_name: str
    email: str
    complaint: str


class ComplaintCreate(ComplaintBase):
    pass


class ComplaintUpdate(ComplaintBase):
    pass

class Complaint(ComplaintBase):
    id: int
    timestamp: Any

    class Config:
        orm_mode = True
