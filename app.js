document.getElementById('add-btn').addEventListener('click', function() {
    const input = document.getElementById('todo-input');
    const taskText = input.value.trim();

    if (taskText !== '') {
        const li = document.createElement('li');
        li.textContent = taskText;

        // Создаем кнопку удаления
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Удалить';
        deleteBtn.addEventListener('click', function() {
            li.remove(); // Удаляем задачу
        });
        li.appendChild(deleteBtn);
        
        document.getElementById('todo-list').appendChild(li);
        input.value = '';
    }
});