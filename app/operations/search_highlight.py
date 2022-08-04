import openpyxl
from openpyxl import load_workbook
from openpyxl.formatting.rule import Rule
from openpyxl.styles.differential import DifferentialStyle
from openpyxl.styles import PatternFill

wb = load_workbook('comp 4.xlsx')
ws = wb.active
b = input("Enter what to search:")
cell=ws
for rows in ws.rows:
    for cell in rows:
        if  str(cell.value) == b: 
            cell.fill = PatternFill(start_color='000000FF',end_color='000000FF',fill_type="solid")
a= input("Enter what to save it with(.xlsx):")
wb.save(a)
