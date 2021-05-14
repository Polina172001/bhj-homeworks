'use strict'


const links = Array.from(document.getElementsByClassName('has-tooltip'));

links.forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault();
    let text = item.getAttribute('title');
    let position = item.getBoundingClientRect();
    if (item.querySelector('.tooltip')) {
      item.querySelector('.tooltip').classList.add("hidden");
    } else {
      item.insertAdjacentHTML('afterbegin', `<div class="tooltip tooltip_active" 
      style="left: ${position.left + "px"}; top: ${position.top + 20 + "px"}"> ${text} </div>`);
    }    
    
  });
})


// let element = document.createElement('div');
// element.setAttribute('class', 'tooltip');
// document.body.appendChild(element);

// document.body.addEventListener('click', (e) => {

//   let target = e.target;
//   if (target.className != 'has-tooltip') return 
//   e.preventDefault();
//   element.innerText = target.getAttribute('title');
//   element.classList.toggle('.tooltip_active')


//   target.addEventListener('blur', () => {
//     element.classList.remove('.tooltip_active');
//   })
// })

