// In this example, the invocation goes to the top of the stack 
// Next, the multiply function is stacked on top and runs in order to complete
// the function call
// Lastly, the call is again on top of the stack and is executed 

// Function declaration
const multiply = (a, b) => a * b;

// Invocation
const result = multiply(4, 4);