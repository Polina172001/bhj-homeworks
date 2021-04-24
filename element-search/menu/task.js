'use strict'

let menuLink = Array.from(document.querySelectorAll(".menu__link"));
console.log(menuLink);

for (let i = 0; i < menuLink.length; i++) {
  menuLink[i].onclick = function() {

    let nextMenuSub = menuLink[i].nextElementSibling;

    if (nextMenuSub) {
      if (nextMenuSub.classList.contains("menu_active")) {
        nextMenuSub.classList.remove("menu_active");
        
      } else {
        nextMenuSub.classList.add('menu_active');
      }
      return false;
    }

    // if (menuLink[i].closest('menu_sub')) {
    //   return false
    // } 

  }
}

