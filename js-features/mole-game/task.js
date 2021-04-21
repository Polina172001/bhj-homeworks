'use strict'

const holes = document.querySelectorAll('.hole');
let dead = document.getElementById('dead');
let lost = document.getElementById('lost');

function refresh() {
  dead.textContent = 0;
  lost.textContent = 0;
}

for (let i = 0; i < holes.length; i++) {

  holes[i].onclick = function () {

    if (this.classList.contains( 'hole_has-mole' )) {
      dead.textContent++;
    } else {
      lost.textContent++;
    }
    

    if (dead.textContent == 10) {
      alert('Вы победили!');
      refresh();
    }
    if (lost.textContent == 5) {
      alert('Вы проиграли');
      refresh();
    }
  }
}