from fastapi import APIRouter, UploadFile, Form

import aiofiles
from datetime import datetime

import os

from app.operations.diff_checker import diff_checker

router = APIRouter(
    prefix="/api/v1/operations",
    tags=["Operations"]
)

@router.post("/diff_checker/")
async def do_diff_checker(file1: UploadFile, file2: UploadFile):

    # create unique directory
    unique_dirname = abs(hash(datetime.now()))
    unique_dirname = f"static/files/{unique_dirname}"

    os.mkdir(unique_dirname)

    # upload file 1
    file1_unique_prefix = abs(hash(datetime.now()))

    file1_path = f"{unique_dirname}/{file1_unique_prefix}_{file1.filename}"

    async with aiofiles.open(file1_path, 'wb') as out_file:
        while content := await file1.read(1024):  
            await out_file.write(content)  

    file2_unique_prefix = abs(hash(datetime.now()))

    # upload file 2
    file2_path = f"{unique_dirname}/{file2_unique_prefix}_{file1.filename}"

    async with aiofiles.open(file2_path, 'wb') as out_file:
        while content := await file2.read(1024):  
            await out_file.write(content)  

    # do diff checker
    checked1, checked2 = diff_checker(unique_dirname, file1_path, file2_path)

    return {
        "message": "Uploaded successfully", 
        "checked_file_1": checked1.replace("static/", ""), 
        "checked_file_2": checked2.replace("static/", "")
    }