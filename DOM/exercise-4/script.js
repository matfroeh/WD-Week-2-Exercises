const form = document.querySelector("form");
const outputElement = document.getElementById("output");
outputElement.classList.remove("text-white");
outputElement.classList.add("text-black");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (
    !e.target.elements.name.value ||
    !e.target.elements.email.value ||
    !e.target.elements.message.value
  ) {
    alert("Please fill all the fields!");
  } else {
    console.log(e.target.elements);

    const targetElements = Array.from(e.target.elements);
    console.log(targetElements);
    console.log(targetElements[0].id);
    

    targetElements.forEach((element) => {
        const listItem = document.createElement('ul');
        listItem.textContent = `${element.id}:  ${element.value}`;
        outputElement.appendChild(listItem);
    });

    // const listItem = document.createElement('ul');
    // listItem.textContent =  e.target.elements.name.value;
    // outputElement.appendChild(listItem);

    // console.log(
    //   e.target.elements.name.value,
    //   e.target.elements.email.value,
    //   e.target.elements.message.value,
    // );
  }
});

// document.getElementById("myButton").addEventListener("click", function() {
//     const elementsToAdd = ['Element 1', 'Element 2', 'Element 3'];
//     elementsToAdd.forEach(function(item) {
//         const newElement = document.createElement('div');
//         newElement.textContent = item;
//         outputElement.appendChild(newElement);
//     });
// });
