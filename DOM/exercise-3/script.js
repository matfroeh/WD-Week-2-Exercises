// You can work here or download the template
// Array of 10 random tasks as strings
const tasks = [
  "Complete the project",
  "Attend the meeting",
  "Write a report",
  "Review the code",
  "Fix the bugs",
  "Update the documentation",
  "Plan the next sprint",
  "Conduct user testing",
  "Optimize the performance",
  "Design",
];

const btnAddItem = document.getElementById("add-item-btn");
const taskList = document.getElementById("item-list");

btnAddItem.addEventListener("click", () => {
  const taskItem = document.createElement("li");
  taskItem.textContent = tasks[Math.floor(Math.random() * tasks.length)];
  taskList.appendChild(taskItem);
  taskItem.scrollIntoView({ behavior: "instant", block: "end" });
});

const btnAlert = document.getElementById("alert-btn");
btnAlert.addEventListener("click", () => {
    alert('Alert button clicked.');
})

const btnConsole = document.getElementById("console-btn");
btnConsole.addEventListener("click", () => {
    console.log('Console button clicked.');
    
})