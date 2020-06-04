// Promise function
function makeCoffees(addOns = []) {
	const coffeePromise = new Promise(function(resolve, reject) {
		const timeToMakeCoffee = 1000 + addOns.length * 300;
		setTimeout(function() {
			resolve(`Your coffee is ready with: ${addOns.join(', ')}`);
		}, timeToMakeCoffee);
	});
}
