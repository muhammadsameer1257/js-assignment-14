document.getElementById("addTaskButton").addEventListener("click", addTask);
document.getElementById("clearAllButton").addEventListener("click", clearAllTasks);

function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskText = taskInput.value.trim();

  if (taskText !== "") {
    var taskList = document.getElementById("taskList");

    var taskItem = document.createElement("li");
    taskItem.textContent = taskText;

    var removeButton = document.createElement('i');
    removeButton.className = "remove-button fa-solid fa-trash";
    removeButton.addEventListener("click", () => {
      taskList.removeChild(taskItem);
    });

    taskItem.appendChild(removeButton);
    taskList.appendChild(taskItem);

    taskInput.value = "";
  } else {
    alert("Please enter a task.");
  }
}

function clearAllTasks() {
  var taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
}