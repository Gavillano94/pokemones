const idPokemon = document.querySelector(".id-pokemon")
const buttonSend = document.querySelector(".button-send");

buttonSend.addEventListener("click",(e) =>{
  const id = idPokemon.value;
  getPokemon(id);
})

function getPokemon(id){
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  .then(response => response.json())
  .then((data) => {
    printPokemonDom(data)
  })

}

getPokemon(1)
function printPokemonDom(pokemon){
  resetDOM()
  const pokedex = document.querySelector(".pokedex");
  const pokemonData = document.querySelector(".pokemon-data");
  const namePokemon = document.createElement("h1");
  const idPokemon = document.createElement("h3")
  const heightPokemon = document.createElement("h3")
  const weightPokemon = document.createElement("h3")
  const ulTypePokemon = document.createElement("ul")
  const imagePokemon = document.createElement("img");
  const ulPokemonMove = document.createElement('ul');
  /* NOMBRE */
  namePokemon.textContent = `${pokemon.id}. ${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}`
  pokemonData.appendChild(namePokemon);

  /* IMAGEN */
  imagePokemon.src = pokemon.sprites.front_default
  pokemonData.appendChild(imagePokemon);

  /* ALTURA */
  heightPokemon.textContent = `Altura: ${pokemon.height}`
  pokemonData.appendChild(heightPokemon)

  /* PESO */
  weightPokemon.textContent = `Peso: ${pokemon.weight}`
  pokemonData.appendChild(weightPokemon)

  /* TIPO */

  for (let i = 0; i < pokemon.types.length; i++ ) {
    const typePokemon = document.createElement("li")
    typePokemon.textContent = pokemon.types[i].type.name.charAt(0).toUpperCase() + pokemon.types[i].type.name.slice(1)
    pokemonData.appendChild(ulTypePokemon)
    ulTypePokemon.className = 'type';
    ulTypePokemon.appendChild(typePokemon);
    pokemonData.appendChild(ulTypePokemon);
  }

  /* MOVIMIENTOS */
  for (let i = 0; i <= 3; i++) {
    let movesPokemon = document.createElement("li");
    movesPokemon.textContent  = pokemon.moves[i].move.name.charAt(0).toUpperCase() + pokemon.moves[i].move.name.slice(1)
    ulPokemonMove.className ='moves';
    ulPokemonMove.appendChild(movesPokemon);
    pokemonData.appendChild(ulPokemonMove);
  }
}

function resetDOM(){
  let pokemonData = document.querySelector(".pokemon-data");
  pokemonData.innerHTML = "";

}

