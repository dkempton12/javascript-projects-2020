function Gallery(gallery) {
	if (!gallery) {
		throw new Error(`No gallery present`);
	}
}

const gallery = Gallery(document.querySelector('.gallery'));
