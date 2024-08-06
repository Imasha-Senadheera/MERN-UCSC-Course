// Push: Adds an element to the end of the array
let fruits = ["apple", "banana"];
let newLength = fruits.push("orange");
console.log("Fruits after push:", fruits); // Output: ["apple", "banana", "orange"]
console.log("New length after push:", newLength); // Output: 3

// Pop: Removes the last element from the array and returns it
let fruits1 = ["apple", "banana", "orange"];
let removedElement = fruits1.pop();
console.log("Fruits after pop:", fruits1); // Output: ["apple", "banana"]
console.log("Removed element:", removedElement); // Output: "orange"

// Shift: Removes the first element from the array and returns it
let fruits2 = ["apple", "banana", "orange"];
let firstFruit = fruits2.shift();
console.log("Fruits after shift:", fruits2); // Output: ["banana", "orange"]
console.log("Removed element:", firstFruit); // Output: "apple"

// Unshift: Adds one or more elements to the beginning of the array
let fruits3 = ["apple", "banana", "orange"];
let newLength1 = fruits3.unshift("pineapple", "guava");
console.log("Fruits after unshift:", fruits3); // Output: ["pineapple", "guava", "apple", "banana", "orange"]
console.log("New length after unshift:", newLength1); // Output: 5

// Map: Creates a new array with the results of calling a function on every element
let numbers = [1, 2, 3, 4];
let squares = numbers.map((num) => num * num);
console.log("Squares of numbers:", squares); // Output: [1, 4, 9, 16]

// Filter: Creates a new array with all elements that pass a test
let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = numbers2.filter((num) => num % 2 === 0);
console.log("Even numbers:", evenNumbers); // Output: [2, 4, 6, 8, 10]

// Reduce: Applies a function against an accumulator and each element to reduce it to a single value
let numbers3 = [1, 2, 3, 4];
let sum = numbers3.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log("Sum of numbers:", sum); // Output: 10
