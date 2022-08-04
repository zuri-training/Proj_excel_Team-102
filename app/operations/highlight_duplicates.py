from openpyxl.formatting.rule import Rule
from openpyxl.styles.differential import DifferentialStyle
from openpyxl import load_workbook
from openpyxl.styles import PatternFill, Font, Border


a=input("Enter your excel file:")
lb = load_workbook(a)
ls=lb.active

fill_blue = PatternFill(start_color='1111EE', end_color='1111EE', fill_type='solid')
font = Font(bold=True, color='FFFFFF')
dxf=DifferentialStyle(font=font ,fill=fill_blue)
rule = Rule(type="duplicateValues",dxf=dxf)
b= input("Enter what to save it with(.xlsx):")
ls.conditional_formatting.add('A1:Z100', rule)
lb.save(b)