// Initialize the shopping cart with at least three items
let shoppingCart = [
  { id: 1, name: "Apple", price: 0.5, quantity: 3 },
  { id: 2, name: "Banana", price: 0.2, quantity: 5 },
  { id: 3, name: "Cherry", price: 1.5, quantity: 2 },
];

// Display initial shopping cart
console.log("Initial Shopping Cart:", shoppingCart);

// Add a new item to the cart using the PUSH method
shoppingCart.push({ id: 4, name: "Date", price: 2.0, quantity: 1 });
console.log("Shopping Cart after push:", shoppingCart);

// Remove the last item from the cart using the POP method and display the removed item
let removedItem = shoppingCart.pop();
console.log("Removed item using pop:", removedItem);
console.log("Shopping Cart after pop:", shoppingCart);

// Remove the first item from the cart using the SHIFT method and display the removed item
let removedFirstItem = shoppingCart.shift();
console.log("Removed item using shift:", removedFirstItem);
console.log("Shopping Cart after shift:", shoppingCart);

// Add a new item to the beginning of the cart using the UNSHIFT method
shoppingCart.unshift({ id: 5, name: "Elderberry", price: 3.0, quantity: 1 });
console.log("Shopping Cart after unshift:", shoppingCart);

// Calculate the total price for each item in the cart using the map method
let totalPrices = shoppingCart.map((item) => item.price * item.quantity);
console.log("Total prices for each item:", totalPrices);

// Find and display all items that cost more than $1 using the filter method
let expensiveItems = shoppingCart.filter((item) => item.price > 1);
console.log("Items that cost more than $1:", expensiveItems);

// Calculate the total cost of all items in the cart using the reduce method
let totalCost = shoppingCart.reduce(
  (accumulator, item) => accumulator + item.price * item.quantity,
  0
);
console.log("Total cost of all items:", totalCost);

// Display the final state of the shopping cart after all operations
console.log("Final Shopping Cart:", shoppingCart);
