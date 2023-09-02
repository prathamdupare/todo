console.log("I'm making a To-Do App");
import { Createhome } from "./modules/home";
import { addTaskDiv, addBarToMainframe } from "./modules/mainframe";
import { addCategories, createCategories, addBarToCategories, addNewCategories } from "./modules/categories";
import { createDialogBox } from "./modules/categories";
import { addNameCategory } from "./modules/categories";
import { addTaskSpace } from "./modules/categories";

document.addEventListener('DOMContentLoaded', () => {
    // Call functions to set up the app
    Createhome();
    createCategories();
    addBarToCategories();
    addBarToMainframe();

    // Add event listener for the category button
    const categoryButton = document.querySelector('.add-button');
    categoryButton.addEventListener('click', createDialogBox);

    // Select all elements with the class .new-category and add click event listeners
    const newCategories = document.querySelectorAll('.new-category');
    newCategories.forEach(newCategory => {
        newCategory.addEventListener('click', () => {
            // Get the text content of the clicked element (category name)
            const categoryName = newCategory.innerText;
            
            // Call the function to add a task space with the category name
            addTaskSpace(categoryName);
        });
    });
});