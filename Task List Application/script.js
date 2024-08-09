// script.js

// Get references to the DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        // Create a new list item (li) element
        const newTask = document.createElement('li');

        // Add the task text
        newTask.textContent = taskText;

        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Remove';
        deleteButton.classList.add('delete-button');
        
        // Append the delete button to the new task
        newTask.appendChild(deleteButton);

        // Add the new task to the task list
        taskList.appendChild(newTask);

        // Clear the input field
        taskInput.value = '';
    }
}

// Function to remove a task
function removeTask(event) {
    if (event.target.classList.contains('delete-button')) {
        const taskToDelete = event.target.parentElement;
        taskList.removeChild(taskToDelete);
    }
}

// Add event listeners
addTaskButton.addEventListener('click', addTask);
taskList.addEventListener('click', removeTask);

// Optional: Allow pressing Enter to add a task
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
