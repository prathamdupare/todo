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
}

function addCategories() {
    const categories = document.querySelector('.categories');
    const newCategory = document.createElement('div');
    
    

}
