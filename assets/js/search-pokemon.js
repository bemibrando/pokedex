// listPokemon = ElementById("pokedexContainer")
// loadMoreButton = ElementById('loadMoreButton')

function convertSearchedPokemonToHtml(pokemon){
    return`
    <div class="src-description-bg ${pokemon.type} light-bg"></div>
    <div class="src-pokemon-description ${pokemon.type}">
        <div class="description-header">
            <span class="description-name">${pokemon.name}</span>
            <ol class="types description-types">
                ${pokemon.types.map((type) => `<li class="description-type ${type}">${type}</li>`).join('')}
            </ol>
            <span class="description-number"># ${pokemon.number}</span>
        </div>

        <img class="description-sprite" src="${pokemon.sprite}" alt="${pokemon.name}">
        
        <div class="src-description-details-bg">
            <div class="description-details">
                <div class="detail-row">
                    <div class="detail-topic">Egg Group : </div>
                    <ol class="detail-egg-group">
                        ${pokemon.egg_group.map((egg_type) => `<li class="egg-type">${egg_type}</li>`).join(',')}
                    </ol>
                </div>
                <div class="detail-row">
                    <span class="detail-topic">Habitat : </span>
                    <span class="detail-result habitat">${pokemon.habitat}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-topic">Height : </span>
                    <span class="detail-result">${pokemon.height} dm</span>
                </div>
                <div class="detail-row">
                    <span class="detail-topic">Weight : </span>
                    <span class="detail-result">${pokemon.weight} hg</span>
                </div>
                <div class="detail-row">
                    <span class="detail-topic">Abilities : </span>
                    <ol class="abilities-list">
                        ${pokemon.abilities.map((ability) => `<li class="ability ${ability}">${ability}</li>`).join('')}
                    </ol>
                </div>
            </div>
        </div>
    </div>
    `
}

function changeToReturnButton(){
    loadMoreButton.id = 'returnButton'
    loadMoreButton.innerHTML = `<label>Return</label>`
}

const searchPokemon = e => {
    e.preventDefault(); // method cancles the event if it is cancelable, meaning that the default action that belongs to the event will not occur
    const searchedPokemon = document.getElementById("pokemonSearch").value

    changeToReturnButton()

    pokeApi.getPokemonDescription(`${searchedPokemon.toLowerCase()}`).then((pokemon) => {
        const newHtml = convertSearchedPokemonToHtml(pokemon)
        listPokemon.innerHTML = newHtml
    })
    .catch((error) => {
        listPokemon.innerHTML = `<h2 class="non-pokemon">404 pokemon not found!</h2>`
    })
}

loadMoreButton.addEventListener('click', () => {
    if(loadMoreButton.id === 'returnButton'){

        loadMoreButton.id = 'loadMoreButton'
        loadMoreButton.innerHTML = `<label>Load More</label>`

        listPokemon.innerHTML = `<ol class="pokemons" id="pokemonList"></ol>`
        reloadPokemonItens()
    }
})