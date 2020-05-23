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
	}

	function showImage(element) {
		// show image data in the modal
		// img
		modal.querySelector('img').src = element.src;
		// img title
		modal.querySelector('h2').textContent = element.title;
		// img caption
		modal.querySelector('p').textContent = element.dataset.description;
	}
	// set currentImage variable equal to img element being passed in
	currentImage = element;
}

const gallery = Gallery(document.querySelector('.gallery'));
