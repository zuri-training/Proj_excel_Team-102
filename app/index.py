from fastapi import FastAPI, UploadFile, Form
from fastapi.staticfiles import StaticFiles

import aiofiles
from datetime import datetime

from app.routers import users, auth

app = FastAPI()

@app.get("/api/v1/")
def root():
    return {
        "message": "Welcome to comparely", 
        "team_members": ["Rehoboth Micah-Daniels"]
    }

# test endpoint
@app.post("/api/v1/uploadfile/")
async def upload_file(upload_file: UploadFile, description: str = Form(), user: int = Form()):

    unique_prefix = abs(hash(datetime.now()))

    out_file_path = f"static/uploads/{unique_prefix}_{upload_file.filename}"

    async with aiofiles.open(out_file_path, 'wb') as out_file:
        while content := await upload_file.read(1024):  # async read chunk
            await out_file.write(content)  # async write chunk

    return {"message": "Uploaded successfully", "description": description, "user": user}

app.include_router(users.router)
app.include_router(auth.router)

app.mount("/", StaticFiles(directory="static", html=True), name="static")