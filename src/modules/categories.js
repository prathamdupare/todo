const listContainer = document.querySelector("category-container");

function setTabbedLayout() {
  const buttons = document.querySelectorAll(".new-category");
  const divs = document.querySelectorAll(".unique-space");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const buttonId = button.id;

      divs.forEach((div) => {
        div.classList.add("hidden");
      });

      const correspondingDiv = document.querySelector(
        `.unique-space#${buttonId}`
      );
      if (correspondingDiv) {
        correspondingDiv.classList.remove("hidden");
      }
    });
  });
}

export function createCategories() {
  const sidebar = document.querySelector(".sidebar");

  const categories = document.createElement("div");
  categories.classList.add("categories");

  sidebar.appendChild(categories);
}

export function addBarToCategories() {
  const categories = document.querySelector(".categories");

  const addBar = document.createElement("div");
  addBar.classList.add("categorybar");

  categories.appendChild(addBar);

  const barHeading = document.createElement("div");
  barHeading.classList.add("bar-heading");
  barHeading.innerText = "Categories";

  addBar.appendChild(barHeading);

  const addButton = document.createElement("button");
  addButton.classList.add("add-button");
  addButton.innerText = "+";

  addBar.appendChild(addButton);

  addButton.addEventListener("click", createDialogBox);
  console.log("fes");
}

export function createDialogBox() {
  const body = document.body;
  let dialogDiv = document.querySelector(".dialog-div");

  console.log("Button clicked");
  if (!dialogDiv) {
    dialogDiv = document.createElement("div");
    dialogDiv.classList.add("dialog-div");

    const promptContainer = document.createElement("div");
    promptContainer.classList.add("prompt-container");
    dialogDiv.append(promptContainer);

    const dialogHead = document.createElement("div");
    dialogHead.classList.add("dialog-head");
    dialogHead.innerText = "Create New Category";
    promptContainer.appendChild(dialogHead);

    const promptText = document.createElement("div");
    promptText.classList.add("prompt-text");
    promptText.innerText = "Enter Name";
    promptContainer.appendChild(promptText);

    const nameInput = document.createElement("input");
    nameInput.classList.add("name-input");
    promptContainer.appendChild(nameInput);

    const submitButton = document.createElement("button");
    submitButton.classList.add("submit-button");
    submitButton.innerText = "+";
    promptContainer.appendChild(submitButton);

    submitButton.addEventListener("click", addNameCategory);

    body.appendChild(dialogDiv);
    console.log("Created Dialog box");
  } else {
    dialogDiv.classList.remove("hidden");
  }
}

export function addNameCategory() {
  const nameInput = document.querySelector(".name-input");
  const categoryName = nameInput.value;

  addNewCategories(categoryName);
  nameInput.value = "";

  const dialogDiv = document.querySelector(".dialog-div");
  dialogDiv.classList.add("hidden");

  const uniqueCategories = document.querySelectorAll(".new-category");
  uniqueCategories.forEach(function (uniqueCategory) {
    const uniqueCategoryId = uniqueCategory.id;
    uniqueCategory.addEventListener("click", function () {
      addTaskSpace(uniqueCategoryId);
      setTabbedLayout();
    });
  });
}

let lists = [
  {
    name: "Work",
    tasks: ["Make Spreadsheet", "Presentation", "The ODIN Project"],
  },
  {
    name: "Personal",
    tasks: ["Go to Gym", "Task B", "Task C"],
  },
];

export function addNewCategories(name) {
  const validClassName = name.replace(/\s+/g, "-");
  const newCategoryObject = { id: validClassName, name: name };
  lists.push(newCategoryObject);

  const categoriesContainer = document.querySelector(".categories");
  let categoryList = categoriesContainer.querySelector(".category-container");

  if (!categoryList) {
    categoryList = document.createElement("ul");
    categoryList.classList.add("category-container");
    categoryList.setAttribute("data-lists", "");
    categoriesContainer.appendChild(categoryList);
  }

  const newCategory = document.createElement("li");
  newCategory.innerText = name;
  newCategory.classList.add("new-category");
  newCategory.setAttribute("id", validClassName);

  createDialogBox();

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "X";
  deleteButton.classList.add("delete-button");
  newCategory.appendChild(deleteButton);

  categoryList.appendChild(newCategory);

  saveListsToLocalStorage();
}

export function addCategoriesForExistingItems() {
  lists.forEach((item) => {
    addNewCategories(item.name);
    addTasksForCategory(item.name, item.tasks);
  });
}

function addTasksForCategory(categoryName, tasks) {
  const taskSpace = document.querySelector(".task-space");

  const existingTaskSpace = taskSpace.querySelector(
    `.unique-space.${categoryName}`
  );
  if (!existingTaskSpace) {
    addTaskSpace(categoryName);
  }

  const taskList = taskSpace.querySelector(
    `.unique-space.${categoryName} .tasks-list`
  );
  if (taskList) {
    tasks.forEach((task) => {
      const listItem = document.createElement("li");
      listItem.classList.add("task-item");
      const checkBox = document.createElement("input");
      checkBox.type = "checkbox";
      checkBox.name = "task-options";
      listItem.appendChild(checkBox);

      const label = document.createElement("label");
      label.classList.add("label-for-task");
      label.textContent = task;
      listItem.appendChild(label);

      taskList.appendChild(listItem);

      const deleteButton = document.createElement("button");
      deleteButton.innerText = "X";
      deleteButton.classList.add("task-delete-button");
      listItem.appendChild(deleteButton);
    });
  }
}

