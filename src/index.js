console.log("I'm making a To-Do App");
import { Createhome } from "./modules/home";
import { addTaskDiv, addBarToMainframe } from "./modules/mainframe";
import { addCategories, createCategories, addBarToCategories, addNewCategories } from "./modules/categories";
import { createDialogBox } from "./modules/categories";
import { addNameCategory } from "./modules/categories";
import { addTaskSpace } from "./modules/categories";
import { loadListsFromLocalStorage } from "./modules/categories";
import { addDefaultCategories } from "./modules/categories";



import { addCategoriesForExistingItems } from "./modules/categories";
import { addDefaultTasksToCategories } from "./modules/categories";


// Clear all data from local storage

localStorage.clear();

// loadListsFromLocalStorage();

// addDefaultCategories();



Createhome();
createCategories();
addBarToCategories();
addBarToMainframe();

addCategoriesForExistingItems();
// addDefaultTasksToCategories()

document.addEventListener('DOMContentLoaded', function () {
  const uniqueCategories = document.querySelectorAll('.new-category');
  uniqueCategories.forEach(function (uniqueCategory) {
    const uniqueCategoryId = uniqueCategory.id;
    uniqueCategory.addEventListener('click', function () {
      addTaskSpace(uniqueCategoryId);
    });
  });
});












