// creating a function that returns an array of numbers based on the start and end arguments
// Using Array.from array method
function createRange(start, end) {
	const range = Array.from({ length: end - start + 1 }, function(item, index) {
		return index + start;
	});
	return range;
}

const newRange = createRange(10, 20);
console.log(newRange);
