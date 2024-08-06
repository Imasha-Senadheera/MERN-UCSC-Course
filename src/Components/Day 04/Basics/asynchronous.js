// Function to print the result
function printResult(result) {
  console.log("The result is: " + result);
}

// Asynchronous function to calculate sum
function calculateSumAsync(num1, num2, callback) {
  console.log("Calculation started, please wait...");
  // Use setTimeout to simulate asynchronous operation
  setTimeout(() => {
    let sum = num1 + num2;
    callback(sum); // The callback function is called once the operation is complete
  }, 2000); // 2-second delay
}

// Script execution
console.log("Script start");
calculateSumAsync(5, 7, printResult);
console.log("Script end - The calculation is happening asynchronously.");
