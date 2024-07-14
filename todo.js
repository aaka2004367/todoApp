
let todoList = [
  {
    items: 'Go to college' ,
    dueDate: '04/10/2023'
  } ,

  {
    items: 'Buy milk' ,
    dueDate: '10/06/2023'
  }
];
displayItems();


function addTodo(){
  let inputElement = document.querySelector('#todo-input');
  let dateElement = document.querySelector('#todo-date');
  let todoItem = inputElement.value;
  let dateItem = dateElement.value;
  todoList.push({items: todoItem , dueDate: dateItem});
  inputElement.value = '';
  dateElement.value = '';

  displayItems();
}


function displayItems(){
  let containerElement = document.querySelector('.todo-container');
  let newHtml = '';
  for(let i=0; i<todoList.length; i++){
    let {items , dueDate} = todoList[i];
    newHtml += `
      <span>${items}</span>
      <span>${dueDate}</span>
      <button class="btn-delete" onclick="todoList.splice(${i} , 1); displayItems();">Delete</button>
    `;
  }
  containerElement.innerHTML = newHtml;
}