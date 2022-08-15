from openpyxl import load_workbook

from datetime import datetime

def search_and_replace(dir, file, search_keyword, replace_with):
    
    wb = load_workbook(filename=file)
    
    ws = wb.active

    num_match = 0

    for rows in ws.rows:
        for cell in rows:
            if cell.data_type == "n":
                try:
                    check_value = float(search_keyword)
                    if cell.value == check_value:  
                        cell.value = replace_with
                        num_match += 1
                except Exception as ex:
                    pass
            else:
                if str(cell.value) == str(search_keyword): 
                    cell.value = replace_with
                    num_match += 1

    replaced_filename = f"{abs(hash(datetime.now()))}_replaced.xlsx"
    replaced = f"{dir}/{replaced_filename}"

    wb.save(replaced)

    return num_match, replaced_filename
