// Grabbing elements
const shoppingForm = document.querySelector('.shopping');

const list = document.querySelector('.list');

// Array to store app's state
let items = [];

// Function to handle the button submit events
function handleSubmit(event) {
	event.preventDefault();
	const name = event.currentTarget.item.value;
	console.log(name);
}

shoppingForm.addEventListener('submit', handleSubmit);
