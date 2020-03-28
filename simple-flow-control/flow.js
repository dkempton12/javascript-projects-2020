const age = 50;

if (age >= 70) {
	console.log(`You age is: ${age}, meaning you're in your 70s!`);
} else if (age >= 60) {
	console.log(`You age is: ${age}, meaning you're in your 60s!`);
} else if (age >= 50) {
	console.log(`You age is: ${age}, meaning you're in your 50s!`);
} else {
	console.log(`You are: ${age} years old!`);
}

function dashify(sentence, lowercase) {
	if (lowercase) {
		// Replace all space instances globally
		return sentence.replace(/\s/g, '-').toLowerCase();
	} else {
		return sentence.replace(/\s/g, '-');
	}
}
