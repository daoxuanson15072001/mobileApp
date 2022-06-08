const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  alert('New TODO button clicked!')
}
function addTodo1(){
  let x = Number(itemCountSpan.innerHTML);
  x++;
  itemCountSpan.innerHTML = x
}
function addTodo2(){
  let y = Number(uncheckedCountSpan.innerHTML);
  y++;
  uncheckedCountSpan.innerHTML = y
}
function deleteTodo(){
  itemCountSpan.innerHTML = 0
  uncheckedCountSpan.innerHTML = 0
}