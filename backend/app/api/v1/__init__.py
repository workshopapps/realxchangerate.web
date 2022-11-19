from fastapi import APIRouter

from app.api.v1 import currency
from app.api.v1 import admin
from app.api.v1 import rate
from app.api.v1 import auth


api_router = APIRouter()

api_router.include_router(currency.router, prefix="/currency", tags=["currencies"])
api_router.include_router(admin.router, prefix="/admin", tags=["currencies"])
api_router.include_router(rate.router, prefix="/rate", tags=["currencies"])
api_router.include_router(auth.router,tags=["auth"])

