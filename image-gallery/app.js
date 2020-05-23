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
	}
}

const gallery = Gallery(document.querySelector('.gallery'));
