from datetime import datetime
from app.database import get_db
from app.models import DiffChecker, Files, HighlightDuplicates, HighlightDuplicates2, RemoveDuplicates, RemoveDuplicates2, SearchHighlight, SearchReplace, Users
from app.oauth import get_current_user
from app.utils import get_excel_contents
from fastapi import APIRouter, Depends, Response, status

from sqlalchemy.orm import Session

from app.operations.search_highlight import search_and_highlight as op__search_and_highlight;
from app.operations.search_and_replace import search_and_replace as op__search_and_replace;
from app.operations.diff_checker import diff_checker as op__diff_checker
from app.operations.highlight_duplicates import highlight_duplicates as op__highlight_duplicates
from app.operations.remove_duplicates import remove_duplicates as op__remove_duplicates
from app.operations.highlight_duplicates2 import highlight_duplicates2 as op__highlight_duplicates2
from app.operations.remove_duplicates2 import remove_duplicates2 as op__remove_duplicates2

from app.schemas import GetDiffChecker, GetHighlightDuplicates, GetHighlightDuplicates2, GetRemoveDuplicates, GetRemoveDuplicates2, GetSearchHighlight, GetSearchReplace, NewDiffChecker, NewHighlightDuplicates, NewHighlightDuplicates2, NewRemoveDuplicates, NewRemoveDuplicates2, NewSearchHighlight, NewSearchReplace

router = APIRouter(
    prefix="/api/v1/operations",
    tags=["Operations"]
)

@router.post("/search_replace/", status_code=status.HTTP_201_CREATED, response_model=GetSearchReplace)
def do_search_replace(search_replace: NewSearchReplace, response: Response, db: Session = Depends(get_db), 
user: Users = Depends(get_current_user)):
    
    # file exists
    file = db.query(Files).filter(Files.id == search_replace.file, Files.user_id == user.id).first()

    if not file:
        response.status_code = status.HTTP_404_NOT_FOUND
        return {"message": "Error identifying file"}
    # end file exists

    # create operation entry
    search_replace = SearchReplace(**search_replace.dict(), user_id = user.id)

    db.add(search_replace)
    db.commit()
    db.refresh(search_replace)
    # end create operation entry

    # do operation
    files_root_path = f"static/dc/{user.id}/"

    file_path = f"{files_root_path}{file.file_name}"

    num_match, replaced_filename = op__search_and_replace(files_root_path, file_path, search_replace.search_keyword, search_replace.replace_with)
    
    replaced_file = Files(user_id=user.id, file_name=replaced_filename)
    db.add(replaced_file)
    db.commit()
    db.refresh(replaced_file)

    search_replace_query = db.query(SearchReplace).filter(SearchReplace.id == search_replace.id)
    search_replace_query.update({
        "num_match": num_match,
        "replaced_file": replaced_file.id,
        "time_completed": datetime.now()
    }, synchronize_session=False)
    db.commit()

    search_replace = search_replace_query.first()
    # end operation

    # add file contents
    file.file_content = get_excel_contents(f"{files_root_path}{file.file_name}")
    replaced_file.file_content = get_excel_contents(f"{files_root_path}{replaced_file.file_name}")
    # end add file contents

    # final response
    search_replace.file_details = file
    search_replace.replaced_file_details = replaced_file
    # end final response

    return {
        "message": "Operation Completed Successfully", 
        "data": search_replace
    }

@router.get("/search_replace/{operation_id}", status_code=status.HTTP_200_OK, response_model=GetSearchReplace)
def get_search_replace(operation_id: int, response: Response, db: Session = Depends(get_db), 
user: Users = Depends(get_current_user)):

    search_replace = db.query(SearchReplace).filter(SearchReplace.id == operation_id, SearchReplace.user_id == user.id).first()

    if not search_replace:
        response.status_code = status.HTTP_404_NOT_FOUND
        return {"message": "Error Identifying Operation"}

    file = db.query(Files).filter(Files.id == search_replace.file, Files.user_id == user.id).first()
    replaced_file = db.query(Files).filter(Files.id == search_replace.replaced_file, Files.user_id == user.id).first()

    files_root_path = f"static/dc/{user.id}/"

    # add file contents
    file.file_content = get_excel_contents(f"{files_root_path}{file.file_name}")
    replaced_file.file_content = get_excel_contents(f"{files_root_path}{replaced_file.file_name}")
    # end add file contents

    # final response
    search_replace.file_details = file
    search_replace.replaced_file_details = replaced_file
    # end final response

    return {
        "message": "Operation Fetched Successfully", 
        "data": search_replace
    }


