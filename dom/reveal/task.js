'use strict'
const reveal = Array.from(document.getElementsByClassName('reveal'));

let isInViewport = function() {
  reveal.forEach((item) => {
    const viewportHeight = window.innerHeight;
    const element = item.getBoundingClientRect();
    if (element.top < viewportHeight || element.bottom < viewportHeight ) {
      item.classList.add('reveal_active');
    } else {
      item.classList.remove('reveal_active');
    };
  })
}

window.addEventListener('scroll', isInViewport)
