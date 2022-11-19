from fastapi import APIRouter

import api.v1.currency as currency
import api.v1.admin as admin
import api.v1.rate as rate
import api.v1.auth

from api.v1 import api_service

api_router = APIRouter()

api_router.include_router(
    currency.router, prefix="/currency", tags=["currencies"])
api_router.include_router(admin.router, prefix="/admin", tags=["currencies"])
api_router.include_router(rate.router, prefix="/rate", tags=["currencies"])
api_router.include_router(auth.router, tags=["auth"])

api_router.include_router(
    api_service.router, prefix="/service", tags=["services"])
