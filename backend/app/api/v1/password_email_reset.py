import os
from typing import Any, Union, Dict
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app import crud
from app.models import Admin

from decouple import config
from app.schemas.admin import AdminUpdate
from pydantic import EmailStr
from app.api.deps import get_db



from email.message import EmailMessage
import ssl
import smtplib
from smtplib import SMTPResponseException




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
    """
    -Send a reset password email to the mail provided\n
    -Sample_email to use: streetrates.hng@gmail.com\n
    -password: !@12qwAS\n
    -Sign in link: https://mail.google.com/mail/u/2/#inbox \n
    -Go to the inbox to view the message

    """
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
        return {"Message": "Oops!!! Could not send message"}
    return {"Message":"Your message has been sent!"}


@router.patch("/reset_password/{email}")
def reset_password(*, email: str,
                   db: Session = Depends(get_db), obj_in: Union[AdminUpdate, Dict[str, Any]]) -> Any:
    email = crud.admin.get_by_email(db=db, email=email)
    if email:
        password = crud.admin.update(db=db, db_obj=email, obj_in=obj_in)
        return ({"message":"password updated"})
    else:
        return {"message": "user not found"}

