function convertSearchedPokemonToHtml(pokemon, page404 = false){
    return (pokemon.sprite || page404) ? `
    <div class="src-description-bg ${pokemon.type} light-bg"></div>
    <div class="src-pokemon-description ${pokemon.type}">
        <div class="description-header">
            <span class="description-name">${pokemon.name}</span>
            <ol class="types description-types">
                ${pokemon.types.map((type) => `<li class="description-type ${type}">${type}</li>`).join('')}
            </ol>
            <span class="description-number"># ${pokemon.number}</span>
        </div>

        <figure class="description-figure">
            <img class="description-sprite" src="${pokemon.sprite}" alt="${pokemon.name} sprite">
            ${(pokemon.animation) ? `<img class="description-animation" src="${pokemon.animation}" alt="${pokemon.name} animation">` : ``} 
        </figure>

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
                    ${(page404)?`<span class="detail-result habitat">Page 404</span>`:`<span class="detail-result habitat">${pokemon.habitat}</span>`}                    
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
                        ${(page404)?`
                            <li class="ability">Intruder</li>
                            <li class="ability">Nosy</li>
                            <li class="ability">Snoop</li>
                            <li class="ability">Infiltrator</li>
                            ` : 
                            pokemon.abilities.map((ability) => `<li class="ability">${ability}</li>`).join('')}        
                    </ol>
                </div>                
                ${(page404)?`<div class="detail-row">
                        <span class="detail-topic">Personality : </span> 
                        <span class="detail-result">Show up when other Pokémon is not found</span>
                    </li>`:``}
            </div>
        </div>
    </div>
    ` : ``
}

function changeToReturnButton(){
    loadMoreButton.id = 'returnButton'
    loadMoreButton.innerHTML = `<label>Return</label>`
}

// Button Return >> Button Load More
loadMoreButton.addEventListener('click', () => {
    if(loadMoreButton.id === 'returnButton'){
        // Erase search text
        document.getElementById("pokemonSearch").value=""
        // Enable pokemon card description
        search = false

        // Change Button functionality, now it can load more pokemons
        loadMoreButton.id = 'loadMoreButton'
        loadMoreButton.innerHTML = `<label>Load More</label>`

        // List Pokemons
        listPokemon.innerHTML = `<ol class="pokemons" id="pokemonList"></ol>`
        reloadPokemonItens()
        
        closeFilter()
    }
})

// variable to set timeout to search automatically
let timeoutSearch

function setTimeSearch(){
    clearTimeout(timeoutSearch)
    timeoutSearch = setTimeout(searchPokemon, 200)
}

const searchPokemon = e => {
    const searchedPokemon = document.getElementById("pokemonSearch").value

    // Change button Load More >> Return
    changeToReturnButton()

    pokeApi.getPokemonDescription(`${searchedPokemon.toLowerCase()}`).then((pokemon) => {
        const newHtml = convertSearchedPokemonToHtml(pokemon)
        listPokemon.innerHTML = newHtml
    })
    .catch((error) => {
        listPokemon.innerHTML = `<h2 class="non-pokemon">404, I Choose You!</h2>`
        pokeApi.getPokemonDescription(`404`).then((pokemon) => {
            const pokemon404 = convertSearchedPokemonToHtml(pokemon, true)
            listPokemon.innerHTML += pokemon404
        })
        .catch((error2) => {
            listPokemon.innerHTML += `<h3>error2</h3>`
        })
    })
    search = true
}