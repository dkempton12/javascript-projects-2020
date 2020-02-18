const text = document.querySelector('.text');
console.log(terms);
const acceptButton = document.querySelector('.accept');

function observationCallBack(payback) {
  if (payback[0].intersectionRatio === 1) {
    acceptButton.disabled = false;
    observationCallBack.unobserve(text.lastElementChild);
  }
}
// IntersectionObserver API - takes a root (parent) and threshold ratio
const ob = new IntersectionObserver(observationCallBack, {
  root: text,
  threshold: 1,
});