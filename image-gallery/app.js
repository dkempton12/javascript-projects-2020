function Gallery(gallery) {
	if (!gallery) {
		throw new Error(`No gallery present`);
	}

	// select elements
	const images = Array.from(gallery.querySelectorAll('img'));
	const modal = document.querySelector('.modal');
	const previousButton = modal.querySelector('.previous');
	const nextButton = modal.querySelector('.next');
	// declare current image you're targeting in the gallery
	let currentImage;

	function openModal() {
		if (modal.matches('.open')) {
			console.info('Modal is already open!');
		}
		modal.classList.add('open');
		window.addEventListener('keyup', handleKeyUps);
	}

	function closeModal() {
		modal.classList.remove('open');
		window.removeEventListener('keyup', handleKeyUps);
	}

	function closeModalWhenClickIsOutsideInnerModal(event) {
		if (event.target === event.currentTarget) {
			closeModal();
		}
	}

	function handleKeyUps(event) {
		if (event.key === 'Escape') {
			closeModal();
		}
		if (event.key === 'ArrowRight') {
			return showNextImage();
		}

		if (event.key === 'ArrowLeft') {
			return showPreviousImage();
		}
	}

	function showImage(element) {
		// show image data in the modal
		// img
		modal.querySelector('img').src = element.src;
		// img title
		modal.querySelector('h2').textContent = element.title;
		// img caption
		modal.querySelector('p').textContent = element.dataset.description;

		// set currentImage variable equal to img element being passed in
		currentImage = element;
		// run openModal
		openModal();
	}

	images.forEach((image) =>
		image.addEventListener('click', function(event) {
			showImage(event.target);
		})
	);

	modal.addEventListener('click', closeModalWhenClickIsOutsideInnerModal);
}

const gallery = Gallery(document.querySelector('.gallery'));
