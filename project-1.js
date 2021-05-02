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
    }
  }
}

///clear task
function clearTask(e) {
  taskList.innerHTML = "";
}
