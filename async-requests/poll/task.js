'use strict'

const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send();

xhr.onreadystatechange = function() {
  if (xhr.readyState == xhr.DONE && xhr.status == 200) {
    let response = JSON.parse(xhr.responseText);

    let title = response.data.title;
    let answers = response.data.answers;

    pollTitle.insertAdjacentText('afterbegin', `${title}`);

    for (let i = 0; i < answers.length; i++) {
      pollAnswers.insertAdjacentHTML('afterend', `
      <button class="poll__answer">
        ${answers[i]}
      </button>`);
    }

    let button = Array.from(document.getElementsByClassName('poll__answer'));
    button.forEach(item => {
      item.addEventListener('click', function() {
        alert('Спасибо, ваш голос засчитан!');
      })
    });  
  }
}