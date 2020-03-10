// Grabbing elements
const buttons = document.querySelectorAll('.card button');
const innerModal = document.querySelector('.inner-modal');
const outerModal = document.querySelector('.outer-modal');

// Handling button clicks
function handleButtonClick(event) {
	const button = event.currentTarget;
	const card = button.closest('.card');
	// Grabbing image source
	const imageSrc = card.querySelector('img').src;
	const description = card.dataset.description;
	const title = document.querySelector('h2').textContent;
}
