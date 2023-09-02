// let dialogDiv; 

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
}



export function createDialogBox() {
    const body = document.body;
    let dialogDiv = document.querySelector('.dialog-div');

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


    }

    dialogDiv.classList.remove('hidden');

}


export function addNameCategory() {
    const nameInput = document.querySelector('.name-input');
    const categoryName = nameInput.value;

    addNewCategories(categoryName);
    nameInput.value = "";

    // Hide the dialog box
    const dialogDiv = document.querySelector('.dialog-div');
    dialogDiv.classList.add('hidden');
}

export function addNewCategories(name) {
    const categories = document.querySelector('.categories');
    const newCategory = document.createElement('div');
    newCategory.innerText = name;
    newCategory.classList.add('new-category');
    newCategory.classList.add(name);
    createDialogBox();

    categories.appendChild(newCategory);

    const deleteButton = document.createElement('button');
    deleteButton.innerText = "X";
    deleteButton.classList.add('delete-button');
    newCategory.appendChild(deleteButton);

}

export function addTaskSpace(categoryname) {
    const taskSpace = document.querySelector('.task-space');

    const uniqueSpace = document.createElement('div');
    uniqueSpace.classList.add('unique-space');
    uniqueSpace.classList.add(categoryname);
    taskSpace.appendChild(uniqueSpace);

    const categoryHeading = document.createElement('div');
    categoryHeading.classList.add('category-heading');
    categoryHeading.innerText = categoryname;

    uniqueSpace.appendChild(categoryHeading);

}


