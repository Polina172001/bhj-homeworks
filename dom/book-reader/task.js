'use strict'

const fontLink = Array.from(document.getElementsByClassName('font-size'));
const book = Array.from(document.getElementsByClassName('book'));
const color = Array.from(document.getElementsByClassName('color'));


fontLink.forEach((item) => {

  item.addEventListener('click', (e) => {  
    e.preventDefault();
    document.querySelector('.font-size_active').classList.remove('font-size_active');
    item.classList.add('font-size_active');

    for (let i = 0; i < book.length; i++) {
      book[i].classList.remove('book_fs-big');
      book[i].classList.remove('book_fs-small');

      if (item.dataset.size === "small") {
        book[i].classList.add('book_fs-small');
      } else if (item.dataset.size === "big") {
        book[i].classList.add('book_fs-big');
      } 
    }
  })
})


color.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.color_active').classList.remove('color_active');
    item.classList.add('color_active');
    
    for (let i = 0; i < book.length; i++) {

      book[i].classList.remove('book_color-gray');
      book[i].classList.remove('book_color-whitesmoke');      
      book[i].classList.remove('book_color-black');

      if (item.dataset.textColor === "black") {
        book[i].classList.add('book_color-black');
      } else if (item.dataset.textColor === "gray") {
        book[i].classList.add('book_color-gray');
      } else {
        book[i].classList.add('book_color-whitesmoke');
      }
    }
  })
})

color.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.color_active').classList.remove('color_active');
    item.classList.add('color_active');
    
    for (let i = 0; i < book.length; i++) {
      book[i].classList.remove('bg_color_black');
      book[i].classList.remove('bg_color_gray');      
      book[i].classList.remove('bg_color_white');

      if (item.dataset.bgColor === "black") {
        book[i].classList.add('bg_color_black');
      } else if (item.dataset.bgColor === "gray") {
        book[i].classList.add('bg_color_gray');
      } else {
        book[i].classList.add('bg_color_white');
      }

    }
  })
})



