from passlib.context import CryptContext

"""
hashing
"""
context = CryptContext(schemes=['bcrypt'], deprecated="auto")

def verify_password(plain_password: str, hashed_password: str) -> bool:
    return context.verify(plain_password, hashed_password)

def get_password_hash(password: str) -> str:
    return context.hash(password)