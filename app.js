document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    fetchPokemon();
  }
});

const selectBtn = document.getElementById("select");
selectBtn.addEventListener("click", fetchPokemon);

function fetchPokemon() {
  const input = document.getElementById("input-field");
  const inputValue = input.value;
  const url = `https://pokeapi.co/api/v2/pokemon/${inputValue}`;
  fetch(url)
    .then((respone) => respone.json())
    .then((data) => {
      const pokemon = {
        id: data.id,
        name: data.name,
        types: data.types.map((type) => type.type.name),
        weight: data.weight,
        image: data.sprites["front_default"],
      };
      const dataContainer = document.getElementById("data");
      dataContainer.innerHTML = `
      <img class="data-image" src="${pokemon.image}"/>
      <h1>ID: #${pokemon.id}</h1>
      <h1>Name: ${pokemon.name}</h1>
      <h1>Type:  ${pokemon.types.join(", ")}</h1>
      <h1>Weight: ${pokemon.weight} KG</h1>`;
    });
  input.value = "";
}

fetchPokemon();
