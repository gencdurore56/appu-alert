/* 
   Filename: ComplexCode.js
   Description: A complex JavaScript code demonstrating various advanced concepts and techniques. 
*/

// Class representing a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to get the person's details
  getDetails() {
    return `${this.name} is ${this.age} years old.`;
  }
}

// Class representing a Student, inheriting from Person
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  // Method to get the student's details, overriding parent method
  getDetails() {
    return `${this.name} is ${this.age} years old and is in grade ${this.grade}.`;
  }
}

// Function to calculate factorial recursively
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Array containing prime numbers up to a given limit
function getPrimes(limit) {
  const primes = [];
  for (let i = 2; i <= limit; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(i);
    }
  }
  return primes;
}

// Function to capitalize the first letter of each word in a string
function capitalizeWords(str) {
  const words = str.split(' ');
  const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  return capitalizedWords.join(' ');
}

// Function to find the longest word in a string
function findLongestWord(str) {
  const words = str.split(' ');
  let longestWord = '';
  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

// Helper function to check if a number is even
function isEven(number) {
  return number % 2 === 0;
}

// Generate an array of even numbers up to a given limit
function generateEvenNumbers(limit) {
  const evenNumbers = [];
  for (let i = 0; i <= limit; i++) {
    if (isEven(i)) {
      evenNumbers.push(i);
    }
  }
  return evenNumbers;
}

// Example usage
const person = new Person("John Doe", 25);
console.log(person.getDetails());

const student = new Student("Jane Smith", 18, 12);
console.log(student.getDetails());

console.log(factorial(5));
console.log(getPrimes(20));
console.log(capitalizeWords("the quick brown fox"));
console.log(findLongestWord("The longest word in this sentence is"));