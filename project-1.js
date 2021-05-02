//all the id and class names here
let form = document.querySelector("#task_form");
let taskInput = document.querySelector("#new_task");
let filter = document.querySelector("#task_filter");
let taskList = document.querySelector("ul");
let clearBtn = document.querySelector("#clear_task_btn");

//Event listener

form.addEventListener("submit", addTask);
taskList.addEventListener("click", removeTask);
clearBtn.addEventListener("click", clearTask);
filter.addEventListener("keyup", filterTask);
document.addEventListener("DOMContentLoaded", getTask);

//Define Function

function addTask(e) {
  console.log(e);
  if (taskInput.value === "") {
    alert("Add Task");
  } else {
    //create li inside ul
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(taskInput.value + ""));
    taskList.appendChild("li");
    let link = document.createElement("a");
    link.setAttribute("href", "#");
    link.innerHTML = "x";
    li.appendChild(link);

    //Local store
    storeTaskInLocalStore(taskInput.value);

    taskInput.value = "";
  }
  e.preventDefault();
}

//Remove Task
function removeTask(e) {
  if (e.target.hasAttribute("href")) {
    if (confirm("Are you sure ?")) {
      let ele = e.target.parentElement;
      ele.remove();
      console.log(ele);

      removeFormLS(ele);
    }
  }
}

///clear task
function clearTask(e) {
  taskList.innerHTML = "";
  //above or below while loop function both works
  // while(taskList.firstChild){
  //   taskList.removeChild(taskList.firstChild)
  // }

  localStorage.clear();
}

//filter task
function filterTask(e) {
  let text = e.target.value.toLowerCase;
  document.querySelectorAll("li").forEach((task) => {
    let item = task.firstChild.textContent;

    if (item.toLocaleLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}

//Local StoreTaskInLocalStore

function storeTaskInLocalStore(task) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.push(task);

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function getTask() {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.forEach((task) => {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(task + ""));
    taskList.appendChild("li");
    let link = document.createElement("a");
    link.setAttribute("href", "#");
    link.innerHTML = "x";
    li.appendChild(link);
  });
}

//remove tasks from local store

function removeFormLS(taskItem) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  let li = taskItem;
  li.removeChild(li.lastChild);
  tasks.forEach((task, index) => {
    if (li.textContent.trim() === task) {
      tasks.splice(index, 1);
    }
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
