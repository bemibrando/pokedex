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

function convertPokeApiToPokemonDescription(pokemon, pokemonSpecies){
    const pokemonDescription = new PokemonDescription()

    pokemonDescription.number = pokemon.id
    pokemonDescription.name = pokemon.name

    const types = pokemon.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemonDescription.types = types
    pokemonDescription.type = type

    pokemonDescription.sprite = pokemon.sprites.other.dream_world.front_default

    pokemonDescription.height = pokemon.height
    pokemonDescription.weight = pokemon.weight

    const abilities = pokemon.abilities.map((abilitySlot) => abilitySlot.ability.name)
    const [ability] =abilities

    pokemonDescription.abilities = abilities
    pokemonDescription.ability = ability

    const eggGroup = pokemonSpecies.egg_groups.map((eggType) => eggType.name)
    const [eggType] = eggGroup
    
    pokemonDescription.egg_group = eggGroup
    pokemonDescription.egg_type = eggType

    pokemonDescription.habitat = pokemonSpecies.habitat.name

    return pokemonDescription
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon)
        .catch((error) => console.error(error))
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

pokeApi.getPokemonSpecies = (pokemon) => {
    return fetch(pokemon.species.url)
        .then((response) => response.json())
        .then((pokemonSpecies) => convertPokeApiToPokemonDescription(pokemon, pokemonSpecies))
        .catch((error) => console.error(error))
}

pokeApi.getPokemonDescription = (pokemonName) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`

    return fetch(url)
        .then((response) => response.json()) // Converting response to Json
        .then((pokemon) => pokeApi.getPokemonSpecies(pokemon)) 
        .catch((error) => console.error(error))
}