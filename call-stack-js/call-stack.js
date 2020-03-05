// Function declaration
const multiply = (a, b) => a * b;

// Invocation (this is the first invocation)
// 1) It is first added to the top of the stack,
// 2) And then the multiply function needs to be executed,
// therefore the multiply function goes to the top of the stack
// 3) Multiply function is executed
// 4) and then the invocation in the result variable is the last
// in the stack to run
const result = multiply(4, 4);

// Another call stack example
function firstExample() {
	return `First example!`;
}

function secondExample() {
	return firstExample() + ` Second example!`;
}
secondExample();
