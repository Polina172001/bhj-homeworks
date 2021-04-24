'use strict'

let sliderPrev = document.querySelector('.slider__arrow_prev');
let sliderNext = document.querySelector('.slider__arrow_next');
let sliderItem = Array.from(document.querySelectorAll('.slider__item'));
let current = 0;

function delSlide() {
  sliderItem[current].classList.remove("slider__item_active");
}

function show() {
  sliderItem[current].classList.add("slider__item_active");
}

sliderPrev.onclick = function() {
  delSlide();
  current--;
  if (current < 0 ) {
    current = sliderItem.length - 1;
  }
  show();
};

sliderNext.onclick = function() {
  delSlide();
  current++;
  if(current > sliderItem.length -1) {
    current = 0
  }
  show();
};