// Grabbing elements
const textArea = document.querySelector('.text');
const result = document.querySelector('.result');
const filterInputs = Array.from(document.querySelectorAll('[name="filter"]'));

// Object that contains the filter methods for transforming text
const filters = {
	sarcastic() {},

	funky() {},

	unstructured() {}
};

// Function that filters the text
function transformText(text) {
	const filter = filterInputs.find((input) => input.checked).value;
	console.log(filter);
}

// Listening for text value events in the textarea input
textArea.addEventListener('input', (event) => transformText(event.target.value));
