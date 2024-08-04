function myDisplayer(display) {
  console.log("Display on web page: " + display);
}

function myDisplayer2(result) {
  console.log("The result is: " + result);
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

// Example usage
myCalculator(5, 5, myDisplayer); // Display result
myCalculator(3, 3, myDisplayer2); // Log result to console
