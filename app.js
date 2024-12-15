console.log('This is the app.js for index.html')



/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }

console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));



/*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/

const isAdult = age => {
    if (age >= 21) {
        return 'Adult';
    }
    else {
        return 'Minor';
    }
}

console.log('Exercise 2 Result:', isAdult(21));
//console.log('Exercise 2 Result:', isAdult(20));



/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/

const isCharAVowel = char => {
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
        return true;
    }
    else {
        return false;
    }
}

console.log('Exercise 3 Result:', isCharAVowel('a'));




/*
Exercise 3.2: isCharAVowelDefensive()

Checks if a single character is a vowel.

This function includes some "defensibility" practices to handle edge cases and unexpected inputs.

Input:
  - Must be a single character string (case-insensitive).
  - Only 'a', 'e', 'i', 'o', 'u' are considered vowels.
  - Throws an error if input is not valid.
*/

const isCharAVowelDefensive = char => {
    const VOWELS = ['a', 'e', 'i', 'o', 'u']; 
    
    // Validate input
    if (typeof char !== 'string' || char.length !== 1) {
        throw new TypeError('Input must be a single character string.');
    }
    // Check if the character is a vowel
    return VOWELS.includes(char.toLowerCase());
}

const testCases = [
    'a',    // valid vowel
    'b',    // not a vowel
    'A',    // uppercase vowel
    '1',    // invalid input (number as string)
    '',     // invalid input (empty string)
    null,   // invalid input (non-string)
    'ae'    // invalid input (multiple characters)
  ];
  
// testCases.forEach((testCase, index) => {
//     try {
//       const result = isCharAVowelDefensive(testCase);
//       console.log(`Test Case '${testCase}' Result: ${result}`);
//     } catch (error) {
//       console.log(`Test Case '${testCase}' Result: ${error.message}`);
//     }
// });



/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') 
should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/

// Original Solution
// const generateEmail = (username, domain) => {
//     return username + '@' + domain;
// }

// Refactoring, now using single-line arrow function and template literals.
const generateEmail = (username, domain) => `${username}@${domain}`;

console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));



/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a 
time of day (morning, afternoon, evening) and return a personalized 
greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/

const greetUser = (username = 'user', timeOfDay = 'day') => {
    return `Good ${timeOfDay}, ${username}!`;
}


console.log('Exercise 5 Result:', greetUser("Sam", "morning"));
// console.log('Exercise 5 Result:', greetUser("Sam"));
// console.log('Exercise 5 Result:', greetUser(undefined, "morning"));
// console.log('Exercise 5 Result:', greetUser());
// console.log(greetUser({ timeOfDay: 'evening' })) // Concept: Object Destructuring



/*
Exercise 6: maxOfThree()

Define a function, maxOfThree. It should accept three numbers 
and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/

const maxOfThree = (a, b, c) => {
    let max = a;
    if (b > max) {
        max = b;
    }
    if (c > max) {
        max = c;
    }
    return max;
}

console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));



/*
Exercise 6.2: maxOfThreeMath 

Define a function, maxOfThree. It should accept three numbers 
and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

This implementation uses the built-in JavaScript Math library, 
specifically the Math.max() function.
*/

const maxOfThreeMath = (a, b, c) => Math.max(a, b, c);

//console.log('Exercise 6.2 Result:', maxOfThree(5, 10, 8));



/*
Exercise 7: calculateTip()

Create a function called calculateTip. It should take two arguments: 
the bill amount and the tip percentage (as a whole number). 
The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/

const calculateTip = (bill, tipPercentage) => (bill * tipPercentage / 100);

console.log('Exercise 7 Result:', calculateTip(50, 20));



/*
Exercise 8: convertTemperature()

Write a function named convertTemperature. 
It takes two arguments: a temperature and a string representing the 
scale ('C' for Celsius, 'F' for Fahrenheit). 
Convert the temperature to the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).

Complete the exercise in the space below:
*/

const convertTemperature = (temperature, scale) => {
    let result = 0;
    if (scale === "C") {
        // Convert Celsius to Fahrenheit: F = (C × 9/5) + 32
        return `${(temperature * 9 / 5) + 32} (Fahrenheit)`;
    }
    else if (scale === "F") {
        // Convert Fahrenheit to Celsius: C = (F - 32) × 5/9
        return `${(temperature - 32) * 5 / 9} (Celsius)`;
    }
    return result 
}

console.log('Exercise 8 Result:', convertTemperature(32, "C"));
// console.log('Exercise 8 Result:', convertTemperature(89.6, "F"));
// console.log('Exercise 8 Result:', convertTemperature(32, "F"));



/*
Exercise 9: basicCalculator()

Create a function named basicCalculator. 
It should take three arguments: two numbers and a string representing 
an operation ('add', 'subtract', 'multiply', 'divide'). 
Perform the provided operation on the two numbers. 
In operations where the order of numbers is important, 
treat the first parameter as the first operand and the 
second parameter as the second operand.

Example: basicCalculator(10, 5, 'subtract') should return 5.

Complete the exercise in the space below:

Note: I opted to use switch/case vs. if/else.
*/

const basicCalculator = (num1, num2, operator) => {
    switch (operator) {
        case 'add':
            return num1 + num2;
        case 'subtract':
            return num1 - num2;
        case 'multiply':
            return num1 * num2;
        case 'divide':
            if (num2 === 0) {
                throw new Error("Division by zero is not allowed.");
            }
            return num1 / num2;
        default:
            throw new Error("Invalid operator. ");
    }
}



console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));
// console.log('Exercise 9 Result:', basicCalculator(10, 5, "divide"));
// try {
//     console.log('Exercise 9 Result:', basicCalculator(10, 0, "divide"));
// } catch (error) {
//     console.log(`${error.message}`);
// }




/*
Exercise 10: calculateGrade()

Define a function called calculateGrade. 
It should take a numerical score and return the corresponding letter 
grade (A, B, C, D, F). 

For example, 90 and above yields an 'A', 80-89 is a 'B', 
and 70-79 is a 'C', 60-69 is a 'D' and anything lower than a 60 is an 'F'.

Example: calculateGrade(100) should return A.

Complete the exercise in the space below:
*/



console.log('Exercise 10 Result:', calculateGrade(85));



/*
Exercise 11: createUsername()

Define a function called createUsername. 
It should take a first name and a last name and return a username. 

The username should be a combination of the following:
- The first three letters of the first name.
- The first three letters of the last name.
- The total character count of the first and last name combined.

Example: createUsername('Samantha', 'Green') should return 'SamGre13'.

Complete the exercise in the space below:
*/



console.log('Exercise 11 Result:', createUsername("Samantha", "Green"));



/*
Exercise 12: numArgs()

Challenge yourself with numArgs. 
This function should return the count of arguments passed to it when called.

Complete the exercise in the space below:
*/



console.log('Exercise 12 Result:', numArgs(1, 2, 3, 4));
