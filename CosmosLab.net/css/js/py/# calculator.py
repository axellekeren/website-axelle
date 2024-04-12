# calculator.py
import sys

def add(num1, num2):
    return num1 + num2

def subtract(num1, num2):
    return num1 - num2

def multiply(num1, num2):
    return num1 * num2

def divide(num1, num2):
    if num2 == 0:
        return "Error: division by zero"
    return num1 / num2

if __name__ == "__main__":
    # Menerima input dari PHP
    num1 = float(sys.argv[1])
    num2 = float(sys.argv[2])
    operator = sys.argv[3]

    # Melakukan operasi sesuai operator
    if operator == 'add':
        result = add(num1, num2)
    elif operator == 'subtract':
        result = subtract(num1, num2)
    elif operator == 'multiply':
        result = multiply(num1, num2)
    elif operator == 'divide':
        result = divide(num1, num2)

    # Mengirimkan hasil ke PHP
    print(result)
