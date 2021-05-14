'use strict'

const product = document.getElementsByClassName('product');

const del = Array.from(document.querySelectorAll('.product__quantity-control_dec'));
const inc = Array.from(document.querySelectorAll('.product__quantity-control_inc'));
const value = document.getElementsByClassName('product__quantity-value');

const add = Array.from(document.getElementsByClassName('product__add'));
const carts = document.querySelector('.cart__products');

for (let i = 0; i < value.length; i++) {

  del[i].addEventListener('click', () => {
    if (value[i].textContent > 1) {
      value[i].textContent--;
    } 
  });

  inc[i].addEventListener('click', () => {
    value[i].textContent++;
  });
}  


add.forEach(item => {
  item.addEventListener('click', () => {
    const cartSrc = item.closest('.product').querySelector('img').getAttribute('src');
    const cartId = item.closest('.product').dataset.id;
    const cartValue = item.closest('.product').querySelector('.product__quantity-value').textContent;
    const cart = Array.from(document.getElementsByClassName('cart__product'));

    let findCart = cart.find(item => item.dataset.id === cartId);
    console.log(findCart)
    if (findCart) {
      let changeCart = +findCart.querySelector('.cart__product-count').textContent;
      changeCart += +cartValue;
      findCart.querySelector('.cart__product-count').textContent = changeCart;
    } else {
      carts.insertAdjacentHTML('afterbegin', `
      <div class="cart__product" data-id="${cartId}"> 
        <img class="cart__product-image" src="${cartSrc}"> 
        <div class="cart__product-count">${cartValue}</div> 
      </div>`)
    }

  })
})









