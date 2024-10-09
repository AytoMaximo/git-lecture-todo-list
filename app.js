document.getElementById('add-btn').addEventListener('click', function() {
    const input = document.getElementById('todo-input');
    const taskText = input.value.trim();

    if (taskText !== '') {
        const li = document.createElement('li');
        li.textContent = taskText;
        document.getElementById('todo-list').appendChild(li);
        input.value = '';
    }
});