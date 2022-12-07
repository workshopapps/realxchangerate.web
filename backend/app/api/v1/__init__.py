from fastapi import APIRouter
from .auth import get_current_active_user
from fastapi import Depends
from app.api.v1 import currency
from app.api.v1 import admin
from app.api.v1 import rate
from app.api.v1 import auth
from app.api.v1 import password_email_reset
from app.api.v1 import api_service
from app.api.v1 import news
from app.api.v1 import faq
from app.api.v1 import complaints
from app.api.v1 import contact
from app.api.v1 import student
from app.api.v1 import adverts
from app.api.v1 import gmail

api_router = APIRouter()

api_router.include_router(
    currency.router, prefix="/currency", tags=["currencies"])
api_router.include_router(admin.router, dependencies=[Depends(get_current_active_user)], prefix="/admin", tags=["admin"])
api_router.include_router(rate.router, prefix="/rate", tags=["rates"])
api_router.include_router(auth.router, tags=["auth"])
api_router.include_router(password_email_reset.router,
                           tags=["reset_password"])
api_router.include_router(
    api_service.router, prefix="/service", tags=["services"])
api_router.include_router(news.router, prefix="/news", tags=["news"])
api_router.include_router(faq.router, prefix="/faq", tags=["faq"])

api_router.include_router(complaints.router, prefix="/complaints", tags=["complaints"])
api_router.include_router(contact.router, prefix="/contacts", tags=["contacts"])
api_router.include_router(student.router, prefix="/students", tags=["students"])
api_router.include_router(adverts.router, prefix="/online_adverts", tags=["adverts"])
api_router.include_router(gmail.router, prefix="", tags=["gmail"])