function Gallery(gallery) {
	if (!gallery) {
		throw new Error(`No gallery present`);
	}

	// select elements
	this.images = Array.from(gallery.querySelectorAll('img'));
	this.modal = document.querySelector('.modal');
	this.previousButton = this.modal.querySelector('.previous');
	this.nextButton = this.modal.querySelector('.next');

	function openModal() {
		if (this.modal.matches('.open')) {
			console.info('Modal is already open!');
		}
		this.modal.classList.add('open');
		window.addEventListener('keyup', handleKeyUps);
		this.nextButton.addEventListener('click', showNextImage);
		this.previousButton.addEventListener('click', showPreviousImage);
	}

	function closeModal() {
		this.modal.classList.remove('open');
		window.removeEventListener('keyup', handleKeyUps);
		this.nextButton.removeEventListener('click', showNextImage);
		this.previousButton.removeEventListener('click', showPreviousImage);
	}

	function closeModalWhenClickIsOutsideInnerModal(event) {
		if (event.target === event.currentTarget) {
			closeModal();
		}
	}

	function handleKeyUps(event) {
		if (event.key === 'Escape') {
			return closeModal();
		}
		if (event.key === 'ArrowRight') {
			return showNextImage();
		}

		if (event.key === 'ArrowLeft') {
			return showPreviousImage();
		}
	}

	function showNextImage() {
		showImage(currentImage.nextElementSibling || gallery.firstElementChild);
	}

	function showPreviousImage() {
		showImage(currentImage.previousElementSibling || gallery.lastElementChild);
	}

	function showImage(element) {
		// show image data in the modal
		// img
		this.modal.querySelector('img').src = element.src;
		// img title
		this.modal.querySelector('h2').textContent = element.title;
		// img caption
		this.modal.querySelector('p').textContent = element.dataset.description;

		// set currentImage variable equal to img element being passed in
		currentImage = element;
		// run openModal
		openModal();
	}

	this.images.forEach((image) =>
		image.addEventListener('click', function(event) {
			showImage(event.target);
		})
	);

	this.images.forEach((image) =>
		image.addEventListener('keyup', function(event) {
			if (event.key === 'Enter') {
				showImage(event.target);
			}
		})
	);

	this.modal.addEventListener('click', closeModalWhenClickIsOutsideInnerModal);
}

const gallery = Gallery(document.querySelector('.gallery'));
