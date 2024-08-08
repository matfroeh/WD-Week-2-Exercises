const basePath = "https://pokeapi.co/api/v2/pokemon/";
const cardContainer = document.getElementById("pokemon-container");
const browserWindow = document.defaultView;

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

console.log(getPokemon(200).then((item) => console.log(item.name)));

browserWindow.addEventListener("load", () => {
  for (let i = 1; i <= 100; i++) {
    const newCard = document.createElement("div");
    const imgForCard = document.createElement("img");
    const nameOfPokemon = document.createElement("h3");
    const typeOfPokemon = document.createElement("p");

    const pokemon = getPokemon(i);

    // imgForCard.src = pokemon.
  }
});
