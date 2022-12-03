from sqlalchemy import Column, Integer, String, Boolean, DateTime, ForeignKey, Text
from sqlalchemy_utils import EmailType
from sqlalchemy.orm import relationship
from app.database.base_class import Base


class Student(Base):
    __tablename__ = "student"

    id = Column(Integer, primary_key=True, index=True)
    first_name = Column(String)
    last_name = Column(String)
    email = Column(EmailType, unique=True)
    dob = Column(DateTime)
    phone_number = Column(String, nullable=False)

    addresses = relationship(
        "Address", backref="student", uselist=False, cascade="all, delete")
    
    schools = relationship(
        "School", backref="student", uselist=False, cascade="all, delete")
    
    question = relationship(
        "Questions", backref="student", cascade="all, delete")

class Address(Base):
    __tablename__ = "address"
    id = Column(Integer, primary_key=True, index=True)
    student_id = Column(Integer, ForeignKey("student.id"), nullable=False)
    address = Column(String)
    city = Column(String)
    country = Column(String)

class School(Base):
    __tablename__ = "school"
    id = Column(Integer, primary_key=True, index=True)
    student_id = Column(Integer, ForeignKey("student.id"), nullable=False)
    name = Column(String, nullable=False)
    name_of_course = Column(String, nullable=False)
    year_of_entry = Column(String, nullable=False)
    year_of_completion = Column(String)

class Questions(Base):
    __tablename__ = "questions"
    id = Column(Integer, primary_key=True, index=True)
    student_id = Column(Integer, ForeignKey("student.id"), nullable=False)
    question = Column(String, nullable=False)
    answer = Column(Text)
