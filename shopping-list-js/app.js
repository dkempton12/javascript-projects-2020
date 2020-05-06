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
	// run a Custom Event for displaying items
	list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function displayItems() {
	const html = items
		.map((item) => {
			return `<li class="list-item">
      <input type="checkbox" value="${item.id}">
      <span class="itemName">${item.name}</span>
      <button>&times;</button>
    </li>`;
		})
		.join('');
	list.innerHTML = html;
}

function mirrorToLocalStorage() {
	// Mirroring data to localStorage with JSON.stringify
	localStorage.setItem('items', JSON.stringify(items));
}

// Need a function to maintain (preserve) the data in localStorage
function restoreLocalStorage() {
	const localStorageItems = JSON.parse(localStorage.getItem('items'));
}

shoppingForm.addEventListener('submit', handleSubmit);
list.addEventListener('itemsUpdated', displayItems);
list.addEventListener('itemsUpdated', mirrorToLocalStorage);
