from pydantic import BaseModel


class suggestionCreate(BaseModel):
    full_name: str
    email: str
    suggestion: str
