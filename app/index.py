from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

from app.routers import users, auth, operations

app = FastAPI()

@app.get("/api/v1/")
def root():
    return {
        "message": "Welcome to comparely", 
        "team_members": ["Rehoboth Micah-Daniels"]
    }

app.include_router(users.router)
app.include_router(auth.router)
app.include_router(operations.router)

app.mount("/", StaticFiles(directory="static", html=True), name="static")