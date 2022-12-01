from typing import Any

from pydantic import BaseModel


class FaqBase(BaseModel):
    question: str
    answer: str


class FaqCreate(FaqBase):
    pass


class FaqUpdate(FaqBase):
    pass


class FaqRetrieve(FaqBase):
    pass 

class FaqDelete(FaqBase):
    pass 

class Faq(FaqBase):
    id: int
    last_updated: Any

    class Config:
        orm_mode = True
