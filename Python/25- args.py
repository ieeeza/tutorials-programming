# *args = parameter that will pack all arguments into a tuple
#          useful so that a function can accept a varying amount of arguments


def add(*stuff):
    sume = 0
    stuff = list(stuff)
    stuff[0] = 0
    for i in stuff:
        sume += i
    return sume


print(add(1, 2, 3, 4, 5, 6))