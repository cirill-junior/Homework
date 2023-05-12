// Taken out uptop for global scope view and ease of function managment 

const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');


        //Validation of input
function addTask(e) {
    e.preventDefault();
    const newTask = taskInput.value;

        /* if (taskInput.value === '') {
        alert(`Please add an new task`);
        return; changing this to try getting the value of input*/
        if (newTask === ``) {
            alert(`Please add an new task`);
            return; 
        }
     
        //Create new task and add it to the list
    const li = document.createElement(`li`);
    li.appendChild(document.createTextNode(newTask));

        //creating the button for the task
    const button = createButton(`remove-item btn-link text-red`)
    li.appendChild(button);
    
    taskList.appendChild(li);

    function createButton(classes) {
        const button = document.createElement(`button`);
        button.className = classes;
        const icon = createIcon(`fa-solid fa-check fa-sm`);
        button.appendChild(icon);
        return button;
    }
        // creating the icon for checkmark
    function createIcon(classes) {
        const icon = document.createElement(`i`);
        icon.className = classes;
        return icon;
    }

    function removeItem(e) {
        console.log(e.target);
    }
    
}
function removeItem(e){
    if (e.target.parentElement.classList.contains(`remove-item`)) {
        e.target.parentElement.parentElement.remove();
       
    }
}
        // Event listener
taskForm.addEventListener(`submit`, addTask);
taskList.addEventListener(`click`, removeItem);
taskList.addEventListener(`click`, removeItem);