@router.post("/search_highlight/", status_code=status.HTTP_201_CREATED, response_model=GetSearchHighlight)
def do_search_highlight(search_highlight: NewSearchHighlight, response: Response, db: Session = Depends(get_db), 
user: Users = Depends(get_current_user)):
    
    # file exists
    file = db.query(Files).filter(Files.id == search_highlight.file, Files.user_id == user.id).first()

    if not file:
        response.status_code = status.HTTP_404_NOT_FOUND
        return {"message": "Error identifying file"}
    # end file exists

    # create operation entry
    search_highlight = SearchHighlight(**search_highlight.dict(), user_id = user.id)

    db.add(search_highlight)
    db.commit()
    db.refresh(search_highlight)
    # end create operation entry

    # do operation
    files_root_path = f"static/dc/{user.id}/"

    file_path = f"{files_root_path}{file.file_name}"

    num_match, highlighted_filename = op__search_and_highlight(files_root_path, file_path, search_highlight.search_keyword)
    
    highlighted_file = Files(user_id=user.id, file_name=highlighted_filename)
    db.add(highlighted_file)
    db.commit()
    db.refresh(highlighted_file)

    search_highlight_query = db.query(SearchHighlight).filter(SearchHighlight.id == search_highlight.id)
    search_highlight_query.update({
        "num_match": num_match,
        "highlighted_file": highlighted_file.id,
        "time_completed": datetime.now()
    }, synchronize_session=False)
    db.commit()

    search_highlight = search_highlight_query.first()
    # end operation

    # add file contents
    file.file_content = get_excel_contents(f"{files_root_path}{file.file_name}")
    highlighted_file.file_content = get_excel_contents(f"{files_root_path}{highlighted_file.file_name}")
    # end add file contents

    # final response
    search_highlight.file_details = file
    search_highlight.highlighted_file_details = highlighted_file
    # end final response

    return {
        "message": "Operation Completed Successfully", 
        "data": search_highlight
    }

@router.get("/search_highlight/{operation_id}", status_code=status.HTTP_200_OK, response_model=GetSearchHighlight)
def get_search_highlight(operation_id: int, response: Response, db: Session = Depends(get_db), 
user: Users = Depends(get_current_user)):

    search_highlight = db.query(SearchHighlight).filter(SearchHighlight.id == operation_id, SearchHighlight.user_id == user.id).first()

    if not search_highlight:
        response.status_code = status.HTTP_404_NOT_FOUND
        return {"message": "Error Identifying Operation"}

    file = db.query(Files).filter(Files.id == search_highlight.file, Files.user_id == user.id).first()
    highlighted_file = db.query(Files).filter(Files.id == search_highlight.highlighted_file, Files.user_id == user.id).first()

    files_root_path = f"static/dc/{user.id}/"

    # add file contents
    file.file_content = get_excel_contents(f"{files_root_path}{file.file_name}")
    highlighted_file.file_content = get_excel_contents(f"{files_root_path}{highlighted_file.file_name}")
    # end add file contents

    # final response
    search_highlight.file_details = file
    search_highlight.highlighted_file_details = highlighted_file
    # end final response

    return {
        "message": "Operation Fetched Successfully", 
        "data": search_highlight
    }


