const img = document.getElementById("img")
const boton = document.querySelector("#buscar")
const lista = document.querySelector("#lista")
const url ="https://pokeapi.co/api/v2/pokemon"
const p = document.getElementsByTagName("p")
const pokemonColor = {
  fire : "#D12A01",
  rock : "#8A8263",
  water : "#1633B5",
  grass : "#279B0F",
  psychic : "#F761A7",
  ice : "#21A9A5",
  fighting : "#A70B9C",
  bug : "#ACC005",
  electric : "#DFDF0F",
}

//Crear Pokemon
class Pokemon {
  constructor(id, name, tipo, img, hp, ataque, defensa ){
    this.id = id
    this.name = name
    this.tipo = tipo
    this.img = img
    this.hp = hp
    this.ataque = ataque
    this.defensa = defensa
  }
}

//Funciones
function buscarPokemon(pokemon) {
  fetch(`${url}/${pokemon}`).then(res => res.json()).then(data => {
    const pokemons = data
    crearPokemon(pokemons)
  })
}

function crearPokemon(pokemons) {
  let id = pokemons.id
  let name = pokemons.name
  let tipo = pokemons.types[0].type.name
  let img = pokemons.sprites.front_default
  let hp = pokemons.stats[0].base_stat
  let ataque = pokemons.stats[1].base_stat
  let defensa = pokemons.stats[2].base_stat
  const pokemon = new Pokemon(id, name, tipo, img, hp, ataque, defensa)
  mostrarPokemon(pokemon)
}

function mostrarPokemon(pokemon) {
  const cardBody = document.querySelector(".card-body")
  cardBody.style.background = `${pokemonColor[pokemon.tipo]}`;
  img.src = pokemon.img
  p[0].textContent = `Nombre: ${pokemon.name}`
  p[1].textContent = `Tipo: ${pokemon.tipo}`
  p[2].textContent = `Id: ${pokemon.id}`
  p[3].textContent = `Hp: ${pokemon.hp}`
  p[4].textContent = `Ataque: ${pokemon.ataque}`
  p[5].textContent = `Defensa: ${pokemon.defensa}` 
}

//Eventos
boton.addEventListener("click", e =>{
  const pokemon = document.querySelector("#input").value.toLowerCase()
  buscarPokemon(pokemon)
  e.preventDefault()
})