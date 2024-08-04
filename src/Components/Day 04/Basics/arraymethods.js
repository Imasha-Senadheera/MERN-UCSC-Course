// Push
let fruits = ["apple", "banana"];
let newLength = fruits.push("orange");
console.log("Fruits after push:", fruits); // Output: ["apple", "banana", "orange"]
console.log("New length after push:", newLength); // Output: 3

// Pop
let fruits1 = ["apple", "banana", "orange"];
let removedElement = fruits1.pop();
console.log("Fruits after pop:", fruits1); // Output: ["apple", "banana"]
console.log("Removed element:", removedElement); // Output: "orange"

// Map
let numbers = [1, 2, 3, 4];
let squares = numbers.map((num) => num * num);
console.log("Squares of numbers:", squares); // Output: [1, 4, 9, 16]

// Filter
let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = numbers2.filter((num) => num % 2 === 0);
console.log("Even numbers:", evenNumbers); // Output: [2, 4, 6, 8, 10]

// Reduce
let numbers3 = [1, 2, 3, 4];
let sum = numbers3.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log("Sum of numbers:", sum); // Output: 10