@router.post("/highlight_duplicates/", status_code=status.HTTP_201_CREATED, response_model=GetHighlightDuplicates)
def do_highlight_duplicates(highlight_duplicates: NewHighlightDuplicates, response: Response, 
db: Session = Depends(get_db), user: Users = Depends(get_current_user)):
    
    # file exists
    file = db.query(Files).filter(Files.id == highlight_duplicates.file, Files.user_id == user.id).first()

    if not file:
        response.status_code = status.HTTP_404_NOT_FOUND
        return {"message": "Error identifying file"}
    # end file exists

    # create operation entry
    highlight_duplicates = HighlightDuplicates(**highlight_duplicates.dict(), user_id = user.id)

    db.add(highlight_duplicates)
    db.commit()
    db.refresh(highlight_duplicates)
    # end create operation entry

    # do operation
    files_root_path = f"static/dc/{user.id}/"

    file_path = f"{files_root_path}{file.file_name}"

    duplicate_rows, highlighted_filename = op__highlight_duplicates(files_root_path, file_path, highlight_duplicates.unique_columns)
    
    highlighted_file = Files(user_id=user.id, file_name=highlighted_filename)
    db.add(highlighted_file)
    db.commit()
    db.refresh(highlighted_file)

    highlight_duplicates_query = db.query(HighlightDuplicates).filter(HighlightDuplicates.id == highlight_duplicates.id)
    highlight_duplicates_query.update({
        "duplicate_rows": duplicate_rows,
        "highlighted_file": highlighted_file.id,
        "time_completed": datetime.now()
    }, synchronize_session=False)
    db.commit()

    highlight_duplicates = highlight_duplicates_query.first()
    # end operation

    # add file contents
    file.file_content = get_excel_contents(f"{files_root_path}{file.file_name}")
    highlighted_file.file_content = get_excel_contents(f"{files_root_path}{highlighted_file.file_name}")
    # end add file contents

    # final response
    highlight_duplicates.file_details = file
    highlight_duplicates.highlighted_file_details = highlighted_file
    # end final response

    return {
        "message": "Operation Completed Successfully", 
        "data": highlight_duplicates
    }

@router.get("/highlight_duplicates/{operation_id}", status_code=status.HTTP_200_OK, response_model=GetHighlightDuplicates)
def get_highlight_duplicates(operation_id: int, response: Response, db: Session = Depends(get_db), 
user: Users = Depends(get_current_user)):

    highlight_duplicates = db.query(HighlightDuplicates).filter(HighlightDuplicates.id == operation_id, HighlightDuplicates.user_id == user.id).first()

    if not highlight_duplicates:
        response.status_code = status.HTTP_404_NOT_FOUND
        return {"message": "Error Identifying Operation"}

    file = db.query(Files).filter(Files.id == highlight_duplicates.file, Files.user_id == user.id).first()
    highlighted_file = db.query(Files).filter(Files.id == highlight_duplicates.highlighted_file, Files.user_id == user.id).first()

    files_root_path = f"static/dc/{user.id}/"

    # add file contents
    file.file_content = get_excel_contents(f"{files_root_path}{file.file_name}")
    highlighted_file.file_content = get_excel_contents(f"{files_root_path}{highlighted_file.file_name}")
    # end add file contents

    # final response
    highlight_duplicates.file_details = file
    highlight_duplicates.highlighted_file_details = highlighted_file
    # end final response

    return {
        "message": "Operation Fetched Successfully", 
        "data": highlight_duplicates
    }


