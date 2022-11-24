from fastapi import APIRouter
from .auth import get_current_active_user
from fastapi import Depends
from app.api.v1 import currency
from app.api.v1 import admin
from app.api.v1 import rate
from app.api.v1 import auth
from app.api.v1 import password_email_reset

from app.api.v1 import api_service

api_router = APIRouter()

<<<<<<< HEAD
api_router.include_router(currency.router, prefix="/currency", tags=["currencies"])
api_router.include_router(admin.router, dependencies=[Depends(get_current_active_user)],prefix="/admin", tags=["admin"])
=======
api_router.include_router(
    currency.router, prefix="/currency", tags=["currencies"])
api_router.include_router(admin.router, prefix="/admin", tags=["admin"])
>>>>>>> bd11517bb480bf85dc870226fb103841f5b6c945
api_router.include_router(rate.router, prefix="/rate", tags=["rates"])
api_router.include_router(auth.router, tags=["auth"])
api_router.include_router(password_email_reset.router)
api_router.include_router(
    api_service.router, prefix="/service", tags=["services"])
