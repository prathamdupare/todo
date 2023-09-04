console.log("I'm making a To-Do App");
import { Createhome } from "./modules/home";
import { addTaskDiv, addBarToMainframe } from "./modules/mainframe";
import { addCategories, createCategories, addBarToCategories, addNewCategories } from "./modules/categories";
import { createDialogBox } from "./modules/categories";
import { addNameCategory } from "./modules/categories";
import { addTaskSpace } from "./modules/categories";


import { addCategoriesForExistingItems } from "./modules/categories";

Createhome();
createCategories();
addBarToCategories();
addBarToMainframe();
addCategoriesForExistingItems();

// Add event listener for the category button
const categoryButton = document.querySelector('.add-button');
categoryButton.addEventListener('click', createDialogBox);




function reCheck() {
  document.addEventListener('DOMContentLoaded', function () {
    const uniqueCategories = document.querySelectorAll('.new-category');
    uniqueCategories.forEach(function (uniqueCategory) {
      const uniqueCategoryId = uniqueCategory.id;
      uniqueCategory.addEventListener('click', function () {
        addTaskSpace(uniqueCategoryId);
      });
    });
  });
}





