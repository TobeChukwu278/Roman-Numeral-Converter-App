# Roman-Numeral-Converter-App

This project is a simple web application that converts decimal numbers (integers) to Roman numerals. It provides a user-friendly interface for inputting a number and displaying its Roman numeral equivalent.

## Table of Contents

- [Introduction]
- [Features]
- [How to Use]
- [Technologies Used]
- [Code Explanation]
- [Installation]
- [Contributing]
- [License]

## Introduction

The Roman numeral system is a numeral system that originated in ancient Rome. It uses combinations of letters from the Latin alphabet (I, V, X, L, C, D, and M) to represent numbers. This application provides a quick and easy way to convert between decimal numbers and their Roman numeral representations.

## Features

- Converts decimal numbers (integers) to Roman numerals.
- Input validation to ensure the user enters a valid number within the supported range (1-3999).
- Clear error messages displayed to the user if invalid input is provided.
- User-friendly interface.
- Responsive design (if implemented, mention this).

## How to Use

1.  Open the `index.html` file in your web browser.
2.  Enter a decimal number in the input field labeled "Enter a number".
3.  Click the "Convert" button or press Enter in the input field.
4.  The Roman numeral equivalent of the entered number will be displayed in the output area.
5.  If an invalid number is entered (e.g., non-numeric input, numbers outside the range 1-3999), an appropriate error message will be displayed.

## Technologies Used

- HTML: For structuring the web page.
- CSS: For styling the web page (if used, mention specific frameworks or approaches).
- JavaScript: For handling user input, performing the conversion, and updating the UI.

## Code Explanation

This section provides a breakdown of the key JavaScript functions:

- **`convertToRoman(num)`:**

  - Takes an integer `num` as input.
  - Defines a `base` array containing tuples of Roman numeral symbols and their corresponding decimal values (e.g., ["M", 1000], ["CM", 900], etc.). This array is ordered from largest to smallest value, which is crucial for the conversion logic.
  - Initializes an empty array `roman` to store the resulting Roman numeral characters.
  - Iterates through the `base` array. For each symbol and value pair:
    - While the input `num` is greater than or equal to the current value:
      - Appends the corresponding Roman numeral symbol to the `roman` array.
      - Subtracts the value from `num`.
  - Returns the concatenated string of Roman numeral characters from the `roman` array.

- **`isNumber(str, int)`:**
- Takes the input string `str` and its integer representation `int` as arguments.

  - Performs input validation:
    - Checks if the input string is empty or contains characters 'e' or '.'.
    - Checks if the integer is less than 1 or greater than or equal to 4000.
  - Sets an error message if any of the validation checks fail.
  - Displays the error message in the `numberOutput` element and adds the "alert" class for styling.
  - Returns `true` if the input is valid, `false` otherwise.

  - **`wipeAlert()`:**
  - Clears the error message from the `numberOutput` element and removes the "alert" class.

- **`UIUpdate()`:**

  - Gets the input value from the `number` input field.
  - Parses the input value as an integer.
  - Calls `wipeAlert()` to clear any previous error messages.
  - Calls `isNumber()` to validate the input.
  - If the input is valid, calls `convertToRoman()` to perform the conversion and displays the result in the `numberOutput` element.

- **Event Listeners:**
  - An event listener is attached to the form's submit event to prevent default form submission and call `UIUpdate()`.
  - An event listener is attached to the "Convert" button's click event to call `UIUpdate()`.

## Installation

1.  Clone the repository (https://github.com/TobeChukwu278/Roman-Numeral-Converter-App.git).
2.  Open the `index.html` file in your web browser. No further installation is required.

## Contributing

Contributions are welcome! Please submit pull requests for bug fixes, new features, or improvements.

## License

MIT License
