/*Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.*/

function reverseString(word) {
  let reversedString = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reversedString += word[i];
  }
  return reversedString;
}

// console.log(reverseString('hello world'))

/* Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. */

function sumOfPositiveNum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}

// console.log(sumOfPositiveNum([2, -5, 10, -3, 7]));

/* Task 3: Write a JavaScript program to find the most frequent element in an array and return it. */

function findMostFrequentElement(arr) {
  const frequencyMap = [];
  let mostFrequentElement;
  let maxFrequency = 0;

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    frequencyMap[element] = (frequencyMap[element] || 0) + 1;

    if (frequencyMap[element] > maxFrequency) {
      maxFrequency = frequencyMap[element];
      mostFrequentElement = element;
    }
  }

  return mostFrequentElement;
}

// console.log(findMostFrequentElement([3, 5, 2, 5, 3, 3, 1, 4, 5]));

/* Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers. */

function findTwoSumIndices(sortedArr, target) {
  let left = 0;
  let right = sortedArr.length - 1;

  for (let i = 0; i < sortedArr.length; i++) {
    const sum = sortedArr[left] + sortedArr[right];

    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }

    if (left >= right) {
      break;
    }
  }

  return [];
}

// console.log(findTwoSumIndices([1, 3, 6, 8, 11, 15], 9));

/* Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation. */

function calculator(num1, num2, operator) {
  if (
    typeof num1 !== "number" ||
    typeof num2 !== "number" ||
    isNaN(num1) ||
    isNaN(num2)
  ) {
    return "Invalid input";
  }

  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else if (operator === "/") {
    if (num2 === 0) {
      return "Division by zero is not allowed.";
    }
    return num1 / num2;
  } else {
    return "Invalid operator. Please use one of: '+', '-', '*', '/'";
  }
}

// console.log(calculator(10, 5, "+"));

/* Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters. */

function generateRandomPassword(length) {
  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specialCharacters = "!@#$%^&*()_-+=<>?/{}~";

  const allCharacters =
    uppercaseLetters + lowercaseLetters + numbers + specialCharacters;

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allCharacters.length);
    password += allCharacters[randomIndex];
  }

  return password;
}

// console.log(generateRandomPassword(12));

/* Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value. */

function romanToInteger(roman) {
  const romanDict = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;
  let prevValue = 0;

  for (let i = roman.length - 1; i >= 0; i--) {
    const char = roman[i];
    const value = romanDict[char];

    if (value >= prevValue) {
      total += value;
    } else {
      total -= value;
    }
    prevValue = value;
  }

  return total;
}

// console.log(romanToInteger("IX"));

/* Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number. */

function findSecondSmallest(arr) {
  if (!Array.isArray(arr) || arr.length < 2) {
    return("Input should be an array with at least two elements.");
  }

  // Sorting the array in ascending order
  arr.sort((a, b) => a - b);

  return arr[1];
}

// console.log(findSecondSmallest([111, 13, 25, 9, 34, 1]));
