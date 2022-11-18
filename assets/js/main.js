let pokemonList = document.getElementById("pokemonList")
const loadMoreButton = document.getElementById('loadMoreButton')
const _limit = 10
let _offset = 0;
const maxRecords = 151

function convertPokemonToHtml(pokemon) {
    return `    
    <li class="pokemon ${pokemon.type}" id="${pokemon.number}">
        <div class="${pokemon.name}">
            <div class="pokemon-header">
                <span class="name">${pokemon.name}</span>
                <span class="number"># ${pokemon.number}</span>
            </div>
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

function reloadPokemonItens(){
    pokemonList = document.getElementById("pokemonList")

    loadPokemonItens(0, 10)
    _offset = 0
    
}

loadPokemonItens(_offset, _limit)

loadMoreButton.addEventListener('click', () => {
    if(loadMoreButton.id === 'loadMoreButton'){
        _offset += _limit

        const totalLoad = _offset + _limit

        if (totalLoad >= maxRecords){
            const newLimit = maxRecords - _offset
            loadPokemonItens(_offset, newLimit)

            loadMoreButton.parentElement.removeChild(loadMoreButton)
        }
        else {
            loadPokemonItens(_offset, _limit)
        }
    }
})