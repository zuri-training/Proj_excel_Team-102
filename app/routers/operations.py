from app.utils import get_unique_dir, get_unique_filepath, upload_file
from fastapi import APIRouter, UploadFile, Form

import aiofiles

import os

from app.operations.diff_checker import diff_checker

router = APIRouter(
    prefix="/api/v1/operations",
    tags=["Operations"]
)

@router.post("/diff_checker/")
async def do_diff_checker(file1: UploadFile, file2: UploadFile):

    # create unique directory
    unique_dirname = get_unique_dir()

    os.mkdir(unique_dirname)

    # upload file 1
    file1_path = get_unique_filepath(file1.filename, unique_dirname)

    await upload_file(file1_path, file1)

    # upload file 2
    file2_path = get_unique_filepath(file2.filename, unique_dirname)

    await upload_file(file2_path, file2)

    # do diff checker
    checked1, checked2 = diff_checker(unique_dirname, file1_path, file2_path)

    return {
        "message": "Uploaded successfully", 
        "checked_file_1": checked1.replace("static/", ""), 
        "checked_file_2": checked2.replace("static/", "")
    }