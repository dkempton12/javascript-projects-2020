const text = document.querySelector('.text');

const button = document.querySelector('.accept');

// Displays button if intersectionRatio is equal to 1
function observationCallBack(payback) {
	if (payback[0].intersectionRatio === 1) {
		button.disabled = false;
		// ob.unobserve(text.lastElementChild);
	} else {
		button.disabled = true;
	}
}
// IntersectionObserver API - takes a root (parent) and threshold ratio
const ob = new IntersectionObserver(observationCallBack, {
	root: text,
	threshold: 1 // Threshold of 1 refers to when the element is 100% visible on the page
});

ob.observe(text.lastElementChild); // Watching for last element in the text div

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
}
