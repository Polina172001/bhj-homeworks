'use strict'

const id = document.querySelector('.modal');
const close = document.querySelector('.modal__close');

let cookie = document.cookie.split(';').find( el => el == 'modal=close');

if (!cookie) {
  id.classList.add('modal_active');
}

close.addEventListener('click', () => {
  id.classList.remove('modal_active');
  document.cookie = 'modal=close';
})








