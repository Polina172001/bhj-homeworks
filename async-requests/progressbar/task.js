'use strict'

const progress = document.getElementById( 'progress' );
const form = document.getElementById('form');
const btn = document.getElementById('send');


const info = (event) => {
  event.preventDefault();
  let formData = new FormData(form);
  let xhr = new XMLHttpRequest();
  xhr.upload.addEventListener('progress', event => progress.value = event.loaded)
  xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
  xhr.send(formData);
}

btn.onclick = info;






