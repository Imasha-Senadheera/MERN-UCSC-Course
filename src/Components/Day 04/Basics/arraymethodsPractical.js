// Initialize an empty stack
let stack = [];

// Function to push an element onto the stack
function pushToStack(element) {
  stack.push(element);
  console.log(`Pushed ${element} onto the stack.`);
}

// Function to pop an element from the stack
function popFromStack() {
  if (stack.length === 0) {
    console.log("Stack underflow: Cannot pop from an empty stack.");
    return null;
  } else {
    const poppedElement = stack.pop();
    console.log(`Popped ${poppedElement} from the stack.`);
    return poppedElement;
  }
}

// Example usage
pushToStack(10); // Push 10 onto the stack
pushToStack(20); // Push 20 onto the stack
pushToStack(30); // Push 30 onto the stack
popFromStack(); // Pop an element from the stack
popFromStack(); // Pop another element from the stack
