(function(){

    function createTodoItem(title){
        const checkbox = document.createElement('input');
        checkbox.type = 'checbo'
    }

    function addTodoItem(event){
        event.preventDefault();

        if(addInput.value === "") return alert('Необходимо ввести название задачи');

        const todoItem = createTodoItem(addInput.value);
        todoList.appendChild(todoItem);
        addInput.value = '';
    }

    const todoForm = document.getElementById('todo-form'),
          addInput = document.getElementById('add-input');
          todoList = document.getElementById('todo-list');
          todoItems = document.querySelector('.todo-list__item');

    
    todoForm.addEventListener('submit', addTodoItem);



})()