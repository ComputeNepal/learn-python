---
sidebar_position: 2
---

# Python Code Structure

## Maintainable Code

As a good programmer, it is good habit to always write maintainable code. Writing a maintainable code can help later on while updating code, fixing bugs, and enhancing code overtime.

In-order to write maintainable code, we need to follow the following:

- **Increase readability of code**: For a source code to be maintainable, it is important that the code is easily readable, as if the program readability is bad, programmer has to spend more time to understand the code which will slow down the development of program.
- **Write modular code**: As a programmer, it is always a good practice to try and minimize redundancy of code. For an example, if we have to print same thing multiple times through out program execution, we could break that out into a separate function which can be called as needed in multiple places.
- **Documentation & Commenting**: Documenting/ Commenting on code is always a good habit. It is considered to be a good practice to write comments through out the code which explains the code block which will help other programmers who may work on the project in future, and sometimes help you only to understand the code better later on.
- **Consistent naming convention**: It is important to use a proper naming convention through out the program to write a better code. We may use snake_case or camelCase through out the program or other standard naming convention according to style guidelines.
- **Error handling**: As a good programmer, it is necessary to have a code that will handle each and every possible outcome of the code, and it is called error handling. A good programmer should always have a path for the program to follow when it encounters a error so that the error on program doesn't affect other parts of the system like over-use of memory, system crash, etc.
- **Testing**: Along with error handling, testing is also a very important part of coding. As a programmer, it is really important to test the program thoroughly as that desired behavior is achieved.

## Basic Rule

1. Source code is a set of statements, one per line.
2. No end-of line statement character like ';'. Many other languages like C, C++, Java has a end-of line character to denote a end of line.
3. Program execution follows the top-left to right-bottom approach; meaning that the program will execute line by line and one line at a time.
4. There's no special function of the entry-point of the program like int main() in C/ C++.
5. There's a built in `print` function to output to console.
6. There's a built in `input` function to take input from the user.

## Code Readability

- To increase readability we may use whitespace between characters.
- To separate different statements, we use a new line.
- Write meaningful comments, but avoid extra commenting.
- Indentation matters, so do indent code properly.
