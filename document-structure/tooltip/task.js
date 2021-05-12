'use strict'

const links = Array.from(document.getElementsByClassName('has-tooltip'));

links.forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault();
    let text = item.getAttribute('title');
    let position = item.getBoundingClientRect();
    if (item.querySelector('.tooltip')) {
      item.removeChild(item.querySelector('.tooltip'));
    } else {
      item.insertAdjacentHTML('afterbegin', `<div class="tooltip tooltip_active" 
      style="left: ${position.left + "px"}; top: ${position.top + 20 + "px"}"> ${text} </div>`);
    }
  });

  item.addEventListener('blur', () => {
    item.removeChild(item.querySelector('.tooltip_active'));
  })
})