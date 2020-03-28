const values = [ 0, 1, -10, ``, `string with content`, undefined, NaN, null, {}, [] ];

console.group(`Checking if values are Truthy or Falsy`);

values.forEach((value) => {
	// If value is truthy
	if (value) {
		console.table(value, `Value is truthy`);
		// Else, value is falsy
	} else {
		console.table(value, `Value is falsy`);
	}
});
console.groupEnd();
