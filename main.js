// init
let list = document.querySelector('#my-todo')
const todos = ['Hit the gym', 'Read a book', 'Buy eggs', 'Organize office', 'Pay bills']

for (let todo of todos) {
  addItem(todo)
}

function addItem(text) {
  let newItem = document.createElement('li')
  newItem.innerHTML = `
    <label for="todo">${text}</label>
    <i class="delete fa fa-trash"></i>
  `
  list.appendChild(newItem)
}

//當 click 事件發生時，就取出 input#newTodo 裡的值，
//並且呼叫 addItem()，把值塞進 template 裡，加入到 ul 裡去。

const addBtn = document.querySelector('#addBtn')

addBtn.addEventListener('click', function () {
  console.log(this)
  console.log(event.target)
  let inputValue = document.querySelector('#newTodo').value
  // 如果 input 還沒有輸入內容，不會產生新的 todo
  if (inputValue.length >= 1) {
    addItem(inputValue)
  }
})

//// Delete and Cheack
list.addEventListener('click', function (event) {
  console.log(this)
  console.log(event.target)
  //this這次監聽器綁定的對象是 ul#my-todo(list)

  ////加上if確保滑鼠點擊的元素是刪除按鈕
  if (event.target.classList.contains('delete')) {
    let li = event.target.parentElement
    li.remove()
  }
  ////如果觸發事件的物件的tag name是LABEL，就套用.checked樣式。
  else if (event.target.tagName === 'LABEL') {
    event.target.classList.toggle('checked')
  }
})
////當我們使用tagName來查詢標籤名稱時，回傳值會一律大寫，所以要寫成 LABEL

// 當使用者在 input#newTodo 裡按下 Enter 鍵時，一樣可以新增 todo (提示：使用 keypress 事件，並且用 event.keyCode == 13 來鎖定 Enter 鍵)

