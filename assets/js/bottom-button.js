function changeToReturnButton(){
    loadMoreButton.id = 'returnButton'
    loadMoreButton.innerHTML = `<label>Return</label>`
}
function returnHome(closingFilter = false){
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
    
    cleanTypeArr()
    if(closingFilter){
        desactiveFilter()
        closeFilter()
    } 
}
// Button Return >> Button Load More
loadMoreButton.addEventListener('click', () => {
    if(loadMoreButton.id === 'returnButton'){
        returnHome(true)
    }
})