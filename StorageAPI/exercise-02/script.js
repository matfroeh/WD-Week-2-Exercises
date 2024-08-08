const txtField = document.getElementById("userInput");
const btnSubmit = document.getElementById("submit");
const btnReload = document.getElementById("reload");
const submitForm = document.getElementById("submitAndFieldForm");
const taskList = document.getElementById("task-list");
const browserWindow = document.defaultView;

const tasksArray = JSON.parse(localStorage.getItem("tasks")) || [];
// console.log(tasksArray);

tasksArray.forEach((element) => {
  createItemInList(taskList, element.taskTitle, element.taskId);
});

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  if (!txtField.value) alert("Enter a task!");
  else {
    createItemInList(taskList, txtField.value, txtField.value);
    txtField.value = "";
  }
});

function createItemInList(listObject, itemText, taskId) {
  const newItem = document.createElement("li");

  if (!tasksArray.find((element) => element.taskId === taskId)) {
    taskObject = {
      taskTitle: itemText,
      taskId: self.crypto.randomUUID(),
    };
    tasksArray.push(taskObject);
  } else {
    taskObject = {
      taskTitle: itemText,
      taskId: taskId,
    };
  }

  newItem.className =
    "flex items-center justify-between bg-gray-100 p-2 mt-2 rounded-md";
  const span = document.createElement("span");
  span.className = "flex-grow";

  const btnDelete = document.createElement("button");
  btnDelete.textContent = "Delete";
  btnDelete.className = "text-red-500 ml-2";
  btnDelete.addEventListener("click", () =>
    deleteTodoItem(newItem, taskObject.taskId)
  );

  span.textContent = itemText;

  newItem.appendChild(span);
  newItem.appendChild(btnDelete);
  listObject.insertBefore(newItem, listObject.firstChild);

  newItem.scrollIntoView({ behavior: "instant", block: "end" });

  localStorage.setItem("tasks", JSON.stringify(tasksArray));
}

btnReload.addEventListener("click", () => {
  browserWindow.location.reload();
});

function deleteTodoItem(li, id) {
  taskList.removeChild(li);
  tasksArray.splice(tasksArray.findIndex((element) => element.taskId === id, 1));
  localStorage.setItem("tasks", JSON.stringify(tasksArray));
}
