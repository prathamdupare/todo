console.log("I'm making a To-Do App")
import { Createhome } from "./modules/home"
import { createCategories } from "./modules/categories";
import { addBarToCategories } from "./modules/categories";
import { addTaskDiv } from "./modules/mainframe";
import { addBarToMainframe } from "./modules/mainframe";



Createhome();
createCategories();

addBarToCategories();

addBarToMainframe()

// addTaskDiv("ds");