function timer(time) {
	return new Promise(function(resolve) {
		setTimeout(resolve, time);
	});
}

function generateRandomNumber(min, max, multiplier = Math.random()) {
	return multiplier * (max - min) + min;
}

async function type(element) {
	const text = element.textContent;
	let textSoFar = '';
	for (const letter of text) {
		// set random time for the typing - grabbing properties from the dataset
		const { typeMin, typeMax } = element.dataset;
		const timeToWait = generateRandomNumber(typeMin, typeMax);
		await timer(timeToWait);
		textSoFar += letter;
		element.textContent = textSoFar;
	}
}

document.querySelectorAll('[data-type]').forEach(type);
