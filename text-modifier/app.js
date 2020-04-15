// Grabbing elements
const textArea = document.querySelector('.text');
const result = document.querySelector('.result');
const filterInputs = Array.from(document.querySelectorAll('[name="filter"]'));

// Object that contains the filter methods for transforming text
const filters = {
	sarcastic(letter, index) {
		if (index % 2) {
			return letter.toUpperCase();
		} else {
			return letter.toLowerCase();
		}
	},

	funky() {},

	unstructured() {}
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
