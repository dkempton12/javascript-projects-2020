const module = {
	number: 20,
	getRandomNumber: function() {
		return this.randomNumber;
	}
};

// example where the this vale of getRandomNumber is equal to the Window
// In other words, this variable being declared is being stored on the Window (therefor, this = Window)
const getNumberUnbound = module.getRandomNumber;
console.log(getNumberUnbound());

// binding getRandomNumberUnbound to the module
const getNumberBound = getNumberUnbound.bind(module);
console.log(getNumberBound()); // returns the 20 value
