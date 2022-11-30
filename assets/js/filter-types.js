const filterButton = document.getElementById("filter_button");
const typesDiv = document.getElementById("filter_types")
let activeType = ""
let openFilter = false;

function closeFilter(){
    if(activeType){
        document.getElementById(activeType).classList.remove("white-color")
        document.getElementById(activeType).classList.remove(activeType)
        activeType = ""
    }
    
    typesDiv.classList.add("hide")
    openFilter = false
}

filterButton.addEventListener('click', function(e) {
    if(!openFilter){
        typesDiv.classList.remove("hide")
        openFilter = true
    }else{
        closeFilter()
    }
})

typesDiv.childNodes.forEach(typeRadio  => {
    typeRadio.addEventListener('click', function(e) {        
        const typeSelected = e.target.innerHTML
        
        if(typeSelected){
            changeToReturnButton()

            // remove previous active bg color 
            if(activeType){
                document.getElementById(activeType).classList.remove("white-color")
                document.getElementById(activeType).classList.remove(activeType)
            }
            // config new active tag
            activeType = typeSelected
            document.getElementById(activeType).classList.add("white-color")
            document.getElementById(activeType).classList.add(activeType)

            // get and load pokemon list
            if(pokemonList){
                listPokemon.innerHTML = `<ol class="pokemons" id="pokemonList"></ol>`
                pokemonList = document.getElementById("pokemonList")
            }

            pokeApi.getPokemonByType(typeSelected).then((pokemons = []) => {
                const newHtml = pokemons.map(convertPokemonToHtml).join('')
                pokemonList.innerHTML = newHtml
            })
        }
    })
});