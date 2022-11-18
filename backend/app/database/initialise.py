from session import engine
import base
from sqlalchemy.orm import Session


def initialise(db: Session) -> None:
    # Write database initialisation queries.
    base.Base.metadata.create_all(bind=engine)