export function render() {
  clearElement(listContainer);
  lists.forEach((list) => {
    const listElement = document.createElement("li");
    listElement.classList.add("new-category");
    listElement.innerText = list;
    listContainer.appendChild(listElement);
  });
}

function clearElement(element) {}

export function addTaskSpace(categoryname) {
  const taskSpace = document.querySelector(".task-space");

  const existingTaskSpace = taskSpace.querySelector(
    `.unique-space.${categoryname}`
  );
  if (existingTaskSpace) {
    return;
  }

  const uniqueSpace = document.createElement("div");
  uniqueSpace.classList.add("unique-space");
  uniqueSpace.classList.add("hidden");
  uniqueSpace.setAttribute("id", `${categoryname}`);
  uniqueSpace.classList.add(categoryname);
  taskSpace.appendChild(uniqueSpace);

  const categoryHeading = document.createElement("div");
  categoryHeading.classList.add("category-heading");
  categoryHeading.innerText = categoryname;

  uniqueSpace.appendChild(categoryHeading);

  const addButton = document.createElement("button");
  const buttonDiv = document.createElement("div");
  buttonDiv.classList.add("button-div");
  addButton.classList.add("add-button");
  addButton.classList.add("space-button");
  addButton.innerText = "+";

  const taskName = document.createElement("div");
  const taskNameInput = document.createElement("input");
  taskNameInput.classList.add("task-input");
  taskNameInput.placeholder = "Add a Task..";
  taskName.appendChild(taskNameInput);

  uniqueSpace.appendChild(buttonDiv);

  buttonDiv.appendChild(taskName);
  buttonDiv.appendChild(addButton);

  const taskList = document.createElement("ul");
  taskList.classList.add("tasks-list");
  taskList.classList.add(`${categoryname}`);
  uniqueSpace.appendChild(taskList);

  const matchingCategoryIndex = lists.findIndex(
    (category) => category.name === categoryname
  );

  if (matchingCategoryIndex !== -1) {
    const matchingCategory = lists[matchingCategoryIndex];

    if (!matchingCategory.tasks) {
      matchingCategory.tasks = [];
    }

    addButton.addEventListener("click", () => {
      const taskNameValue = taskNameInput.value.trim();

      if (taskNameValue) {
        const newTask = {
          id: Date.now(),
          text: taskNameValue,
        };

        matchingCategory.tasks.push(newTask);
        saveListsToLocalStorage();

        const listItem = document.createElement("li");
        listItem.classList.add("task-item");
        const checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.name = "task-options";
        listItem.appendChild(checkBox);

        const label = document.createElement("label");
        label.classList.add("label-for-task");
        label.textContent = newTask.text;
        listItem.appendChild(label);

        taskList.appendChild(listItem);

        const deleteButton = document.createElement("button");
        deleteButton.innerText = "X";
        deleteButton.classList.add("task-delete-button");
        listItem.appendChild(deleteButton);

        taskNameInput.value = "";
      }

      saveListsToLocalStorage();
    });
  } else {
    const newCategory = {
      id: categoryname,
      name: categoryname,
      tasks: [],
    };
    lists.push(newCategory);

    addButton.addEventListener("click", () => {
      const taskNameValue = taskNameInput.value.trim();

      if (taskNameValue) {
        const newTask = {
          id: Date.now(),
          text: taskNameValue,
        };

        newCategory.tasks.push(newTask);

        const listItem = document.createElement("li");
        listItem.classList.add("task-item");
        const checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.name = "task-options";
        listItem.appendChild(checkBox);

        const label = document.createElement("label");
        label.classList.add("label-for-task");
        label.textContent = newTask.text;
        listItem.appendChild(label);

        taskList.appendChild(listItem);

        const deleteButton = document.createElement("button");
        deleteButton.innerText = "X";
        deleteButton.classList.add("task-delete-button");
        listItem.appendChild(deleteButton);

        taskNameInput.value = "";
      }
    });
  }
  saveListsToLocalStorage();
}

export function saveListsToLocalStorage() {
  try {
    const existingListsJSON = localStorage.getItem("lists");
    const existingLists = existingListsJSON
      ? JSON.parse(existingListsJSON)
      : [];

    existingLists.forEach((existingItem) => {
      const matchingNewCategory = lists.find(
        (newItem) => newItem.id === existingItem.id
      );
      if (matchingNewCategory) {
        existingItem.name = matchingNewCategory.name;
      }
    });

    const updatedLists = [
      ...existingLists,
      ...lists.filter(
        (newItem) =>
          !existingLists.some((existingItem) => existingItem.id === newItem.id)
      ),
    ];

    const updatedListsJSON = JSON.stringify(updatedLists);

    localStorage.setItem("lists", updatedListsJSON);

    console.log("Saved lists to localStorage:", updatedLists);
  } catch (error) {
    console.error("Error saving lists to localStorage:", error);
  }
}

export function loadListsFromLocalStorage() {
  try {
    const existingListsJSON = localStorage.getItem("lists");

    if (existingListsJSON) {
      lists = JSON.parse(existingListsJSON);

      console.log("Loaded lists from local storage:", lists);
    }
  } catch (error) {
    console.error("Error loading lists from localStorage:", error);
  }
}
