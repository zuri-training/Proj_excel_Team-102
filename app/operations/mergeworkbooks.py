import time
import xlwings as xw

# users must make sure their excel app is upgraded, if not u can use the task manager to
#  check the excel and click on "don't upgrade"

def mergefiles(dir, file1, file2):
    

    excel_files = [file1, file2]

    combined_wb = xw.Book()
    t=time.localtime()
    Timestamp = time.strftime('%Y-%m-%d_%H%M', t)
    app = combined_wb.app
    app.interactive = False
    app.visible = False

    for excel_file in excel_files:
        wb = xw.Book(excel_file)
        for sheet in wb.sheets:
            sheet.api.Copy(After=combined_wb.sheets[0].api)
        wb.close()


    combined_wb.sheets[0].delete()
    combined_wb.save(f'{dir}merge_worksheets_{Timestamp}.xlsx')
    if len(combined_wb.app.books) == 1: 
        combined_wb.app.quit()
    else:
        combined_wb.close()

#mergefiles('Merge_Workbook/files/' ,'Merge_Workbook/files/power.xlsx','Merge_Workbook/files/testing.xlsx')