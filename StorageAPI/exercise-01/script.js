const txtField = document.getElementById("userInput");
const btnSubmit = document.getElementById("submit");
const btnReload = document.getElementById("reload");
const submitForm = document.getElementById("submitAndFieldForm");
const quoteList = document.getElementById("quote-list");
const browserWindow = document.defaultView;

// console.log(browserWindow);

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  if (!txtField.value) alert("Enter a quote!");
  else {
    // const newItem = document.createElement("li");
    // const newQuote = txtField.value;

    // newItem.textContent = newQuote;
    // quoteList.insertBefore(newItem, quoteList.firstChild);

    // newItem.scrollIntoView({ behavior: "instant", block: "end" });


    // const previousData = JSON.parse(localStorage.getItem("famousQuotes")) || [];
    // // Set item to a stringified version of an array with the old and new tasks
    // localStorage.setItem(
    //   "famousQuotes",
    //   JSON.stringify([newQuote, ...previousData])
    // );
    createItemInList(quoteList, "famousQuotes", txtField.value);
    txtField.value = "";
  }
});

browserWindow.addEventListener("load", () => {
  const dataInLocalStorage =
    JSON.parse(localStorage.getItem("famousQuotes")) || [];
  dataInLocalStorage.forEach((e) => {
    const newItem = document.createElement("li");

    newItem.textContent = e;
    quoteList.appendChild(newItem);

    newItem.scrollIntoView({ behavior: "instant", block: "end" });
  });
});

btnReload.addEventListener("click", () => {
  browserWindow.location.reload();
});

function createItemInList(listObject, listName, itemText) {
  const newItem = document.createElement("li");

  newItem.textContent = itemText;
  listObject.insertBefore(newItem, quoteList.firstChild);

  newItem.scrollIntoView({ behavior: "instant", block: "end" });

  const previousData = JSON.parse(localStorage.getItem(listName)) || [];
  // Set item to a stringified version of an array with the old and new tasks
  localStorage.setItem(listName, JSON.stringify([itemText, ...previousData]));
}