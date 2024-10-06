---
sidebar_position: 6
---

# Strings

## Definition of a String

- A **string** is a sequence of characters, essentially text data. In Python, a string is represented by enclosing characters within either **single** (`'`) or **double quotes** (`"`).
- Example:
  ```python title="strings.py"
  name = "John"
  greeting = 'Hello, world!'
  ```

## Creating Strings

- Strings can be assigned to variables:
  ```python title="strings.py"
  city = "San Francisco"
  ```
- **Double vs. Single Quotes**:
  - You can use both single or double quotes to create strings.
  - The opening and closing quotes must match.
  - Example:
    ```python title="strings.py"
    sentence = 'It\'s a sunny day'
    # Alternatively, using double quotes avoids the need to escape the single quote:
    sentence = "It's a sunny day"
    ```

## Multi-line Strings

- For **multi-line strings**, use **triple quotes** (`'''` or `"""`).
- Example:
  ```python title="strings.py"
  address = """123 Elm Street
  Springfield
  USA"""
  ```
- This allows the string to span multiple lines.

## String Concatenation

- You can **concatenate** (join) strings using the **`+` operator**:
  ```python title="strings.py"
  full_name = "John" + " " + "Doe"
  # Output: "John Doe"
  ```
- Note that **spaces** between words must be explicitly added, as shown.

## String Length

- Use the **`len()` function** to get the length of a string:
  ```python title="strings.py"
  length = len(full_name)
  print("Length of the full name:", length)
  # Output: 8
  ```

## String Repetition

- You can **repeat** a string using the `*` operator:
  ```python title="strings.py"
  dash_line = "-" * 5
  # Output: "-----"
  ```

## String Methods

- **`upper()`**: Converts all characters to uppercase.
  ```python title="strings.py"
  greeting = "hello"
  print(greeting.upper())  # Output: "HELLO"
  ```
- **`lower()`**: Converts all characters to lowercase.
  ```python title="strings.py"
  print(greeting.lower())  # Output: "hello"
  ```
- **`title()`**: Converts the first character of each word to uppercase.
  ```python title="strings.py"
  title_greeting = "welcome to python"
  print(title_greeting.title())  # Output: "Welcome To Python"
  ```

## Whitespace Removal

- **`strip()`**: Removes leading and trailing whitespace.
  ```python title="strings.py"
  spaced_string = "  Hello  "
  print(spaced_string.strip())  # Output: "Hello"
  ```
- **`lstrip()`**: Removes leading whitespace only.
- **`rstrip()`**: Removes trailing whitespace only.

## Replacing Substrings

- **`replace(old, new)`**: Replaces all occurrences of `old` with `new` in the string.
  ```python title="strings.py"
  text = "I like apples"
  new_text = text.replace("apples", "bananas")
  print(new_text)  # Output: "I like bananas"
  ```

## Finding Substrings

- **`count(sub)`**: Counts how many times a substring appears in the string.
  ```python title="strings.py"
  phrase = "banana"
  print(phrase.count("a"))  # Output: 3
  ```
- **`find(sub)`**: Returns the index of the first occurrence of the substring. If not found, returns `-1`.
  ```python title="strings.py"
  print(phrase.find("na"))  # Output: 2
  ```

## Accessing Characters in a String

- You can **access individual characters** in a string using **indexing** with square brackets.
- **Index starts at `0`** (first character):
  ```python title="strings.py"
  first_char = phrase[0]  # Output: 'b'
  ```
- **Negative indexing** starts from the end:
  ```python title="strings.py"
  last_char = phrase[-1]  # Output: 'a'
  ```

## Comments and Disabling Code

- Use the **`#` symbol** to add comments to your code.
- Example:
  ```python title="strings.py"
  # This is a comment
  print("Hello, World!")  # This line prints a greeting
  ```
- You can **comment out lines of code** to prevent them from executing, especially useful during debugging:
  ```python title="strings.py"
  # print("This line won't run")
  print("This line will run")
  ```

## String Slicing

- You can extract **substrings** using slicing syntax `[start:end]`:
  ```python title="strings.py"
  text = "Python programming"
  sub_text = text[0:6]  # Output: "Python"
  ```
- **`start`** is inclusive, **`end`** is exclusive.

This overview gives a foundational understanding of working with strings in Python, covering creating, manipulating, and accessing string data effectively.