@router.post("/highlight_duplicates2/", status_code=status.HTTP_201_CREATED, response_model=GetHighlightDuplicates2)
def do_highlight_duplicates2(highlight_duplicates2: NewHighlightDuplicates2, response: Response, 
db: Session = Depends(get_db), user: Users = Depends(get_current_user)):
    
    # file exists
    file = db.query(Files).filter(Files.id == highlight_duplicates2.file, Files.user_id == user.id).first()

    if not file:
        response.status_code = status.HTTP_404_NOT_FOUND
        return {"message": "Error identifying file"}
    # end file exists

    # create operation entry
    highlight_duplicates2 = HighlightDuplicates2(**highlight_duplicates2.dict(), user_id = user.id)

    db.add(highlight_duplicates2)
    db.commit()
    db.refresh(highlight_duplicates2)
    # end create operation entry

    # do operation
    files_root_path = f"static/dc/{user.id}/"

    file_path = f"{files_root_path}{file.file_name}"

    duplicate_rows, highlighted_filename, analytics_filename = op__highlight_duplicates2(files_root_path, file_path, highlight_duplicates2.unique_columns)
    
    highlighted_file = Files(user_id=user.id, file_name=highlighted_filename)
    db.add(highlighted_file)
    db.commit()
    db.refresh(highlighted_file)

    analytics_file = Files(user_id=user.id, file_name=analytics_filename)
    db.add(analytics_file)
    db.commit()
    db.refresh(analytics_file)

    highlight_duplicates2_query = db.query(HighlightDuplicates2).filter(HighlightDuplicates2.id == highlight_duplicates2.id)
    highlight_duplicates2_query.update({
        "duplicate_rows": duplicate_rows,
        "highlighted_file": highlighted_file.id,
        "analytics_file": analytics_file.id,
        "time_completed": datetime.now()
    }, synchronize_session=False)
    db.commit()

    highlight_duplicates2 = highlight_duplicates2_query.first()
    # end operation

    # add file contents
    file.file_content = get_excel_contents(f"{files_root_path}{file.file_name}")
    highlighted_file.file_content = get_excel_contents(f"{files_root_path}{highlighted_file.file_name}")
    analytics_file.file_content = get_excel_contents(f"{files_root_path}{analytics_file.file_name}")
    # end add file contents

    # final response
    highlight_duplicates2.file_details = file
    highlight_duplicates2.highlighted_file_details = highlighted_file
    highlight_duplicates2.analytics_file_details = analytics_file
    # end final response

    return {
        "message": "Operation Completed Successfully", 
        "data": highlight_duplicates2
    }

@router.get("/highlight_duplicates2/{operation_id}", status_code=status.HTTP_200_OK, response_model=GetHighlightDuplicates2)
def get_highlight_duplicates2(operation_id: int, response: Response, db: Session = Depends(get_db), 
user: Users = Depends(get_current_user)):

    highlight_duplicates2 = db.query(HighlightDuplicates2).filter(HighlightDuplicates2.id == operation_id, HighlightDuplicates2.user_id == user.id).first()

    if not highlight_duplicates2:
        response.status_code = status.HTTP_404_NOT_FOUND
        return {"message": "Error Identifying Operation"}

    file = db.query(Files).filter(Files.id == highlight_duplicates2.file, Files.user_id == user.id).first()
    highlighted_file = db.query(Files).filter(Files.id == highlight_duplicates2.highlighted_file, Files.user_id == user.id).first()
    analytics_file = db.query(Files).filter(Files.id == highlight_duplicates2.analytics_file, Files.user_id == user.id).first()

    files_root_path = f"static/dc/{user.id}/"

    # add file contents
    file.file_content = get_excel_contents(f"{files_root_path}{file.file_name}")
    highlighted_file.file_content = get_excel_contents(f"{files_root_path}{highlighted_file.file_name}")
    analytics_file.file_content = get_excel_contents(f"{files_root_path}{analytics_file.file_name}")
    # end add file contents

    # final response
    highlight_duplicates2.file_details = file
    highlight_duplicates2.highlighted_file_details = highlighted_file
    highlight_duplicates2.analytics_file_details = analytics_file
    # end final response

    return {
        "message": "Operation Fetched Successfully", 
        "data": highlight_duplicates2
    }


