from datetime import datetime
from email import message
from typing import List, Optional
from pydantic import BaseModel

class FetchMetaData(BaseModel):
    num_records: int
    pagination: int
    page: int
    division: int

class AddUser(BaseModel):
    first_name: str
    last_name: str
    email_address: str
    password: str

    class Config:
        orm_mode = True

class User(AddUser):
    id: int
    time_added: datetime

class GetUser(BaseModel):
    message: str
    user: Optional[User]

class Login(BaseModel):
    message: str
    access_token: Optional[str]
    token_type: Optional[str]
    user_info: Optional[User]

class File(BaseModel):
    id: int
    user_id: int
    file_name: str
    status: int
    time_added: datetime
    file_content: Optional[List]

    class Config:
        orm_mode = True

class GetFile(BaseModel):
    message: str
    meta_data: Optional[FetchMetaData]
    file: Optional[File]

class GetFiles(BaseModel):
    message: str
    files: Optional[List[File]]


class NewSearchHighlight(BaseModel):
    file: int
    search_keyword: str

    class Config:
        orm_mode = True

class SearchHighlight(NewSearchHighlight):
    id: int
    user_id: int
    time_requested: datetime
    num_match: int
    highlighted_file: int
    time_completed: datetime
    file_details: File
    highlighted_file_details: File

class GetSearchHighlight(BaseModel):
    message: str
    data: Optional[SearchHighlight] 


class NewSearchReplace(BaseModel):
    file: int
    search_keyword: str
    replace_with: str

    class Config:
        orm_mode = True

class SearchReplace(NewSearchReplace):
    id: int
    user_id: int
    time_requested: datetime
    num_match: int
    replaced_file: int
    time_completed: datetime
    file_details: File
    replaced_file_details: File

class GetSearchReplace(BaseModel):
    message: str
    data: Optional[SearchReplace] 


class NewHighlightDuplicates(BaseModel):
    file: int
    unique_columns: str

    class Config:
        orm_mode = True

class HighlightDuplicates(NewHighlightDuplicates):
    id: int
    user_id: int
    time_requested: datetime
    duplicate_rows: int
    highlighted_file: int
    time_completed: datetime
    file_details: File
    highlighted_file_details: File

class GetHighlightDuplicates(BaseModel):
    message: str
    data: Optional[HighlightDuplicates] 


class NewHighlightDuplicates2(BaseModel):
    file: int
    unique_columns: str

    class Config:
        orm_mode = True


class HighlightDuplicates2(NewHighlightDuplicates2):
    id: int
    user_id: int
    time_requested: datetime
    duplicate_rows: int
    highlighted_file: int
    analytics_file: int
    time_completed: datetime
    file_details: File
    highlighted_file_details: File
    analytics_file_details: File

class GetHighlightDuplicates2(BaseModel):
    message: str
    data: Optional[HighlightDuplicates2] 


class NewRemoveDuplicates(BaseModel):
    file: int
    unique_columns: str

    class Config:
        orm_mode = True


class RemoveDuplicates(NewRemoveDuplicates):
    id: int
    user_id: int
    time_requested: datetime
    duplicate_rows: int
    without_duplicates_file: int
    time_completed: datetime
    file_details: File
    without_duplicates_file_details: File

class GetRemoveDuplicates(BaseModel):
    message: str
    data: Optional[RemoveDuplicates] 


class NewRemoveDuplicates2(BaseModel):
    file: int
    unique_columns: str

    class Config:
        orm_mode = True

class RemoveDuplicates2(NewRemoveDuplicates2):
    id: int
    user_id: int
    time_requested: datetime
    duplicate_rows: int
    without_duplicates_file: int
    duplicates_file: int
    time_completed: datetime
    file_details: File
    without_duplicates_file_details: File
    duplicates_file_details: File

class GetRemoveDuplicates2(BaseModel):
    message: str
    data: Optional[RemoveDuplicates2]



class NewDiffChecker(BaseModel):
    file1: int
    file2: int

    class Config:
        orm_mode = True

class DiffChecker(NewDiffChecker):
    id: int
    user_id: int
    time_requested: datetime
    mismatch_found: int
    highlighted_file1: int
    highlighted_file2: int
    time_completed: datetime
    file1_details: File
    file2_details: File
    highlighted_file1_details: File
    highlighted_file2_details: File

class GetDiffChecker(BaseModel):
    message: str
    data: Optional[DiffChecker]