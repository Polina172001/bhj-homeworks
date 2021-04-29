'use strict'

let tab = Array.from(document.querySelectorAll('.tab'));
let tabContent = Array.from(document.querySelectorAll('.tab__content'));

for (let i = 0; i < tab.length; i++) {
  tab[i].addEventListener('click', function() {
    
    document.querySelector('.tab_active').classList.remove('tab_active');
    document.querySelector('.tab__content_active').classList.remove('tab__content_active');

    tab[i].classList.add('tab_active');
    tabContent[i].classList.add('tab__content_active');
  })
}


