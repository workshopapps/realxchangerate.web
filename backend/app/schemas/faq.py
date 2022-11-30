from typing import Any

from pydantic import BaseModel


class FaqBase(BaseModel):
    title: str
    content: str


class FaqUpdate(BaseModel):
    title: str
    content: str


class FaqCreate(FaqBase):
    pass


class Faq(FaqBase):
    id: int
    last_updated: Any

    class Config:
        orm_mode = True
