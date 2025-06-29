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


// add todo methods
function addTodoItem(text) {
    const li = document.createElement('li');
    li.className = "flex justify-between items-center bg-gray-200 px-4 py-2 rounded";

    const span = document.createElement('span');
    span.textContent = text;

    const buttons = document.createElement('div');
    buttons.className = "space-x-2";

    //   edit btn
    const editButton = document.createElement('button');
    editButton.textContent = "Edit";
    editButton.className = "text-yellow-600 hover:underline cursor-pointer";
    editButton.onclick = () => editTodoItem(span, editButton);

    //   delete btn
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "text-red-600 hover:underline cursor-pointer";
    deleteBtn.onclick = () => li.remove();

    buttons.appendChild(editButton);
    buttons.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(buttons);

    todoList.appendChild(li);
}
