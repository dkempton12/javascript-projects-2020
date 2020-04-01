const shellFishInventory = [
	{ name: 'Clams', quantity: 2000 },
	{ name: 'Mussels', quantity: 2500 },
	{ name: 'Oysters', quantity: 3000 },
	{ name: 'Scallops', quantity: 1000 }
];

const findMussels = shellFishInventory.find(({ name }) => name === 'Mussels');
console.log(findMussels);
