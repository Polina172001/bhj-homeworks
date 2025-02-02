'use strict'
const items = document.getElementById('items');
const loader = document.getElementById('loader');

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send();

xhr.addEventListener('readystatechange', function() {
  if (xhr.readyState == xhr.DONE && xhr.status == 200) {
    loader.classList.remove('loader_active');
    let data = JSON.parse(xhr.responseText).response.Valute;
    for (let key in data) {
      items.insertAdjacentHTML('afterbegin', `        
        <div class="item__code">
          ${data[key].CharCode}
        </div>
        <div class="item__value">
          ${data[key].Value}
        </div>
        <div class="item__currency">
          руб.
        </div>`)
    }
  }
});

