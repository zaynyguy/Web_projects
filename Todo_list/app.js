const taskInput = document.getElementById('input');
const addBtn = document.getElementById('add');
const taskList = document.getElementById('task_list')


function addTask () {
    const taskText = taskInput.value.trim();
    const task = document.createElement('li');
    task.innerHTML = `<p>${taskText}</p>`;
    task.classList.add('task')

    const doneBtn = document.createElement('button');
    doneBtn.textContent = '🏁'
    doneBtn.classList.add('done_btn')

    doneBtn.addEventListener('click', (e) => {
        task.style.color = 'gray'
        task.style.textDecoration = 'line-through'
    })

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '❌'
    deleteBtn.classList.add('delete_btn')

    deleteBtn.addEventListener('click', (e) => {
        task.remove()
    })

    task.appendChild(doneBtn)
    task.appendChild(deleteBtn)
    taskList.appendChild(task)
} 
    addBtn.addEventListener('click', (e) => {addTask()});
    taskInput.addEventListener('keydown', (e) => {
        if (e.key == 'Enter'){
            addTask()
        }
    });

    console.log('i work')

