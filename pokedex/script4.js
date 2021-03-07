const getPokemomUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`
const generatePokemonPromises = () => Array(804).fill().map((_, index) =>
fetch(getPokemomUrl(index + 1)).then(response => response.json()))


const generateHtml = pokemons => 
    pokemons.reduce((accumulator, pokemon) => {
        const types = pokemon.types.map(typeInfo => typeInfo.type.name)



        accumulator += `

             <li class="card ${types[0]}">
             <img class="card-image" alt="${pokemon.name}" src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png"/>
            <button class="card-title" id="${pokemon.name}" " onclick="clicou(this.id)">${pokemon.id}.${pokemon.name}</button>
            <p class="cards-subtitle">${types.join(' | ')}</p>
        
             </li>
                
             `

        return accumulator
    }, '')


const insertPokemonsIntoPage = pokemons => {
    const ul = document.querySelector('[data-js="pokedex"]')

    ul.innerHTML = pokemons
}



const pokemonPromises = generatePokemonPromises()


Promise.all(pokemonPromises)
    .then(generateHtml)
    .then(insertPokemonsIntoPage)


function clicou(clicked_id){
  window.open(`https://www.pokemon.com/br/pokedex/${clicked_id}`)
    }





