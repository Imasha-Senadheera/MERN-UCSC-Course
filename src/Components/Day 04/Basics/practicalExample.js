class Stack {
    constructor() {
      this.items = [];
    }
  
    // Push method to add an element to the stack
    push(element) {
      this.items.push(element);
    }
  
    // Pop method to remove and return the top element of the stack
    pop() {
      if (this.isEmpty()) {
        throw new Error("Stack is empty");
      }
      return this.items.pop();
    }
  
    // Peek method to return the top element without removing it
    peek() {
      if (this.isEmpty()) {
        throw new Error("Stack is empty");
      }
      return this.items[this.items.length - 1];
    }
  
    // Method to check if the stack is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Method to get the size of the stack
    size() {
      return this.items.length;
    }
  
    // Method to clear the stack
    clear() {
      this.items = [];
    }
  }
  
  // Example usage
  const stack = new Stack();
  
  stack.push(10);
  stack.push(20);
  stack.push(30);
  
  console.log("Stack:", stack.items); // Output: Stack: [ 10, 20, 30 ]
  console.log("Top element:", stack.peek()); // Output: Top element: 30
  
  console.log("Popped element:", stack.pop()); // Output: Popped element: 30
  console.log("Stack after pop:", stack.items); // Output: Stack after pop: [ 10, 20 ]
  
  console.log("Is stack empty?", stack.isEmpty()); // Output: Is stack empty? false
  console.log("Stack size:", stack.size()); // Output: Stack size: 2
  
  stack.clear();
  console.log("Stack after clear:", stack.items); // Output: Stack after clear: []
  