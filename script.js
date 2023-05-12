// Taken out uptop for global scope view and ease of function managment 

const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const tasklist = document.getElementById('task-list');

function addTask(e) {
    e.preventDefault();

    if (taskInput.value === '') {
        alert(`Please add an new task`);
        return;
    }
   // console.log(`success`); works for now
}

// Event listener

taskForm.addEventListener(`submit`, addTask);

