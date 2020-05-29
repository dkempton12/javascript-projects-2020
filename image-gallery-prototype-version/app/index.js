function Gallery(gallery) {
	if (!gallery) {
		throw new Error(`No gallery present`);
	}

	// select elements
	this.images = Array.from(gallery.querySelectorAll('img'));
	this.modal = document.querySelector('.modal');
	this.previousButton = this.modal.querySelector('.previous');
	this.nextButton = this.modal.querySelector('.next');

	this.images.forEach((image) =>
		image.addEventListener('click', function(event) {
			this.showImage(event.target);
		})
	);

	this.images.forEach((image) =>
		image.addEventListener('keyup', function(event) {
			if (event.key === 'Enter') {
				this.showImage(event.target);
			}
		})
	);

	this.modal.addEventListener('click', closeModalWhenClickIsOutsideInnerModal);
}

Gallery.prototype.openModal = function() {
	if (this.modal.matches('.open')) {
		console.info('Modal is already open!');
	}
	this.modal.classList.add('open');
	window.addEventListener('keyup', handleKeyUps);
	this.nextButton.addEventListener('click', showNextImage);
	this.previousButton.addEventListener('click', showPreviousImage);
};

Gallery.prototype.closeModal = function() {
	this.modal.classList.remove('open');
	window.removeEventListener('keyup', handleKeyUps);
	this.nextButton.removeEventListener('click', showNextImage);
	this.previousButton.removeEventListener('click', showPreviousImage);
};

Gallery.prototype.closeModalWhenClickIsOutsideInnerModal = function(event) {
	if (event.target === event.currentTarget) {
		this.closeModal();
	}
};

Gallery.prototype.handleKeyUps = function(event) {
	if (event.key === 'Escape') {
		return this.closeModal();
	}
	if (event.key === 'ArrowRight') {
		return this.showNextImage();
	}

	if (event.key === 'ArrowLeft') {
		return this.showPreviousImage();
	}
};

Gallery.prototype.showNextImage = function() {
	this.showImage(currentImage.nextElementSibling || gallery.firstElementChild);
};

Gallery.prototype.showPreviousImage = function() {
	this.showImage(currentImage.previousElementSibling || gallery.lastElementChild);
};

Gallery.prototype.showImage = function(element) {
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
	this.openModal();
};

const gallery = new Gallery(document.querySelector('.gallery'));
