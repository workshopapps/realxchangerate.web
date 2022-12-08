from email.message import EmailMessage
import os
import ssl
import smtplib
from decouple import config
from typing import Any, List
from fastapi import APIRouter, Depends, HTTPException, status

router = APIRouter()


email_sender = 'ejibe750@gmail.com'
email_password = config('MAIL_PASSWORD')

email_receiver = 'vanedi2754@cosaxu.com'

subject = 'Test'

body = """
testing testing
"""

em = EmailMessage()
em['From'] = email_sender
em['To'] = email_receiver
em['Subject'] = subject
em.set_content(body)


context = ssl.create_default_context()

@router.post("/gmail_sendmessage")
def gmail_send_message():
    """
    Create and send an email message

    """
    with smtplib.SMTP_SSL('smtp.gmail.com', 465, context=context) as smtp:
        smtp.login(email_sender, email_password)
        smtp.sendmail(email_sender, email_receiver, em.as_string())
    return {"Message":"Your message has been sent"}

 