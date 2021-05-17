'use strict'
const form = document.getElementById('signin__form');
const signin = document.querySelector('.signin');
const welcome = document.getElementById('welcome');
const id = document.getElementById('user_id');

if(localStorage.id) {
  signin.classList.remove('signin_active');
  welcome.classList.add('welcome_active');
  id.innerText = localStorage.id;
} else {
  signin.classList.add('signin_active');
}


form.addEventListener('submit', (e) => {
  e.preventDefault();
  let formData = new FormData(form);

  let xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
  xhr.addEventListener('readystatechange', function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      if(data.success == true) {
        signin.classList.remove('signin_active');
        welcome.classList.add('welcome_active');
        localStorage.id = data.user_id;
        id.innerText = data.user_id;
      } else {
        alert('Неверный логин/пароль');
      }
    }
  })
  xhr.send(formData)
})