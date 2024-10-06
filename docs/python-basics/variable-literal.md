---
sidebar_position: 3
---

# Variable And Literal

## Literals:

### Definition

Fixed values directly written in the code.

### Examples

1. **Numbers**: 4, 102, -21, 4_000_000 (underscores for readability).
2. **Booleans**: True or False.
3. **Text**: "python" or 'This language is fun!'.
4. **Lists**: [1, 2, 3].

## Variables:

### Definition

Names that store values in memory.

### Creation

Use a name, =, and a value (e.g., price = 45.50).

### Naming Rules

Use letters, numbers, or underscores without spaces. Must start with a letter or underscore.

## Data Types:

1. **Integer**: Whole numbers (e.g., -2, 0, 23).
2. **Float**: Numbers with decimals (e.g., 3.14, -0.001).
3. **Boolean**: True or False.
4. **String**: Text (e.g., "Thailand").
5. **NoneType**: Represents no value (None).

## Type Function:

### Usage

Check the type of a value (e.g., type(4) returns int).

## Type Casting:

### Definition

Changing a value from one type to another.

### Examples

1. **String to Float**: float("4.5").
2. **Float to Integer**: int(3.14) (removes decimal).
3. **String to Boolean**: bool("") is False, any other string is True.

## Code Example

```python title="example.py"
# Numeric literals
price = 45.50
age = 24

# Boolean literal
is_printed = True

# String literal
course_name = "Python for Beginners"

# Performing an operation with a variable
tax = price * 0.09

# Receiving input from the console
user_input = input("Enter a number: ")

# Type casting the input to a float
user_number = float(user_input)

# Printing the results
print("Price:", price)
print("Age:", age)
print("Is Printed:", is_printed)
print("Course Name:", course_name)
print("Tax:", tax)
print("User Number:", user_number)
```
