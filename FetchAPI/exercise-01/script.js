const itemList = document.getElementById("todo-list");
const browserWindow = document.defaultView;

const path = "https://jsonplaceholder.typicode.com/todos/";

function createItemInList(listObject, itemName, itemDone) {
  const newItem = document.createElement("li");
  const spanItemText = document.createElement("span");

  spanItemText.textContent = itemName;

  if (itemDone) spanItemText.innerHTML += " &#10003;";
  else spanItemText.innerHTML += " &#10005;";

  newItem.appendChild(spanItemText);
  listObject.appendChild(newItem);

//   newItem.scrollIntoView();
}

browserWindow.addEventListener("load", async () => {
  try {
    const res = await fetch(path);

    if (!res.ok) throw new Error(`${res.status}`);
    
    const data = await res.json();
    data.forEach((item) => {
    //   console.log(item);
      createItemInList(itemList, item.title, item.completed);
    });
  } catch (error) {
    console.error(error);
  }
});