@router.post("/remove_duplicates/", status_code=status.HTTP_201_CREATED, response_model=GetRemoveDuplicates)
def do_remove_duplicates(remove_duplicates: NewRemoveDuplicates, response: Response, 
db: Session = Depends(get_db), user: Users = Depends(get_current_user)):

    # file exists
    file = db.query(Files).filter(Files.id == remove_duplicates.file, Files.user_id == user.id).first()

    if not file:
        response.status_code = status.HTTP_404_NOT_FOUND
        return {"message": "Error identifying file"}
    # end file exists

    # create operation entry
    remove_duplicates = RemoveDuplicates(**remove_duplicates.dict(), user_id = user.id)

    db.add(remove_duplicates)
    db.commit()
    db.refresh(remove_duplicates)
    # end create operation entry

    # do operation
    files_root_path = f"static/dc/{user.id}/"

    file_path = f"{files_root_path}{file.file_name}"

    duplicate_rows, without_duplicates_filename = op__remove_duplicates(files_root_path, file_path, remove_duplicates.unique_columns)

    without_duplicates_file = Files(user_id=user.id, file_name=without_duplicates_filename)
    db.add(without_duplicates_file)
    db.commit()
    db.refresh(without_duplicates_file)

    remove_duplicates_query = db.query(RemoveDuplicates).filter(RemoveDuplicates.id == remove_duplicates.id)
    remove_duplicates_query.update({
        "duplicate_rows": duplicate_rows,
        "without_duplicates_file": without_duplicates_file.id,
        "time_completed": datetime.now()
    }, synchronize_session=False)
    db.commit()

    remove_duplicates = remove_duplicates_query.first()
    # end operation

    # add file contents
    file.file_content = get_excel_contents(f"{files_root_path}{file.file_name}")
    without_duplicates_file.file_content = get_excel_contents(f"{files_root_path}{without_duplicates_file.file_name}")
    # end add file contents

    # final response
    remove_duplicates.file_details = file
    remove_duplicates.without_duplicates_file_details = without_duplicates_file
    # end final response

    return {
        "message": "Operation Completed Successfully", 
        "data": remove_duplicates
    }

@router.get("/remove_duplicates/{operation_id}", status_code=status.HTTP_200_OK, response_model=GetRemoveDuplicates)
def get_remove_duplicates(operation_id: int, response: Response, db: Session = Depends(get_db), user: Users = Depends(get_current_user)):
    
    remove_duplicates = db.query(RemoveDuplicates).filter(RemoveDuplicates.id == operation_id, RemoveDuplicates.user_id == user.id).first()

    if not remove_duplicates:
        response.status_code = status.HTTP_404_NOT_FOUND
        return {"message": "Error Identifying Operation"}

    file = db.query(Files).filter(Files.id == remove_duplicates.file, Files.user_id == user.id).first()
    without_duplicates_file = db.query(Files).filter(Files.id == remove_duplicates.without_duplicates_file, Files.user_id == user.id).first()

    files_root_path = f"static/dc/{user.id}/"

    # add file contents
    file.file_content = get_excel_contents(f"{files_root_path}{file.file_name}")
    without_duplicates_file.file_content = get_excel_contents(f"{files_root_path}{without_duplicates_file.file_name}")
    # end add file contents

    # final response
    remove_duplicates.file_details = file
    remove_duplicates.without_duplicates_file_details = without_duplicates_file
    # end final response

    return {
        "message": "Operation Fetched Successfully", 
        "data": remove_duplicates
    }


