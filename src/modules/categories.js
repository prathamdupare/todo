const listContainer = document.querySelector('category-container');



class Categories {
    constructor() {
        this.names = [];
    }

    addCategory(name) {
        this.names.push(name);
    }

    removeCategory(name) {
        const index = this.names.indexOf(name);
        if (index !== -1) {
            this.names.splice(index, 1);
        }
    }

    getAllCategories() {
        return this.names;
    }
}



function setTabbedLayout() {

    // Select the buttons and divs
    const buttons = document.querySelectorAll('.new-category');
    const divs = document.querySelectorAll('.unique-space');

    // Add a click event listener to each button
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonId = button.id;

            // Hide all divs by adding the .hidden class
            divs.forEach(div => {
                div.classList.add('hidden');
            });

            // Remove the .hidden class from the corresponding div based on buttonId
            const correspondingDiv = document.querySelector(`.unique-space#${buttonId}`);
            if (correspondingDiv) {
                correspondingDiv.classList.remove('hidden');
                // console.log("setTabbedLayout acttvated");
            }

        });
    });

}

export function createCategories() {
    const sidebar = document.querySelector('.sidebar');

    const categories = document.createElement('div');
    categories.classList.add('categories');

    sidebar.appendChild(categories)

    // return createCategories;

}


export function addBarToCategories() {
    const categories = document.querySelector('.categories');

    const addBar = document.createElement('div')
    addBar.classList.add('categorybar');

    categories.appendChild(addBar);

    const barHeading = document.createElement('div');
    barHeading.classList.add('bar-heading');
    barHeading.innerText = "Categories";

    addBar.appendChild(barHeading);

    const addButton = document.createElement('button');
    addButton.classList.add('add-button');
    addButton.innerText = "+";

    addBar.appendChild(addButton);

    addButton.addEventListener('click', createDialogBox);
    console.log("fes")
}



export function createDialogBox() {

    const body = document.body;
    let dialogDiv = document.querySelector('.dialog-div');
    // dialogDiv.classList.add('hidden');
    console.log("Button clicked")
    if (!dialogDiv) {
        dialogDiv = document.createElement('div');
        dialogDiv.classList.add('dialog-div');

        const promptContainer = document.createElement('div');
        promptContainer.classList.add('prompt-container');
        dialogDiv.append(promptContainer);

        const dialogHead = document.createElement('div');
        dialogHead.classList.add('dialog-head')
        dialogHead.innerText = 'Create New Category'
        promptContainer.appendChild(dialogHead);

        const promptText = document.createElement('div');
        promptText.classList.add('prompt-text');
        promptText.innerText = 'Enter Name'
        promptContainer.appendChild(promptText);

        const nameInput = document.createElement('input');
        nameInput.classList.add('name-input')
        promptContainer.appendChild(nameInput);

        const submitButton = document.createElement('button');
        submitButton.classList.add('submit-button');
        submitButton.innerText = '+'
        promptContainer.appendChild(submitButton);

        // const submitButton = document.querySelector('.submit-button');
        submitButton.addEventListener('click', addNameCategory);

        body.appendChild(dialogDiv);
        console.log("Created Dialog box");
    } else {
        dialogDiv.classList.remove('hidden');
    }



}


export function addNameCategory() {
    const nameInput = document.querySelector('.name-input');
    const categoryName = nameInput.value;

    addNewCategories(categoryName);
    nameInput.value = "";

    // Hide the dialog box
    const dialogDiv = document.querySelector('.dialog-div');
    dialogDiv.classList.add('hidden');

    // dialogDiv.classList.remove('hidden');
    const uniqueCategories = document.querySelectorAll('.new-category');
    uniqueCategories.forEach(function (uniqueCategory) {
        const uniqueCategoryId = uniqueCategory.id;
        uniqueCategory.addEventListener('click', function () {
            addTaskSpace(uniqueCategoryId);
            setTabbedLayout();
        });
    });


}





let lists = [
    {
        id: "Notes",
        name: "Notes",
        tasks: [
            { id: 1, text: "Go to Library" },
            { id: 2, text: "Make Notes" },
            { id: 3, text: "Make To-Do App" }
        ]
    },
    {
        id: "Daily",
        name: "Daily",
        tasks: [
            { id: 3, text: "Task 3" },
            { id: 4, text: "Task 4" }
        ]
    }
];

// localStorage.setItem(lists);

// Save the 'lists' data to localStorage


// Call loadListsFromLocalStorage when your app initializes to load saved data
// loadListsFromLocalStorage();

// Whenever you make changes to the 'lists' array, call saveListsToLocalStorage to save them
// For example, after adding a new category or task:
// addNewCategories('New Category Name');
// saveListsToLocalStorage();



