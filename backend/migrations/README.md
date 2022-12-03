Generic single-database configuration.
Create a new migration
```
alembic revision --autogenerate -m "description"
```
if error run
```
alembic revision -m "description"
```
if error persists
delete all migration versions and run the first command
then run...

Apply migrations to the database
```
alembic upgrade heads
```