'use strict';

let fhrases = ['Кто тут?',
'Не пишите больше сюда!',
'У нас нет времени вам отвечать',
'Где ваша совесть',
'До свидания!'];

const inputMsg = document.getElementById('chat-widget__input');
const chatMsg = document.getElementById('chat-widget__messages');

const chat = document.querySelector('.chat-widget');
chat.addEventListener('click', () => {
  chat.classList.add('chat-widget_active');
});

let time = new Date();
let timeStr = time.toLocaleTimeString();

inputMsg.addEventListener('keydown', e => {
  if(e.code === 'Enter' && inputMsg.value != '') {
    chatMsg.innerHTML += `
    <div class="message message_client">
      <div class="message__time">${timeStr}</div>
      <div class="message__text">${inputMsg.value}</div>
    </div>

    <div class="message">
      <div class="message__time">${timeStr}</div>
      <div class="message__text">
      ${fhrases[ Math.floor( Math.random() * fhrases.length )]}</div>
    </div>
  `
  inputMsg.value = '';
  }
})
