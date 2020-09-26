import numpy as np
version="3.1.0a0+sth"
plus_index = version.find('+')
if(plus_index!=-1): 
    version = version[:plus_index]

array_str = version.split('.')
last_value = array_str[-1]
print(last_value)
if(not isinstance(last_value,int)):
    array_str[-1] = 0
PYTORCH_VERSION = list(map(int, array_str))

print(last_value)

print(PYTORCH_VERSION)
