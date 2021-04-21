'use strict'

const image = document.getElementById("cookie");
const count = document.getElementById("clicker__counter");


function changeSizes() {

  if (this.width == 200) {
    this.width = 100;
  } else {
    this.width = 200;
  }
  count.textContent++;
}

image.onclick = changeSizes;