export function addNewCategories(name) {
    const validClassName = name.replace(/\s+/g, '-'); // Replace spaces with hyphens
    const newCategoryObject = { id: validClassName, name: name };
    lists.push(newCategoryObject);

    const categoriesContainer = document.querySelector('.categories');
    let categoryList = categoriesContainer.querySelector('.category-container');

    if (!categoryList) {
        categoryList = document.createElement('ul');
        categoryList.classList.add('category-container');
        categoryList.setAttribute('data-lists', '');
        categoriesContainer.appendChild(categoryList);
    }

    const newCategory = document.createElement('li');
    newCategory.innerText = name;
    newCategory.classList.add('new-category');
    newCategory.setAttribute('id', validClassName);

    createDialogBox();

    const deleteButton = document.createElement('button');
    deleteButton.innerText = "X";
    deleteButton.classList.add('delete-button');
    newCategory.appendChild(deleteButton);

    categoryList.appendChild(newCategory);

    console.log(lists);

    // saveListsToLocalStorage();
}

export function addCategoriesForExistingItems() {
    lists.forEach((item) => {
        addNewCategories(item.name);
    });
}





export function render() {
    clearElement(listContainer)
    lists.forEach(list => {
        const listElement = document.createElement('li');
        listElement.classList.add('new-category');
        // listElement.classList.add('hidden');
        listElement.innerText = list;
        listContainer.appendChild(listElement);
    })
}

function clearElement(element) {

}

export function addTaskSpace(categoryname) {
    const taskSpace = document.querySelector('.task-space');

    // Check if a task space with the same category name already exists
    const existingTaskSpace = taskSpace.querySelector(`.unique-space.${categoryname}`);
    if (existingTaskSpace) {
        return; // Exit the function if it already exists
    }

    const uniqueSpace = document.createElement('div');
    uniqueSpace.classList.add('unique-space');
    uniqueSpace.classList.add('hidden');
    uniqueSpace.setAttribute('id', `${categoryname}`)
    uniqueSpace.classList.add(categoryname);
    taskSpace.appendChild(uniqueSpace);

    const categoryHeading = document.createElement('div');
    categoryHeading.classList.add('category-heading');
    categoryHeading.innerText = categoryname;

    uniqueSpace.appendChild(categoryHeading);

    const addButton = document.createElement('button');
    const buttonDiv = document.createElement('div');
    buttonDiv.classList.add('button-div');
    addButton.classList.add('add-button');
    addButton.classList.add('space-button');
    addButton.innerText = "+";

    const taskName = document.createElement('div');
    const taskNameInput = document.createElement('input');
    taskNameInput.classList.add('task-input');
    taskName.appendChild(taskNameInput);

    uniqueSpace.appendChild(buttonDiv);

    buttonDiv.appendChild(taskName);
    buttonDiv.appendChild(addButton);

    const taskList = document.createElement('ul');
    taskList.classList.add('tasks-list');
    taskList.classList.add(`${categoryname}`);
    uniqueSpace.appendChild(taskList);

    // Find the category in the lists array based on categoryname
    const matchingCategory = lists.find(category => category.name === categoryname);

    if (matchingCategory && matchingCategory.tasks) {
        // Create radio buttons for each task in the matchingCategory's tasks array
        matchingCategory.tasks.forEach(task => {
            const listItem = document.createElement('li');
            listItem.classList.add('task-item');
            const checkBox = document.createElement('input');
            checkBox.type = 'checkbox';
            checkBox.name = 'task-options';
            listItem.appendChild(checkBox);

            const label = document.createElement('label');
            label.classList.add('label-for-task');
            label.textContent = task.text;
            listItem.appendChild(label);

            taskList.appendChild(listItem);

            const deleteButton = document.createElement('button');
            deleteButton.innerText = "X";
            deleteButton.classList.add('task-delete-button');
            listItem.appendChild(deleteButton);
        });
    }



    // Add an event listener to the "Add" button
    addButton.addEventListener('click', () => {
        const taskNameValue = taskNameInput.value.trim();

        if (taskNameValue) {
            // Create a new task object
            const newTask = {
                id: Date.now(), // You can generate a unique ID for each task
                text: taskNameValue,
            };

            // Find the corresponding category in the lists array
            const matchingCategory = lists.find(category => category.name === categoryname);

            if (matchingCategory) {
                // Add the new task to the matching category's tasks array
                matchingCategory.tasks.push(newTask);

                // Log the updated lists array to the console
                console.log(lists);

                // Save the updated lists array to localStorage or perform any other necessary data storage operation
                // saveListsToLocalStorage();

                // Create a new task item in the task list
                const listItem = document.createElement('li');
                listItem.classList.add('task-item');
                const checkBox = document.createElement('input');
                checkBox.type = 'checkbox';
                checkBox.name = 'task-options';
                listItem.appendChild(checkBox);

                const label = document.createElement('label');
                label.classList.add('label-for-task');
                label.textContent = newTask.text;
                listItem.appendChild(label);

                taskList.appendChild(listItem);

                const deleteButton = document.createElement('button');
                deleteButton.innerText = "X";
                deleteButton.classList.add('task-delete-button');
                listItem.appendChild(deleteButton);

                // Clear the input field
                taskNameInput.value = '';
            }
        }
    });
}
// Usage example:
// addTaskSpace('YourCategoryName');


