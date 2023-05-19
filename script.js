// Taken out uptop for global scope view and ease of function managment 

const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const clearBtn = document.getElementById('clear');
const taskFilter = document.getElementById('filter')


        //Validation of input
function onAddItemSubmit(e) {
    e.preventDefault();
    const newTask = taskInput.value;

        if (newTask === ``) {
            alert(`Please add an new task`);
            return; 
        }
         
        //Create new task and add it to the list
    createNewTask(newTask);
        // Clear input field 
    taskInput.value = '';

    taskInput.focus();

    }

        //Create new task and add it to the list
function createNewTask(newTask) {
    const li = document.createElement(`li`);
    li.appendChild(document.createTextNode(newTask));

        //creating the button for the task
    const button = createButton(`remove-item btn-link text-red`);
    li.appendChild(button);
        //add li to DOM
    taskList.appendChild(li);
    resetUI();
}

function addItemToDOM(task) {
    
}

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

function removeItem(e){
    if (e.target.parentElement.classList.contains(`remove-item`)) {
        if (confirm('Are you sure?')) {
            e.target.parentElement.parentElement.remove();

            resetUI();
        }
       
    }
    
}
        // Clear all button
function clearItems() {
    taskList.innerHTML = '';
    resetUI();
}

function filterItems(e) {
    const tasks = taskList.querySelectorAll('li');
    const text = e.target.value.toLowerCase();
  
    tasks.forEach((task) => {
      const itemName = task.firstChild.textContent.toLowerCase();
  
      if (itemName.indexOf(text) != -1) {
        task.style.display = 'flex';
      } else {
        task.style.display = 'none';
      }
    });
  }

function resetUI() {
    const tasks = taskList.querySelectorAll('li');

    if (tasks.length === 0) {
       clearBtn.style.display = `none`; 
       taskFilter.style.display = 'none';
    } else {
       clearBtn.style.display = 'block'; 
       taskFilter.style.display = 'block'; 
    }
}

        // Event listeners
taskForm.addEventListener(`submit`, onAddItemSubmit);
taskList.addEventListener(`click`, removeItem);
clearBtn.addEventListener(`click`, clearItems);
taskFilter.addEventListener(`input`, filterItems);

resetUI();
