const todoForm = document.getElementById('todo-form');
const addInput = document.getElementById('add-input');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', addTodoItem);

function createElement(tag, props, ...children) {
    let element = document.createElement(tag);

    Object.keys(props).forEach(key => element[key] = props[key]);

    children.forEach(child => {
        if (typeof child === 'string') {
            child = document.createTextNode(child);
        }

        element.appendChild(child);
    });

    return element;
}

function createTodoItem(title) {
    let checkbox = createElement('input', { type: 'checkbox', className: 'todo-list__checkbox', onchange: toggleTodoItem });
    let label = createElement('label', { className: 'todo-list__title' }, title);
    let editInput = createElement('input', { type: 'text', className: 'todo-list__textfield' });
    let editButton = createElement('button', { className: 'todo-list__edit', onclick: editTodoItem }, 'Изменить');
    let deleteButton = createElement('button', { className: 'todo-list__delete', onclick: deleteTodoItem }, 'Удалить');
    let listItem = createElement('li', { className: 'todo-list__item' }, checkbox, label, editInput, editButton, deleteButton);

    return listItem;
}

function addTodoItem(event) {
    event.preventDefault();

    let title = addInput.value.trim();

    if (title === '') {
        return alert('Необходимо ввести название задачи.');
    }

    if(title > 0){
        let nId = 0;
    }

    let todoItem = createTodoItem(title);

    todoList.appendChild(todoItem);
    addInput.value = '';
}

function toggleTodoItem() {
    let listItem = this.parentNode;

    listItem.classList.toggle('completed');
}

function editTodoItem() {
    let listItem = this.parentNode;
    let title = listItem.querySelector('.todo-list__title');
    let editInput = listItem.querySelector('.todo-list__textfield');
    let isEditing = listItem.classList.contains('editing');

    if (isEditing) {
        title.textContent = editInput.value;
        this.textContent = 'Изменить';
    } else {
        editInput.value = title.textContent;
        this.textContent = 'Сохранить';
    }

    listItem.classList.toggle('editing');
}

function deleteTodoItem() {
    let listItem = this.parentNode;
    
    todoList.removeChild(listItem);
}

