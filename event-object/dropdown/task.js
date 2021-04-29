'use strict'

let dropdownValue = document.querySelector('.dropdown__value');
let dropdownList = document.querySelector('.dropdown__list');
let dropdownItem = document.querySelectorAll('.dropdown__item');

function show() {
  if (dropdownList.classList.contains('dropdown__list_active')) {
    dropdownList.classList.remove('dropdown__list_active');
  } else {
    dropdownList.classList.add('dropdown__list_active');
  }
}
dropdownValue.addEventListener('click', show);

for (let item of dropdownItem) {
  item.addEventListener('click', function(event) {
    if (dropdownList.classList.contains('dropdown__list_active')) {
      event.preventDefault();
      document.querySelector('.dropdown__value').textContent = item.textContent;
    }
    show;
  })
}

