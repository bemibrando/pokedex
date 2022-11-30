let pokemonList = document.getElementById("pokemonList")
const loadMoreButton = document.getElementById('loadMoreButton')
let _limit = 10;
let _offset = 0;
const maxRecords = 1000

function convertPokemonToHtml(pokemon) {
    return (pokemon.sprite) ? `    
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
    ` : ``
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToHtml).join('')  
        pokemonList.innerHTML += newHtml
    })
}

function getWidthLimit(){
    let width = window.innerWidth
    let screenCards = 4
    if(width < 380){
        screenCards = 4
    }
    else if(width < 566){
        screenCards = 10
    }
    else if(width < 991){
        screenCards = 15
    }
    else{
        screenCards = 20
    }

    _limit = Math.ceil(screenCards * 1.75)
}

window.addEventListener('resize', getWidthLimit)

function reloadPokemonItens(){
    pokemonList = document.getElementById("pokemonList")


    loadPokemonItens(0, _limit)
    _offset = 0
    
}

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

getWidthLimit()
loadPokemonItens(_offset, _limit)