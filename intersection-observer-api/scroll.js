const text = document.querySelector('.text');
console.log(terms);
const button = document.querySelector('.accept');

function observationCallBack(payback) {
  if (payback[0].intersectionRatio === 1) {
    button.disabled = false;
    ob.unobserve(text.lastElementChild);
  }
}
// IntersectionObserver API - takes a root (parent) and threshold ratio
const ob = new IntersectionObserver(observationCallBack, {
  root: text,
  threshold: 1,
});

ob.observe(text.lastElementChild);