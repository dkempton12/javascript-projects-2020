// Grabbing elements
const buttons = document.querySelectorAll('.card button');
const innerModal = document.querySelector('.inner-modal');
const outerModal = document.querySelector('.outer-modal');

// Handling button clicks
function handleButtonClick(event) {
	const button = event.currentTarget;
	const card = button.closest('.card');
}
