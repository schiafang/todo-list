const todos = ['Hit the gym', 'Read a book', 'Buy eggs', 'Organize office', 'Pay bills']
const addBtn = document.querySelector('#addBtn')
const input = document.querySelector('#newTodo')

let todoList = document.querySelector('#my-todo')
let doneList = document.querySelector('#my-done')
let trashList = document.querySelector('#my-trash')
let cleanTrash = document.querySelector('#clean-trash')

for (let todo of todos) {
  addTodoItem(todo)
}

///----- Listener -----///

// 監聽add按鈕
addBtn.addEventListener('click', function () {
  let inputValue = document.querySelector('#newTodo').value
  if (inputValue.length >= 1) {
    addTodoItem(inputValue)
    input.value = ""
  }
})

// 監聽鍵盤input上按下enter輸入值
input.addEventListener('keypress', function () {
  let inputValue = document.querySelector('#newTodo').value
  if (event.keyCode === 13) {
    addTodoItem(inputValue)
    input.value = ""
  }
})

// 監聽todoList上操作
todoList.addEventListener('click', function (event) {
  let li = event.target.parentElement
  let text = event.target.parentElement.children[0].innerText

  if (event.target.classList.contains('delete')) {
    li.remove()
    addTrashItem(text)
  } else if (event.target.classList.contains('check')) {
    li.remove()
    addDoneItem(text)
  }
})

// 監聽doneList上操作
doneList.addEventListener('click', function (event) {
  let li = event.target.parentElement
  let text = event.target.parentElement.children[0].innerText

  if (event.target.classList.contains('delete')) {
    li.remove()
    addTrashItem(text)
  } else if (event.target.classList.contains('undo')) {
    li.remove()
    addTodoItem(text)
  }
})

// 監聽trashList上操作
trashList.addEventListener('click', function (event) {
  let li = event.target.parentElement
  let text = event.target.parentElement.children[0].innerText

  if (event.target.classList.contains('delete')) {
    li.remove()
  } else if (event.target.classList.contains('undo')) {
    li.remove()
    addTodoItem(text)
  }
})

// 監聽clean-trash上操作
cleanTrash.addEventListener('click', function (event) {
  trashList.innerHTML = `
      <ul id="my-trash" class="list-unstyled">
        <!-- display addTrashItem -->
      </ul>`
})

///----- Function -----///
function addTodoItem(text) {
  let todoItem = document.createElement('li')
  todoItem.innerHTML = `
    <label for="todo">${text}</label>
    <i class="check fa fa-check-square-o" aria-hidden="true"></i>
    <i class="delete fa fa-trash-o" aria-hidden="true"></i>
  `
  todoList.appendChild(todoItem)
}

function addDoneItem(text) {
  let doneItem = document.createElement('li')
  doneItem.innerHTML = `
    <label for="done">${text}</label>
    <i class="undo fa fa-undo" aria-hidden="true"></i>
    <i class="delete fa fa-trash-o" aria-hidden="true"></i>
  `
  doneList.appendChild(doneItem)
}

function addTrashItem(text) {
  let trashItem = document.createElement('li')
  trashItem.innerHTML = `
    <label for="trash">${text}</label>
    <i class="undo fa fa-undo" aria-hidden="true"></i>
    <i class="delete fa fa-trash-o" aria-hidden="true"></i>
  `
  trashList.appendChild(trashItem)
}
