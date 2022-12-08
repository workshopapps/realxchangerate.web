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
from starlette.requests import Request
from pydantic import EmailStr, BaseModel
from app.api.deps import get_db
from sqlalchemy.orm import Session

from typing import List

from app.crud import admin


from email.message import EmailMessage
import os
import ssl
import smtplib
from smtplib import SMTPResponseException
from decouple import config
from typing import Any, List
from fastapi import APIRouter, Depends, HTTPException, status

router = APIRouter()


email_sender = 'ejibe750@gmail.com'
email_password = config('MAIL_PASSWORD')


subject = 'Reset your password'

body = """
Hello, click on this link to reset your password:\n
https://streetrates.hng.tech \n
If you did not request for this, kindly disregard the email and contact us on the streetrates web app.

"""



router = APIRouter()


@router.post("/forgot_password")
async def sending_mail(email: EmailStr, db: Session = Depends(get_db)):
    admin_email = crud.admin.get_by_email(db, email=email)
    if not admin_email:
        raise HTTPException(
            status_code=404,
            detail="Email address does not exist, please enter a valid email"
        )
    email_receiver = email
    em = EmailMessage()
    em['From'] = email_sender
    em['To'] = email_receiver
    em['Subject'] = subject
    em.set_content(body)


    context = ssl.create_default_context()
    try:
        with smtplib.SMTP_SSL('smtp.gmail.com', 465, context=context) as smtp:
            smtp.login(email_sender, email_password)
            smtp.sendmail(email_sender, email_receiver, em.as_string())
    except SMTPResponseException as e:
        print(f'An error occured, error: {e}')
        return {"Message": "Oops!!! \nCould not send message"}
    return {"Message":"Your message has been sent!"}


@router.patch("/reset_password")
def reset_password(*, email: str, password: str,
                   db: Session = Depends(get_db), obj_in: Union[AdminUpdate, Dict[str, Any]]) -> Any:
    details = crud.admin.get_by_email(db=db, email=email)
    if details:
        password = crud.admin.update(db=db, db_obj=details, obj_in=obj_in)
        return password
    else:
        return {"message": "user not found"}

