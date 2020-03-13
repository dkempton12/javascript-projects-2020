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
	// Populate the inner modal with the image info
	innerModal.innerHTML = `
  <img src="${imageSrc.replace('200', '600')}" width="400" height="400" alt="${title}">
  <p>${description}</p>
  `;
	// Open modal
	outerModal.classList.add('open');
}

// forEach that will run button clicks
buttons.forEach((button) => button.addEventListener('click', handleButtonClick));

function closeModal() {
	outerModal.classList.remove('open');
}

outerModal.addEventListener('click', function(event) {
	const isOutside = !event.target.closest('.innerModal');
	if (isOutside) {
		closeModal();
	}
});

// Adding feature where esc key can be used to close modal
window.addEventListener('keydown', function() {
	if (event.key === 'Escape') {
		outerModal.classList.remove('open');
	}
});
