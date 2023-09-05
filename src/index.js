console.log("I'm making a To-Do App");
import { Createhome } from "./modules/home";
import { addTaskDiv, addBarToMainframe } from "./modules/mainframe";
import { addCategories, createCategories, addBarToCategories, addNewCategories } from "./modules/categories";
import { createDialogBox } from "./modules/categories";
import { addNameCategory } from "./modules/categories";
import { addTaskSpace } from "./modules/categories";



import { addCategoriesForExistingItems } from "./modules/categories";
// Clear all data from local storage




Createhome();
createCategories();
addBarToCategories();
addBarToMainframe();

addCategoriesForExistingItems();

document.addEventListener('DOMContentLoaded', function () {
  const uniqueCategories = document.querySelectorAll('.new-category');
  uniqueCategories.forEach(function (uniqueCategory) {
    const uniqueCategoryId = uniqueCategory.id;
    uniqueCategory.addEventListener('click', function () {
      addTaskSpace(uniqueCategoryId);
    });
  });
});







// const buttons = document.querySelectorAll('.new-category');
// const divs = document.querySelectorAll('.unique-space');

// // Add a click event listener to each button
// buttons.forEach(button => {
//   button.addEventListener('click', () => {
//     const buttonId = button.id;

//     // Hide all divs by adding the .hidden class
//     divs.forEach(div => {
//       div.classList.add('hidden');
//     });

//     // Remove the .hidden class from the corresponding div based on buttonId
//     const correspondingDiv = document.querySelector(`.unique-space#${buttonId}`);
//     if (correspondingDiv) {
//       correspondingDiv.classList.remove('hidden');
//     }
//   });
// });







