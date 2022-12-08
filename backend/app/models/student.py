from sqlalchemy import Column, Integer, String, Boolean, DateTime, ForeignKey, Text
from sqlalchemy_utils import EmailType
from sqlalchemy.orm import relationship
from app.database.base_class import Base


class Student(Base):
    __tablename__ = "student"

    id = Column(Integer, primary_key=True, index=True)
    first_name = Column(String(255))
    last_name = Column(String(255))
    email = Column(EmailType, unique=True)
    dob = Column(DateTime)
    phone_number = Column(String(255), nullable=False)

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
    address = Column(String(255))
    city = Column(String(255))
    country = Column(String(255))

class School(Base):
    __tablename__ = "school"
    id = Column(Integer, primary_key=True, index=True)
    student_id = Column(Integer, ForeignKey("student.id"), nullable=False)
    name = Column(String(255), nullable=False)
    name_of_course = Column(String(255), nullable=False)
    year_of_entry = Column(String(255), nullable=False)
    year_of_completion = Column(String(255))

class Questions(Base):
    __tablename__ = "questions"
    id = Column(Integer, primary_key=True, index=True)
    student_id = Column(Integer, ForeignKey("student.id"), nullable=False)
    question = Column(String(255), nullable=False)
    answer = Column(Text)
