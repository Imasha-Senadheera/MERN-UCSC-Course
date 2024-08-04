function outerFunction() {
  let outerVariable = "I am outer variable";

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

let myClosure = outerFunction();
myClosure();
