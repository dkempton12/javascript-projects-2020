function timer(time) {
	return new Promise((resolve) => {
		setTimeout(resolve, time);
	});
}

function generateRandomNumber(min, max, multiplier = Math.random()) {
	return multiplier * (max - min) + min;
}
