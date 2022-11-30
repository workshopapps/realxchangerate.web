import os
from typing import Any, List,  Optional, Union, Dict
from fastapi import APIRouter, Depends, HTTPException, status, BackgroundTasks
from sqlalchemy.orm import Session
import uuid
from app import schemas, crud
from app.api.deps import get_db
from starlette.responses import JSONResponse
import os
from app.models.admin import Admin
from decouple import config
from fastapi import FastAPI, Depends, HTTPException
from app.schemas.admin import AdminUpdate, AdminCreate
from fastapi_mail import FastMail, MessageSchema, ConnectionConfig
from starlette.requests import Request
from pydantic import EmailStr, BaseModel
from app.api.deps import get_db
from sqlalchemy.orm import Session

from typing import List
from app.email_util.email_utils import random
from app.crud import admin


class EmailSchema(BaseModel):
    email: EmailStr




conf = ConnectionConfig(
    MAIL_USERNAME=config('MAIL_USERNAME'),
    MAIL_PASSWORD=config('MAIL_PASSWORD'),
    MAIL_FROM=config('MAIL_FROM'),
    MAIL_PORT=config('MAIL_PORT', cast=int),
    MAIL_SERVER=config('MAIL_SERVER'),
    MAIL_TLS=config('MAIL_TLS', cast=bool),
    MAIL_SSL=config('MAIL_SSL', cast=bool),
)


router = APIRouter()


@router.post("/forgot_password")
async def sending_mail(email: EmailStr, db: Session = Depends(get_db)):
    admin_email = crud.admin.get_by_email(db, email=email)
    if not admin_email:
        raise HTTPException(
            status_code=404,
            detail="Email address does not exist, please enter a valid email"
        )
    email = [email]
    template = """
            <html>
            <body>


                <p>Hello !!! Did you request for a password reset?
                <br></p>
                <p>
                <a href="{{ url_for('reset_password', path='api/forget_password/reset_password') }}" target="_blank">
                click here to reset your password
            </a>
                <p> If this is not you, secure your account by turning on 2-factor authentication<p>
            </body>
            </html>
            """

    message = MessageSchema(
        subject="Reset-password Token",
        recipients=email,
        body=template,
        subtype="html"
    )

    fm = FastMail(conf)
    try:
        await fm.send_message(message)
    except:
        return 'message: Your connection is not secure!'

    return JSONResponse(status_code=200, content={"message": "email has been sent"})


@router.patch("/reset_password")
def reset_password(*, email: str, password: str,
                   db: Session = Depends(get_db), obj_in: Union[AdminUpdate, Dict[str, Any]]) -> Any:
    details = crud.admin.get_by_email(db=db, email=email)
    if details:
        password = crud.admin.update(db=db, db_obj=details, obj_in=obj_in)
        return password
    else:
        return {"message": "user not found"}
# def login_with_password(*,
# db: Session = Depends(get_db), email: str, password: str) -> Any:
#     logging = crud.admin.authenticate(db=db, email=email, password=password)
#     return logging
