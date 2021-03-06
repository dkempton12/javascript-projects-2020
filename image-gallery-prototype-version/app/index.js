function Gallery(gallery) {
	if (!gallery) {
		throw new Error(`No gallery present`);
	}

	// select elements
	this.gallery = gallery;
	this.images = Array.from(this.gallery.querySelectorAll('img'));
	this.modal = document.querySelector('.modal');
	this.previousButton = this.modal.querySelector('.previous');
	this.nextButton = this.modal.querySelector('.next');

	// bind our methods to the Gallery when we need them
	this.showNextImage = this.showNextImage.bind(this);
	this.showPreviousImage = this.showPreviousImage.bind(this);
	this.handleKeyUps = this.handleKeyUps.bind(this);
	this.closeModalWhenClickIsOutsideInnerModal = this.closeModalWhenClickIsOutsideInnerModal.bind(this);

	this.images.forEach((image) =>
		image.addEventListener('click', (event) => {
			this.showImage(event.target);
		})
	);

	this.images.forEach((image) =>
		image.addEventListener('keyup', (event) => {
			if (event.key === 'Enter') {
				this.showImage(event.target);
			}
		})
	);

	this.modal.addEventListener('click', this.closeModalWhenClickIsOutsideInnerModal);
}

Gallery.prototype.openModal = function() {
	if (this.modal.matches('.open')) {
		console.info('Modal is already open!');
	}
	this.modal.classList.add('open');
	window.addEventListener('keyup', this.handleKeyUps);
	this.nextButton.addEventListener('click', this.showNextImage);
	this.previousButton.addEventListener('click', this.showPreviousImage);
};

Gallery.prototype.closeModal = function() {
	this.modal.classList.remove('open');
	window.removeEventListener('keyup', this.handleKeyUps);
	this.nextButton.removeEventListener('click', this.showNextImage);
	this.previousButton.removeEventListener('click', this.showPreviousImage);
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
	this.showImage(this.currentImage.nextElementSibling || this.gallery.firstElementChild);
};

Gallery.prototype.showPreviousImage = function() {
	this.showImage(this.currentImage.previousElementSibling || this.gallery.lastElementChild);
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
	this.currentImage = element;
	// run openModal
	this.openModal();
};

const gallery = new Gallery(document.querySelector('.gallery'));
