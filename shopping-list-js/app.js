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
	// Push added items into the items array
	items.push(item);
	// Reset the form after each item is submitted
	event.target.reset();
}

shoppingForm.addEventListener('submit', handleSubmit);
