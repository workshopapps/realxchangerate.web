from typing import Any, Optional, Union, Dict
from sqlalchemy.orm import Session

from app.crud.base import CRUDBase
from app.models.student import Address, Questions, Student, School
from app.schemas.student import StudentCreate, StudentUpdate,StudentCreateResponse

from app.core.security import get_password_hash, verify_password


class CRUDStudent(CRUDBase[Student, StudentCreate, StudentUpdate]):
    """
    Student Crud
    """

    def get_by_email(self, db: Session, *, email: str) -> Optional[Student]:
        return db.query(Student).filter(Student.email == email).first()

    def create(self, db: Session, obj_in: StudentCreate) -> Student:
        student_info_obj = Student(**obj_in.info.dict())
        db.add(student_info_obj)
        db.commit()

        student_address_obj = Address(student_id=student_info_obj.id, **obj_in.address.dict())
        db.add(student_address_obj)

        student_school_obj = School(student_id=student_info_obj.id, **obj_in.school.dict())
        db.add(student_school_obj)

        for question in obj_in.question:
            student_question_obj = Questions(student_id=student_info_obj.id, **question.dict())
            db.add(student_question_obj)

        db.commit()

        student_info = self.get_by_email(db=db, email=student_info_obj.email)

        return StudentCreateResponse(
            student_id = student_info.id,
            data = StudentCreate(
                info = student_info_obj,
                address = student_address_obj,
                school = student_school_obj,
                question = student_info.question
            )
        )

student = CRUDStudent(Student)