from fastapi import FastAPI



app = FastAPI()


@app.get("/")
def index():
    # print("message: Hello Team Bevel - API Microservice")
    return {'message': 'Hello Team Bevel - API Microservice'}