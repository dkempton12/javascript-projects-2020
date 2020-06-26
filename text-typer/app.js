function timer(time) {
	return new Promise((resolve) => {
		setTimeout(resolve, time);
	});
}

function generateRandomNumber(min, max, multiplier = Math.random()) {
	return multiplier * (max - min) + min;
}

async function type(element) {
	const text = element.textContent;
	const textSoFar = '';
	for (const letter of text) {
		// set random time for the typing
		const { typeMin, typeMax } = element.dataset;
		const timeToWait = generateRandomNumber(typeMin, typeMax);
		await timer(timeToWait);
		textSoFar += letter;
		textSoFar = element.textContent;
	}
}

type();
