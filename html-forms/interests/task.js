'use strict'

const checks = Array.from(document.querySelectorAll(".interest__check"));

checks.forEach((item) => {
  const parentCheck = item.closest('.interest');
  
  if (parentCheck.querySelector('.interests')) {
    item.addEventListener('change', () => {
      const childCheck = Array.from(parentCheck.querySelectorAll('.interests .interest__check'));
      console.log(childCheck)
      if (item.checked) {
        childCheck.forEach ( item => item.checked = true)
      } else {
        childCheck.forEach ( item => item.checked = false)
      }
    })
  }
})
