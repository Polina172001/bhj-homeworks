'use strict'

const changeTime = setInterval (function() {

  const time = document.getElementById("timer");
  timer.textContent -=1;

  if (timer.textContent == 0) {
    clearInterval(changeTime);
    alert("Вы победили в конкурсе!");
  }
  
}, 1000)