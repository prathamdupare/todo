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



export function createDialogBox() {
    const body = document.body;
    const dialogDiv = document.createElement('div');
    dialogDiv.classList.add('dialog-div');

    // dialogDiv.classList.add('hidden');
    body.appendChild(dialogDiv);

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
}

export function addNewCategories() {
    const categories = document.querySelector('.categories');
    const newCategory = document.createElement('div');
    newCategory.innerText = 'New Category';
    newCategory.classList.add('new-category');
    createDialogBox();

    categories.appendChild(newCategory);

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