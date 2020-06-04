// Promise function
function makeCoffees(addOns = []) {
	const coffeePromise = new Promise(function(resolve, reject) {
		const timeToMakeCoffee = 1000 + addOns.length * 300;
		setTimeout(function() {
			resolve(`Your coffee is ready with: ${addOns.join(', ')}`);
		}, timeToMakeCoffee);
	});
	return coffeePromise;
}

const coffee1 = makeCoffees([ 'milk' ]);
const coffee2 = makeCoffees([ 'cream' ]);
const coffee3 = makeCoffees([ 'latte', 'skim milk', 'brown sugar', 'cinnamon' ]);
