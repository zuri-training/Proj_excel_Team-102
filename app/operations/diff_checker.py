from os import path

from openpyxl import load_workbook, Workbook
from openpyxl.styles import PatternFill

def diff_checker(dir, file1, file2):
    if not path.exists(file1):
        print(f"Could not resolve {file1}"); return        
    if not path.exists(file2):
        print(f"Could not resolve {file2}"); return

    wb1, wb2 = load_workbook(filename=file1), load_workbook(filename=file2)

    ws1, ws2 = wb1.active, wb2.active

    for row in ws1.rows:
        for cell in row:
            if cell.value != ws2[cell.coordinate].value:
                cell.fill = PatternFill("solid", fgColor="D3E06E")
                ws2[cell.coordinate].fill = PatternFill("solid", fgColor="D3E06E")

    checked1, checked2 = f"{dir}/file1.xlsx", f"{dir}/file2.xlsx"

    wb1.save(checked1); wb2.save(checked2)

    return checked1, checked2