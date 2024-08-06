// Define an object to hold math-related functions
const mathOperations = {
  // Function to add two numbers
  add: function (num1, num2) {
    return num1 + num2;
  },

  // Function to subtract two numbers
  subtract: function (num1, num2) {
    return num1 - num2;
  },

  // Function to multiply two numbers
  multiply: function (num1, num2) {
    return num1 * num2;
  },

  // Function to divide two numbers
  divide: function (num1, num2) {
    return num1 / num2;
  },
};

// Example usage
const sum = mathOperations.add(5, 3); // returns 8
console.log("Sum:", sum);
