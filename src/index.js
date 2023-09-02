console.log("I'm making a To-Do App");
import { Createhome } from "./modules/home";
import { addTaskDiv, addBarToMainframe } from "./modules/mainframe";
import { addCategories, createCategories, addBarToCategories, addNewCategories } from "./modules/categories";
import { createDialogBox } from "./modules/categories";

Createhome();
createCategories();
addBarToCategories();
addBarToMainframe()

// addNewCategories();


const categoryButton = document.querySelector('.add-button');
categoryButton.addEventListener('click', createDialogBox);