const pokemonList = document.getElementById("pokemonList")
const loadMoreButton = document.getElementById('loadMoreButton')
const limit = 10
let offset = 0;
const maxRecords = 151

function convertPokemonToHtml(pokemon) {
    return `    
    <li class="pokemon ${pokemon.type}" id="${pokemon.number}">
        <div class="${pokemon.name}">
            <span class="number"># ${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.sprite}" alt="${pokemon.name}">
            </div>
            <div class="pokemon-mask" id=${pokemon.name}></div>
        </div>
    </li>
    `
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToHtml).join('')  
        pokemonList.innerHTML += newHtml
    }) 
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit

    const totalLoad = offset + limit

    if (totalLoad >= maxRecords){
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    }
    else {
        loadPokemonItens(offset, limit)
    }
})