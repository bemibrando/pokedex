const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail){
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name
    
    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.sprite = pokeDetail.sprites.other.dream_world.front_default

    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    
    return fetch(url)
        .then((response) => response.json()) // Converting response to Json
        .then((jsonBody) => jsonBody.results) // Get Pokemon List
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail)) // Get Pokemon Details List and converting to Json
        .then((detailRequests) => Promise.all(detailRequests)) // wait to finish all requests
        .then((pokemonDetails) => pokemonDetails)
        .catch((error) => console.error(error)) 
}