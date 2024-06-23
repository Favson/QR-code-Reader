print('Hi! Welcome to Favson Tech Global')
age = int(input("Enter Your Age: "))

if 0 < age <= 12:
    print('Child')
elif 13 <= age <= 19:
    print('Teenager')
elif 20 <= age <= 64:
    print('Adult')
elif age >= 65:
    print('Senior')
else:
    print('Invalid age')
