const numbers = [ 100, 1000, 2, 54, 24, 12, 999, 3 ];

const numbersSorted = numbers.sort(function(a, b) {
	// if (a > b) {
	// 	return 1;
	// } else if (b > a) {
	// 	return -1;
	// } else {
	// 	return 0;
	// }

	// Refactored
	return a - b;
});

console.log(numbersSorted);
