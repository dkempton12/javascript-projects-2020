// Grabbing elements
const textArea = document.querySelector('.text');
const result = document.querySelector('.result');
const filterInputs = Array.from(document.querySelectorAll('[name="filter"]'));

function transformText(text) {}

// Listening for text value events in the textarea input
textArea.addEventListener('input', (event) => transformText(event.target.value));
