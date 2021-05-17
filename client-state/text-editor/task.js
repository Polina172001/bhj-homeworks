'use strict'

const text = document.getElementById('editor');
const btn = document.getElementById('btn-delete');

text.value = localStorage.getItem('saved'); //сохр в textarea

text.addEventListener('input', () => {
  localStorage.setItem('saved', text.value)  //сохр в localStorage
});

btn.addEventListener('click', () => {
  text.value = '';
  localStorage.clear('saved'); //удаление
})


