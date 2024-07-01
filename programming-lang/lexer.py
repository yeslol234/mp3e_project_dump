from sys import *
def open_file(filename):
    data = open(filename, "r").read()
    return data
def lex(txt):
    tok = ""
    txt = list(txt)
    for char in txt:
        tok += char

def run():
    data = open_file(argv[1])

run()