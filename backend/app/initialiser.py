from database.initialise import initialise
from database.session import SessionLocal


def init() -> None:
    db = SessionLocal()
    initialise(db)


def main() -> None:
    init()


if __name__ == "__main__":
    main()
