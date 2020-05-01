// Grabbing elements
const shoppingForm = document.querySelector('.shopping');

const list = document.querySelector('.list');

// Array to store app's state
let items = [];

// Function to handle the button submit events
function handleSubmit(event) {
	event.preventDefault();
	const name = event.currentTarget.item.value;
	if (!name) return;

	// create an object to store item data for each item added
	const item = {
		name,
		id: Date.now(),
		completed: false
	};
	console.log(item);
}

shoppingForm.addEventListener('submit', handleSubmit);
