function showLocalScope() {
  let localVariable = "I'm a local variable";
  console.log(localVariable);
}

showLocalScope();

// console.log(localVariable);
// Uncommenting this will throw an error because localVariable is not accessible the fuction
