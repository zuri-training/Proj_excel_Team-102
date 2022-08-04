from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware

from app.routers import users, auth, files, operations

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/v1/")
def root():
    return {
        "message": "Welcome to comparely", 
        "team_members": ["Rehoboth Micah-Daniels"]
    }

app.include_router(users.router)
app.include_router(auth.router)
app.include_router(files.router)
app.include_router(operations.router)

app.mount("/", StaticFiles(directory="static", html=True), name="static")