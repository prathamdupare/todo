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




let lists = [];
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
    saveListsToLocalStorage()

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
    uniqueSpace.setAttribute('id', `${categoryname}`);
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
    const matchingCategoryIndex = lists.findIndex(category => category.name === categoryname);

    if (matchingCategoryIndex !== -1) {
        // The category exists in the lists array
        const matchingCategory = lists[matchingCategoryIndex];

        if (!matchingCategory.tasks) {
            matchingCategory.tasks = []; // Initialize tasks array if it doesn't exist
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

                // Add the new task to the matching category's tasks array
                matchingCategory.tasks.push(newTask);

                // Log the updated lists array to the console
                console.log(lists);
                saveListsToLocalStorage()

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
        });
    } else {
        // The category doesn't exist in the lists array, so create a new one
        const newCategory = {
            id: categoryname,
            name: categoryname,
            tasks: [],
        };
        lists.push(newCategory);

        // Add an event listener to the "Add" button
        addButton.addEventListener('click', () => {
            const taskNameValue = taskNameInput.value.trim();

            if (taskNameValue) {
                // Create a new task object
                const newTask = {
                    id: Date.now(), // You can generate a unique ID for each task
                    text: taskNameValue,
                };

                // Add the new task to the new category's tasks array
                newCategory.tasks.push(newTask);

                // Log the updated lists array to the console
                console.log(lists);
                saveListsToLocalStorage()

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
        });
    }
}



export function saveListsToLocalStorage() {
    try {
        // Load the existing data from localStorage
        const existingListsJSON = localStorage.getItem('lists');
        const existingLists = existingListsJSON ? JSON.parse(existingListsJSON) : [];

        // Update the existing data with the new data
        existingLists.forEach(existingItem => {
            const matchingNewCategory = lists.find(newItem => newItem.id === existingItem.id);
            if (matchingNewCategory) {
                // Update properties of existing items here if needed
                // For example, you can update the 'name' property:
                existingItem.name = matchingNewCategory.name;
            }
        });

        // Merge the existing data with the new data (items that didn't exist before)
        const updatedLists = [...existingLists, ...lists.filter(newItem => !existingLists.some(existingItem => existingItem.id === newItem.id))];

        // Convert the updated 'lists' array to a JSON string
        const updatedListsJSON = JSON.stringify(updatedLists);

        // Save the JSON string to localStorage
        localStorage.setItem('lists', updatedListsJSON);

        console.log('Saved lists to localStorage:', updatedLists);
    } catch (error) {
        console.error('Error saving lists to localStorage:', error);
    }
}


// Modify your lists variable to initially be an empty array


// Define a function to load data from local storage
export function loadListsFromLocalStorage() {
    try {
        // Retrieve data from local storage
        const existingListsJSON = localStorage.getItem('lists');
        
        if (existingListsJSON) {
            // Parse the JSON data and update the 'lists' array
            lists = JSON.parse(existingListsJSON);

            // Iterate through each category and populate the task lists
            lists.forEach(category => {
                if (!category.tasks) {
                    category.tasks = []; // Initialize tasks array if it doesn't exist
                }
            });
        }
    } catch (error) {
        console.error('Error loading lists from localStorage:', error);
    }
}

// Call loadListsFromLocalStorage when your app initializes to load saved data
// loadListsFromLocalStorage();

// ... Rest of your code ...

// Call saveListsToLocalStorage whenever you make changes to the 'lists' array
// This function remains the same as you've defined it
// For example, after adding a new category or task:
// addNewCategories('New Category Name');
// saveListsToLocalStorage();
