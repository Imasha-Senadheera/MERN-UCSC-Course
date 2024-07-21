const hello = function() {
    return "Hello World!";
};

const hello_arrow = () => {
    return "Hello Arrow!";
};
// Example of an arrow function with parameters
const greet = (name) => {
    return `Hello, ${name}!`;
};

// Arrow function with a parameter and implicit return
const implicit_return = (name) => `Hello, ${name}!`;

console.log(hello());
console.log(hello_arrow());
console.log(greet('Alice'));
console.log(implicit_return('Bob'));
