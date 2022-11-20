FROM python:3.9

# image incase alpine is not working
# FROM python:3.9.5-slim 

# uncomment the line below if using python:3.9.5-slim
# RUN apt-get update && apt-get -y install libpq-dev gcc 


# uncomment the line below if using python:3.6-alpine
# RUN apk update && apk add postgresql-dev gcc python3-dev musl-dev 

RUN mkdir -p /home/app

WORKDIR /home/app

COPY . .

COPY requirements.txt requirements.txt

RUN pip install -r requirements.txt

EXPOSE 8000

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]