function acceptTerms() {
	const text = document.querySelector('.text');
	if (!text) {
		return;
	}
	const acceptButton = document.querySelector('.accept');

	// callback
	function observeCallback(payback) {
		if (payback[0].intersectionRatio === 1) {
			acceptButton.disabled = false;
		} else {
			acceptButton.disabled = true;
		}
	}

	const intersection = new IntersectionObserver(observeCallback, {
		root: text,
		threshold: 1
	});

	intersection.observe(text.lastElementChild);
}

acceptTerms();
