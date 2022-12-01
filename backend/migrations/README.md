Generic single-database configuration.
Create a new migration
```
alembic revision --autogenerate -m "description"
```

Apply migrations to the database
```
alembic upgrade heads
```