@router.post("/remove_duplicates2/", status_code=status.HTTP_201_CREATED, response_model=GetRemoveDuplicates2)
def do_remove_duplicates2(remove_duplicates2: NewRemoveDuplicates2, response: Response, 
db: Session = Depends(get_db), user: Users = Depends(get_current_user)):

    # file exists
    file = db.query(Files).filter(Files.id == remove_duplicates2.file, Files.user_id == user.id).first()

    if not file:
        response.status_code = status.HTTP_404_NOT_FOUND
        return {"message": "Error identifying file"}
    # end file exists

    # create operation entry
    remove_duplicates2 = RemoveDuplicates2(**remove_duplicates2.dict(), user_id = user.id)

    db.add(remove_duplicates2)
    db.commit()
    db.refresh(remove_duplicates2)
    # end create operation entry

    # do operation
    files_root_path = f"static/dc/{user.id}/"

    file_path = f"{files_root_path}{file.file_name}"

    duplicate_rows, duplicates_filename, without_duplicates_filename = op__remove_duplicates2(files_root_path, file_path, remove_duplicates2.unique_columns)
    
    duplicates_file = Files(user_id=user.id, file_name=duplicates_filename)
    db.add(duplicates_file)
    db.commit()
    db.refresh(duplicates_file)

    without_duplicates_file = Files(user_id=user.id, file_name=without_duplicates_filename)
    db.add(without_duplicates_file)
    db.commit()
    db.refresh(without_duplicates_file)

    remove_duplicates2_query = db.query(RemoveDuplicates2).filter(RemoveDuplicates2.id == remove_duplicates2.id)
    remove_duplicates2_query.update({
        "duplicate_rows": duplicate_rows,
        "duplicates_file": duplicates_file.id,
        "without_duplicates_file": without_duplicates_file.id,
        "time_completed": datetime.now()
    }, synchronize_session=False)
    db.commit()

    remove_duplicates2 = remove_duplicates2_query.first()
    # end operation

    # add file contents
    file.file_content = get_excel_contents(f"{files_root_path}{file.file_name}")
    duplicates_file.file_content = get_excel_contents(f"{files_root_path}{duplicates_file.file_name}")
    without_duplicates_file.file_content = get_excel_contents(f"{files_root_path}{without_duplicates_file.file_name}")
    # end add file contents

    # final response
    remove_duplicates2.file_details = file
    remove_duplicates2.duplicates_file_details = duplicates_file
    remove_duplicates2.without_duplicates_file_details = without_duplicates_file
    # end final response

    return {
        "message": "Operation Completed Successfully", 
        "data": remove_duplicates2
    }

@router.get("/remove_duplicates2/{operation_id}", status_code=status.HTTP_200_OK, response_model=GetRemoveDuplicates2)
def get_remove_duplicates2(operation_id: int, response: Response, db: Session = Depends(get_db), user: Users = Depends(get_current_user)):
    
    remove_duplicates2 = db.query(RemoveDuplicates2).filter(RemoveDuplicates2.id == operation_id, RemoveDuplicates2.user_id == user.id).first()

    if not remove_duplicates2:
        response.status_code = status.HTTP_404_NOT_FOUND
        return {"message": "Error Identifying Operation"}

    file = db.query(Files).filter(Files.id == remove_duplicates2.file, Files.user_id == user.id).first()
    duplicates_file = db.query(Files).filter(Files.id == remove_duplicates2.duplicates_file, Files.user_id == user.id).first()
    without_duplicates_file = db.query(Files).filter(Files.id == remove_duplicates2.without_duplicates_file, Files.user_id == user.id).first()

    files_root_path = f"static/dc/{user.id}/"

    # add file contents
    file.file_content = get_excel_contents(f"{files_root_path}{file.file_name}")
    duplicates_file.file_content = get_excel_contents(f"{files_root_path}{duplicates_file.file_name}")
    without_duplicates_file.file_content = get_excel_contents(f"{files_root_path}{without_duplicates_file.file_name}")
    # end add file contents

    # final response
    remove_duplicates2.file_details = file
    remove_duplicates2.duplicates_file_details = duplicates_file
    remove_duplicates2.without_duplicates_file_details = without_duplicates_file
    # end final response

    return {
        "message": "Operation Fetched Successfully", 
        "data": remove_duplicates2
    }


