#!/usr/bin/env python3
from fastapi import APIRouter
from app.news_util.news_util import get_news_for_user_location as get_news

router = APIRouter()


@router.get("/{ip}")
def get_news_for_user_location(ip):
	"""Returns the news for a user's location"""
	response = get_news(ip)
	if response:
		return response
	return {"status": "failure"}
