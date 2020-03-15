const text = document.querySelector('.text');

const button = document.querySelector('.accept');

// Displays button if intersectionRatio is equal to 1
function observationCallBack(payback) {
	if (payback[0].intersectionRatio === 1) {
		button.disabled = false;
		ob.unobserve(text.lastElementChild);
	}
}
// IntersectionObserver API - takes a root (parent) and threshold ratio
const ob = new IntersectionObserver(observationCallBack, {
	root: text,
	threshold: 1 // Threshold of 1 refers to when the element is 100% visible on the page
});

ob.observe(text.lastElementChild); // Watching for last element in the text div
