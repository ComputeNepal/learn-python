---
sidebar_position: 5
---

# Numeric Representation

Python supports different ways of representing numbers, including integer and real (floating point) numbers.

## Integer Types (int)

Integers in Python can be represented in various numerical systems:

- **Decimal Notation (Base 10):**

  - This is the default way we represent numbers, such as `3` or `-89`.

- **Binary Notation (Base 2):**

  - Represented using a prefix of `0b`. It consists only of `0` and `1`.
  - Example: `0b1011` is equivalent to `11` in decimal.

- **Octal Notation (Base 8):**

  - Represented using a prefix of `0o`. It uses digits from `0` to `7`.
  - Example: `0o12` is equivalent to `10` in decimal.

- **Hexadecimal Notation (Base 16):**
  - Represented using a prefix of `0x`. It uses digits from `0` to `9` and letters `A` to `F` to represent values `10` to `15`.
  - Example: `0x2B` is equivalent to `43` in decimal.

### Conversion between Notations

- To **convert binary to decimal**, sum each digit multiplied by `2` raised to the power of its position, starting from `0` on the right.

  - Example: `0b1011` in decimal is calculated as:
    - \( 1 \times 2^3 + 0 \times 2^2 + 1 \times 2^1 + 1 \times 2^0 = 8 + 0 + 2 + 1 = 11 \)

- To **convert octal to decimal**, use powers of `8`.

  - Example: `0o52` in decimal is calculated as:
    - \( 5 \times 8^1 + 2 \times 8^0 = 40 + 2 = 42 \)

- To **convert hexadecimal to decimal**, use powers of `16`.
  - Example: `0x2B` in decimal is calculated as:
    - \( 2 \times 16^1 + 11 \times 16^0 = 32 + 11 = 43 \)

Python can perform these conversions using built-in functions:

- `bin(value)` returns the binary representation as a string.
- `oct(value)` returns the octal representation as a string.
- `hex(value)` returns the hexadecimal representation as a string.

To **convert a string representation** back to an integer, use the `int()` function.

- Example: `int("0b1011", 2)` converts the binary string to decimal.

### Integer Variables in Different Notations

When working with different notations, Python internally treats the value as an integer regardless of how it is expressed.

- Example:
  ```python title="numbers.py"
  a = 10
  b = 0b1010
  c = 0o12
  d = 0xA
  print(a, b, c, d)  # Outputs: 10 10 10 10
  ```
  All four variables have the same value, `10`, but are written in different notations.

## Floating-Point Numbers (float)

Floating-point numbers represent real numbers and can have a fractional part.

- **Standard Notation:**

  - Examples: `3.0`, `-89.14`.

- **Scientific Notation:**
  - Represented using `e` or `E` to indicate powers of `10`.
  - Example: `1.5e3` is equivalent to \( 1.5 \times 10^3 = 1500 \).

### Precision Issues with Floating-Point Numbers

- Floating-point numbers may have **precision issues** because they cannot precisely represent all real numbers due to limitations in memory representation.
- Example:
  ```python title="numbers.py"
  a = 0.1
  b = 0.2
  sum = a + b
  print("The sum is", sum)  # Outputs: The sum is 0.30000000000000004
  ```
  Instead of `0.3`, Python returns a value close to `0.3` due to rounding errors in binary representation.

### Addressing Precision Issues

- For cases where precision is critical (e.g., financial calculations), Python provides the `decimal` module, which offers more accurate representation and operations. This module is beyond the scope of the video.

## Practical Examples

- **Printing Variables in Different Notations:**

  ```python title="numbers.py"
  a = 10
  b = 0b1010
  c = 0o12
  d = 0xA
  print(bin(a), oct(b), hex(c), hex(d))  # Outputs: 0b1010 0o12 0xa 0xa
  ```

  This example prints the binary, octal, and hexadecimal representations of the value `10`.

- **Floating-Point Precision Example:**
  ```python title="numbers.py"
  a = 0.1
  b = 0.2
  sum = a + b
  print(f"The sum is approximately: {sum:.2f}")  # Outputs: The sum is approximately: 0.30
  ```
  By formatting the output, we can display the sum as `0.30`, but the underlying value still contains precision errors.
