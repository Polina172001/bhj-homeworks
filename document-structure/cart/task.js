'use strict'

const product = document.getElementsByClassName('product');

const del = Array.from(document.querySelectorAll('.product__quantity-control_dec'));
const inc = Array.from(document.querySelectorAll('.product__quantity-control_inc'));
const value = document.getElementsByClassName('product__quantity-value');

const add = document.getElementsByClassName('product__add');
const cart = document.querySelector('.cart__products');

for (let i = 0; i < value.length; i++) {

  del[i].addEventListener('click', () => {
    if (value[i].textContent > 1) {
      value[i].textContent--;
    } else {
      value[i].textContent = 1;
    }
  });

  inc[i].addEventListener('click', () => {
    value[i].textContent++;
  });
  
  add[i].addEventListener('click', () => {
    for (let i = 0; i < cart.children.length; i++) {
      if(cart.children[i].dataset.id === product[i].dataset.id) {
        return cart.children[i].querySelector('.cart__product-count').textContent = Number(value[i].textContent);
      }
    }
    cart.insertAdjacentHTML('afterbegin', `
    <div class="cart__product" data-id="${product[i].dataset.id}"> 
      <img class="cart__product-image" src="${product[i].querySelector('img').getAttribute('src')}"> 
      <div class="cart__product-count">${value[i].textContent}</div> 
    </div>`)
  })



}




