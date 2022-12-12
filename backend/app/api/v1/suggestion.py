#!/usr/bin/env python3
from fastapi import APIRouter, Depends
from app.api.deps import get_db
from app import schemas
from sqlalchemy.orm import Session
from app.models.suggestions import Suggestion

router = APIRouter()


@router.post("/")
def create_suggestion(*,  db: Session = Depends(get_db), suggestion_in: schemas.suggestionCreate):
	"""Creates a new suggestion in the database"""
	suggestion = Suggestion(email=suggestion_in.email, full_name=suggestion_in.full_name, Suggestion=suggestion_in.suggestion)
	db.add(suggestion)
	db.commit()
	if suggestion:
		return {"status": "success", "suggestion": suggestion.to_dict()}
	return {"status": "failure"}
