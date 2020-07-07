function randomElementFromArray(array, repeatedItem) {
	const item = array[Math.floor(Math.random * array.length)];
	if (item === repeatedItem) {
		randomElementFromArray(array, repeatedItem);
	}
	return item;
}

const items = [ 'item 1', 'item 2', 'item 3', 'item 4', 'item 5' ];

randomElementFromArray(items);
