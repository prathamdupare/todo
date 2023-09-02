const mainframe = document.querySelector('.mainframe');

export function addTaskDiv() {
    const mainframe = document.querySelector('.mainframe');

    // Prompt the user for the task name
    const taskName = prompt('Enter the name of the task:');

    if (taskName) { // Check if the user provided a name (not null or empty)
        const newDiv = document.createElement('div');
        newDiv.classList.add('tasks');
        newDiv.textContent = taskName;
        mainframe.appendChild(newDiv);
    } else {
        // Handle the case where the user didn't provide a task name (cancelled the prompt).
        alert('Task name cannot be empty.');
    }
}



export function addBarToMainframe() {
    const mainframe = document.querySelector('.mainframe');
    const addBar = document.createElement('div')
    addBar.classList.add('main-bar');

    mainframe.appendChild(addBar);

    const barHeading = document.createElement('div');
    barHeading.classList.add('bar-heading');
    barHeading.innerText = "ADD TASK";

    addBar.appendChild(barHeading);

    const addButton = document.createElement('button');
    addButton.classList.add('add-button');
    addButton.classList.add('task-button');
    addButton.innerText = "+";

    addBar.appendChild(addButton);

    const taskSpace = document.createElement('div');
    taskSpace.classList.add('task-space');
    mainframe.appendChild(taskSpace);

}