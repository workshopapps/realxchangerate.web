from fastapi import FastAPI
from fastapi_utils.tasks import repeat_every


app = FastAPI()


@app.get("/")
def index():
    # print("message: Hello Team Bevel - API Microservice")
    return {'message': 'Hello Team Bevel - API Microservice'}