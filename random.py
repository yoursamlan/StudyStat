from datetime import date, timedelta
import random

start_date = date(2022, 1, 1) 
end_date = date(2022, 12, 31)    # perhaps date.now()

delta = end_date - start_date   # returns timedelta

def format(L):
    y = L[0]
    m = L[1]
    d = L[2]
    t = str(d).zfill(2)+"/"+str(m).zfill(2)+"/"+str(y)[2:]+",0"
    return t

for i in range(delta.days + 1):
    day = start_date + timedelta(days=i)
    day = str(day).split("-")
    day = format(day)
    print(day)
