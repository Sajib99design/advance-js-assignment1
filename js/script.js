const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

//  To-Do
addButton.addEventListener('click', () => {
    const text = input.value.trim();
    if (text !== "") {
        addTodoItem(text);
        input.value = "";
    }
});