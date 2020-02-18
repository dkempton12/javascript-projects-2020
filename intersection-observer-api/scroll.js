const text = document.querySelector('.text');
console.log(terms);
const acceptButton = document.querySelector('.accept');

function observationCallBack(payback) {
  if (payback[0].intersectionRatio === 1) {
    acceptButton.disabled = false;
    observationCallBack.unobserve(terms.lastElementChild);
  }
}