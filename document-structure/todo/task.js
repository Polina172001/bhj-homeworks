'use strict'

const input = document.getElementById('task__input');
const taskList = document.getElementById('tasks__list');
const btn = document.getElementById('tasks__add');

function htmlAdd () {
  taskList.insertAdjacentHTML('beforeend', `
  <div class="task">
    <div class="task__title"> ${input.value} </div>
    <a href="#" class="task__remove">&times;</a>
  </div>`)

  Array.from(taskList.querySelectorAll('.task__remove')).forEach(item => {
    item.addEventListener('click', () => {
      item.closest('.task').remove();
    })
  }) 
  
  input.value = '';
}


input.addEventListener('keydown', (e) => {
  if (input.value != "" && e.code === 'Enter') {
    htmlAdd(input.value);
  }  
})

btn.addEventListener('click', () => {
  if (input.value != '') {
    htmlAdd(input.value);
  }
})
