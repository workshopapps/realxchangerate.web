from typing import List
from datetime import date
from pydantic import BaseModel


class StudentInfo(BaseModel):
    first_name: str
    last_name: str
    email: str
    dob: date
    phone_number: str

    class Config:
        orm_mode = True

class StudentAddress(BaseModel):
    address: str
    city: str
    country: str

    class Config:
        orm_mode = True

class StudentSchool(BaseModel):
    name: str
    name_of_course: str
    year_of_entry: str
    year_of_completion: str

    class Config:
        orm_mode = True

class StudentQuestion(BaseModel):
    question: str
    answer: str

    class Config:
        orm_mode = True


class StudentCreate(BaseModel):
    info: StudentInfo
    address: StudentAddress
    school: StudentSchool
    question: List[StudentQuestion]

    class Config:
        orm_mode = True

class StudentCreateResponse(BaseModel):
    student_id: int
    data: StudentCreate

    class Config:
        orm_mode = True

class StudentUpdate(BaseModel):
    pass