const module = {
	randomNumber: 20,
	getRandomNumber: function() {
		return this.randomNumber;
	}
};

// example where the this vale of getRandomNumber is equal to the Window
// In other words, this variable being declared is being stored on the Window (therefor, this = Window)
const getRandomNumberUnbound = module.getRandomNumber;
console.log(getRandomNumberUnbound());

// binding getRandomNumberUnbound to the module
const getRandomNumberBound = getRandomNumberUnbound.bind(module);
console.log(getRandomNumberBound()); // returns the 20 value
