// DOM Selector
const todoIn = document.querySelector('.todo-input');
const todoAdd = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');




// Functions
const addItems = (e) => {
    e.preventDefault();
    // create a div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todoDiv');
    //  create li
    const todoItems = document.createElement('li');
    todoItems.innerText = todoIn.value;
    todoItems.classList.add('items');

    saveTodos(todoIn.value);
    // create delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>'
    deleteButton.classList.add('delete-btn');
    todoItems.appendChild(deleteButton)
    todoDiv.appendChild(todoItems);
    // append list
    todoList.appendChild(todoDiv);
    todoIn.value = "";



}
const removeItems = (e) => {
    let item = e.target
    if (item.classList[0] === 'delete-btn') {
        item.classList.add('animation');
        // item.addEventListener('transitionend', function() {
        item.parentElement.remove();
        // });
    }
}
// save to local storage
const saveTodos = (todo) => {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos))
};
// ADD event listener
todoAdd.addEventListener('click', addItems);
todoList.addEventListener('click', removeItems);


