const basePath = "https://pokeapi.co/api/v2/pokemon/";
const cardContainer = document.getElementById("pokemon-container");
const browserWindow = document.defaultView;

cardContainer.classList.add("justify-items-center");

async function getPokemon(id) {
  path = basePath + id;
  try {
    const res = await fetch(path);
    if (!res.ok) throw new Error(`${res.status}`);

    return res.json();
  } catch (error) {
    console.error(error);
  }
}

browserWindow.addEventListener("load", () => {
  for (let i = 1; i <= 100; i++) {
    const newCard = document.createElement("div");
    const imgForCard = document.createElement("img");
    const nameOfPokemon = document.createElement("h2");
    const typeOfPokemon = document.createElement("p");

    newCard.classList.add("capitalize");
    newCard.classList.add("p-8");
    newCard.classList.add("border-solid");
    newCard.classList.add("border-8");

    const pokemon = getPokemon(i).then((data) => {
      // console.log(data.name);
      nameOfPokemon.textContent = data.name;
      imgForCard.src = data.sprites.front_default;
      typeOfPokemon.textContent = data.types[0].type.name;
    });

    newCard.appendChild(imgForCard);
    newCard.appendChild(nameOfPokemon);
    newCard.appendChild(typeOfPokemon);
    cardContainer.appendChild(newCard);
  }
});
