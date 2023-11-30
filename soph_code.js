/* soph_code.js - Complex JavaScript Code */

// Function to find the fibonacci sequence up to a given number
function fibonacci(max) {
  var fib_seq = [0, 1];

  for (var i = 2; i < max; i++) {
    fib_seq[i] = fib_seq[i - 1] + fib_seq[i - 2];
  }

  return fib_seq;
}

// Function to print even numbers within a range
function printEvenNumbers(start, end) {
  for (var i = start; i <= end; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

// Class representing a person
class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  introduce() {
    console.log("Hello, my name is " + this.name + ".");
    console.log("I am " + this.age + " years old and " + this.gender + ".");
  }
}

// Create instances of the Person class
var person1 = new Person("John Doe", 25, "Male");
var person2 = new Person("Jane Smith", 30, "Female");

// Introduce the persons
person1.introduce();
person2.introduce();

// Async function to simulate fetching data from an API
async function fetchDataFromAPI(url) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
}

// Fetch data from an API
fetchDataFromAPI("https://api.example.com/data");

// Complex mathematical calculation using multiple functions
function performComplexCalculation(a, b, c) {
  var result = Math.pow((a + b) * c, 2);
  return result;
}

// Perform the complex calculation
var calculationResult = performComplexCalculation(2, 3, 4);
console.log("Result of the complex calculation: " + calculationResult);

// Another complex function involving recursion
function factorial(n) {
  if (n <= 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

// Calculate factorial of a number
var factorialResult = factorial(5);
console.log("Factorial of 5 is: " + factorialResult);

// Complex algorithm to generate prime numbers within a range
function generatePrimeNumbers(start, end) {
  var primes = [];

  for (var i = start; i <= end; i++) {
    var isPrime = true;

    for (var j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime && i > 1) {
      primes.push(i);
    }
  }

  return primes;
}

// Generate prime numbers within range 1 to 100
var primeNumbers = generatePrimeNumbers(1, 100);
console.log("Prime numbers within range 1 to 100: " + primeNumbers);

// More complex code...
// ...
// ...
// ...

// End of the complex JavaScript code