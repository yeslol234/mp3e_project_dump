import random ## uses random.SystemRandom (cryptographically secure)
def ascii2_encrypt(_str):
    """
        Encrypts a string with ASCII2 encoding.
        ```
        print(ascii2_encrypt("Hello World!")) # prints 72x101x108x108x111x32x87x111x114x108x100x33_
        print(ascii2_decrypt("72x101x108x108x111x32x87x111x114x108x100x33_")) # prints Hello World!
        ```
        (Warning: This is highly unsafe to use, it is recommended to use ascii3 encryption/encoding!)
    """
    res = ""
    for i in range(0, len(_str)):
        if _str.endswith(_str[i]):
            res = res + f'{ord(_str[i])}_'
        else:
            res = res + f'{ord(_str[i])}x'
    return res

def ascii2_decrypt(_str):
    res = ""
    _str = _str[:-1] # uses negative indexing. (removes the last char, which is a underscore)
    _strsplit = _str.split("x")
    for i in range(len(_strsplit)):
        _strsplit[i] = chr(int(_strsplit[i]))
    res = ''.join(_strsplit)
    return res

def ascii3_encode(_str, multipliers, seperators):
    _str = ascii2_encrypt(_str)
    _str = _str[:-1]
    _strints = _str.split("x")
    for i in range(_strints.len()):
        _strints[i] = int(_strints[i])
    SystemRandom = random.SystemRandom
    randints = []
    for i in range(_strints.len()):
        randints.append(SystemRandom.randint(0, 127))
        _strints[i] = _strints[i] * randints[i]
    retu

    
    
print(ascii2_encrypt("Hello World!"))
print(ascii2_decrypt("72x101x108x108x111x32x87x111x114x108x100x33_"))