@router.post("/diff_checker/", status_code=status.HTTP_201_CREATED, response_model=GetDiffChecker)
def do_diff_checker(diff_checker: NewDiffChecker, response: Response, db: Session = Depends(get_db), 
user: Users = Depends(get_current_user)):

    # file 1 exists
    file1 = db.query(Files).filter(Files.id == diff_checker.file1, Files.user_id == user.id).first()

    if not file1:
        response.status_code = status.HTTP_404_NOT_FOUND
        return {"message": "Error identifying file"}
    # end file 1 exists

    # file 2 exists
    file2 = db.query(Files).filter(Files.id == diff_checker.file2, Files.user_id == user.id).first()

    if not file2:
        response.status_code = status.HTTP_404_NOT_FOUND
        return {"message": "Error identifying file"}
    # end file 2 exists

    # create operation entry
    diff_checker = DiffChecker(**diff_checker.dict(), user_id = user.id)

    db.add(diff_checker)
    db.commit()
    db.refresh(diff_checker)
    # end create operation entry

    # do operation
    files_root_path = f"static/dc/{user.id}/"

    file1_path = f"{files_root_path}{file1.file_name}"
    file2_path = f"{files_root_path}{file2.file_name}"

    mismatch_found, highlighted_file1name, highlighted_file2name = op__diff_checker(files_root_path, file1_path, file2_path)
    
    highlighted_file1 = Files(user_id=user.id, file_name=highlighted_file1name)
    db.add(highlighted_file1)
    db.commit()
    db.refresh(highlighted_file1)

    highlighted_file2 = Files(user_id=user.id, file_name=highlighted_file2name)
    db.add(highlighted_file2)
    db.commit()
    db.refresh(highlighted_file2)

    diff_checker_query = db.query(DiffChecker).filter(DiffChecker.id == diff_checker.id)
    diff_checker_query.update({
        "mismatch_found": mismatch_found,
        "highlighted_file1": highlighted_file1.id,
        "highlighted_file2": highlighted_file2.id,
        "time_completed": datetime.now()
    }, synchronize_session=False)
    db.commit()

    diff_checker = diff_checker_query.first()
    # end operation

    # add file contents
    file1.file_content = get_excel_contents(f"{files_root_path}{file1.file_name}")
    file2.file_content = get_excel_contents(f"{files_root_path}{file2.file_name}")
    highlighted_file1.file_content = get_excel_contents(f"{files_root_path}{highlighted_file1.file_name}")
    highlighted_file2.file_content = get_excel_contents(f"{files_root_path}{highlighted_file2.file_name}")
    # end add file contents

    # final response
    diff_checker.file1_details = file1
    diff_checker.file2_details = file2
    diff_checker.highlighted_file1_details = highlighted_file1
    diff_checker.highlighted_file2_details = highlighted_file2
    # end final response

    return {
        "message": "Operation Completed Successfully", 
        "data": diff_checker
    }

@router.get("/diff_checker/{operation_id}", status_code=status.HTTP_200_OK, response_model=GetDiffChecker)
def get_diff_checker(operation_id: int, response: Response, db: Session = Depends(get_db), 
user: Users = Depends(get_current_user)):
    
    diff_checker = db.query(DiffChecker).filter(DiffChecker.id == operation_id, DiffChecker.user_id == user.id).first()

    if not diff_checker:
        response.status_code = status.HTTP_404_NOT_FOUND
        return {"message": "Error Identifying Operation"}

    file1 = db.query(Files).filter(Files.id == diff_checker.file1, Files.user_id == user.id).first()
    file2 = db.query(Files).filter(Files.id == diff_checker.file2, Files.user_id == user.id).first()
    highlighted_file1 = db.query(Files).filter(Files.id == diff_checker.highlighted_file1, Files.user_id == user.id).first()
    highlighted_file2 = db.query(Files).filter(Files.id == diff_checker.highlighted_file2, Files.user_id == user.id).first()

    files_root_path = f"static/dc/{user.id}/"

    # add file contents
    file1.file_content = get_excel_contents(f"{files_root_path}{file1.file_name}")
    file2.file_content = get_excel_contents(f"{files_root_path}{file2.file_name}")
    highlighted_file1.file_content = get_excel_contents(f"{files_root_path}{highlighted_file1.file_name}")
    highlighted_file2.file_content = get_excel_contents(f"{files_root_path}{highlighted_file2.file_name}")
    # end add file contents

    # final response
    diff_checker.file1_details = file1
    diff_checker.file2_details = file2
    diff_checker.highlighted_file1_details = highlighted_file1
    diff_checker.highlighted_file2_details = highlighted_file2
    # end final response

    return {
        "message": "Operation Fetched Successfully", 
        "data": diff_checker
    }

