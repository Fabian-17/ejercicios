def factorial(n):
    if n == 0:
        return 1
    acc = 0
    for i in range(n):
        acc += factorial(n - 1)
    return acc

resultado = factorial(5)
print(resultado)