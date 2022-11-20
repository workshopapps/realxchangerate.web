from typing import Any, List
from fastapi import APIRouter, Depends, HTTPException, status, BackgroundTasks
from send_email import send_email_background,send_email_async
from sqlalchemy.orm import Session
import uuid
from app import schemas, crud
from app.api.deps import get_db
from app.send_email import sending_mail, authenticate_token
from fastapi.responses import RedirectResponse
from starlette.responses import JSONResponse


router = APIRouter(prefix = "/api/v1")

@router.post("/forgot_password")
def get_email():
    sending_mail()
    return JSONResponse(status_code=200, content={"message": "email has been sent"}) 

@router.post("/auth/token", response_class=RedirectResponse, status_code=302)
def get_token():
    return authenticate_token()

@router.get("/dashboard")
def logged_in():
    return "message: Welcome to your dashboard!"

    

  
