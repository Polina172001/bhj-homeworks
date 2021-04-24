'use strict'
let modalMain = document.getElementById('modal_main');
let close = document.getElementsByClassName('modal__close');
let modalSuccess = document.getElementById('modal_success');
let [btn] = document.getElementsByClassName('btn_danger');

modalMain.classList.add('modal_active');
close = Array.from(close);

close.forEach((item) => {
  item.onclick = () => {
    item.closest('.modal').remove('modal_active');
  }
})

btn.onclick = () => {
  modalMain.classList.remove('modal_active');
  modalSuccess.classList.add('modal_active');
}


