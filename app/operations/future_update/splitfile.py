import xlwings as xw
from pathlib import Path


def splitfile(dir,EXCEL_FILE):
    with xw.App(visible =False) as app:
        wb = app.books.open(EXCEL_FILE)
        for sheet in wb.sheets:
            wb_new = app.books.add()
            sheet.copy(after=wb_new.sheets[0])
            wb_new.sheets[0].delete()
            wb_new.save( f"{dir}{sheet.name}.xlsx")
            wb_new.close()

#splitfile("Filesplit/","Filesplit/power_excel_file.xlsx")