const fruitInventory = {
	bananas: 2000,
	strawberries: 3000,
	apples: 4000,
	oranges: 3500
};

const fruitSurplus = Object.values(fruitInventory).filter((fruitQty) => fruitQty > 3000);
console.log(fruitSurplus);
