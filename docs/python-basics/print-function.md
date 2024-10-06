---
sidebar_position: 4
---

# Print Function

The print function in Python is used to display messages on the console. You can pass any value to it, and it will convert it to a string and print it. If you want to print multiple items, you can separate them with commas. By default, there is no separator, but you can add one using the sep argument. Additionally, each print statement ends with a new line, but you can change this using the end argument.

## Examples

### Basic Print:

```python
print("Welcome to Python!")
```

### Multiple Elements with Default Separator:

```python
print("Python", "is", "fun")
```

Output: Pythonisfun

### Using a Custom Separator:

```python
print("Python", "is", "fun", sep=" ")
```

Output: Python is fun

### Changing the End Character:

```python
print("Hello", end="-")
print("World")
```

Output: Hello-World

### Combining Both sep and end:

```python
print("Learn", "Python", sep="\*", end="!")
print("It's great")
```

Output: Learn\*Python!It's great

These examples should help you understand how to use the print function effectively.
