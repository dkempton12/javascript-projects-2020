// Grabbing elements
const textArea = document.querySelector('.text');
const result = document.querySelector('.result');
const filterInputs = Array.from(document.querySelectorAll('[name="filter"]'));

const funkyLetters = {
	'-': '₋',
	'!': 'ᵎ',
	'?': 'ˀ',
	'(': '⁽',
	')': '₎',
	'+': '⁺',
	'=': '₌',
	'0': '⁰',
	'1': '₁',
	'2': '²',
	'4': '₄',
	'5': '₅',
	'6': '₆',
	'7': '⁷',
	'8': '⁸',
	'9': '⁹',
	a: 'ᵃ',
	A: 'ᴬ',
	B: 'ᴮ',
	b: 'ᵦ',
	C: '𝒸',
	d: 'ᵈ',
	D: 'ᴰ',
	e: 'ₑ',
	E: 'ᴱ',
	f: '𝒻',
	F: 'ᶠ',
	g: 'ᵍ',
	G: 'ᴳ',
	h: 'ʰ',
	H: 'ₕ',
	I: 'ᵢ',
	i: 'ᵢ',
	j: 'ʲ',
	J: 'ᴶ',
	K: 'ₖ',
	k: 'ₖ',
	l: 'ˡ',
	L: 'ᴸ',
	m: 'ᵐ',
	M: 'ₘ',
	n: 'ₙ',
	N: 'ᴺ',
	o: 'ᵒ',
	O: 'ᴼ',
	p: 'ᵖ',
	P: 'ᴾ',
	Q: 'ᵠ',
	q: 'ᑫ',
	r: 'ʳ',
	R: 'ᵣ',
	S: 'ˢ',
	s: 'ˢ',
	t: 'ᵗ',
	T: 'ₜ',
	u: 'ᵘ',
	U: 'ᵤ',
	v: 'ᵛ',
	V: 'ᵥ',
	w: '𝓌',
	W: 'ʷ',
	x: 'ˣ',
	X: 'ˣ',
	y: 'y',
	Y: 'Y',
	z: '𝓏',
	Z: 'ᶻ'
};

// Object that contains the filter methods for transforming text
const filters = {
	sarcastic(letter, index) {
		if (index % 2) {
			return letter.toUpperCase();
		} else {
			return letter.toLowerCase();
		}
	},

	funky(letter) {
		// check if there is a funky letter for this case
		let funkyLetter = funkyLetters[letter]; // looking up to the funkyLetters object
		if (funkyLetter) return funkyLetter;
		// if there is not, check if there is a lowercase version
		funkyLetter = funkyLetters[letter.toLowerCase()];
		if (funkyLetter) return funkyLetter;
		// if there is nothing, return the regular letter
		return letter;
	},

	randomSpaces(letter) {
		let random = Math.floor(Math.random() * 3);
		// for each space between words, there's a 1 in 3 chance of adding ... between them
		if (letter === ' ' && random === 2) {
			// random is referring to the number of spaces the above random function generates
			return '...';
		} else {
			return letter;
		}
	}
};

// Function that filters the text
function transformText(text) {
	const filter = filterInputs.find((input) => input.checked).value;
	console.log(filter);

	// Looping over each letter that is typed into the textarea
	const modifyText = Array.from(text).map(filters[filter]); // Filter lookup that looks up to the filter methods
	// Setting the result paragraph's textContent property - joining the modified text
	result.textContent = modifyText.join('');
}

// Listening for text value events in the textarea input
textArea.addEventListener('input', (event) => transformText(event.target.value));

// This is for toggling the different filters for text in the textarea
filterInputs.forEach((input) =>
	input.addEventListener('input', () => {
		transformText(textArea.value);
	})
);
