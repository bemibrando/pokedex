const filterButton = document.getElementById("filter_button");
const typesDiv = document.getElementById("filter_types")
let activeType = ""
let openFilter = false;

filterButton.addEventListener('click', function(e) {
    if(!openFilter){
        typesDiv.classList.remove("hide")
        openFilter = true
    }else{
        if(activeType){
            document.getElementById(activeType).classList.remove("white-color")
            document.getElementById(activeType).classList.remove(activeType)
            activeType = ""
        }

        typesDiv.classList.add("hide")
        openFilter = false
    }
})

typesDiv.childNodes.forEach(typeRadio  => {
    typeRadio.addEventListener('click', function(e) {        
        const typeSelected = e.target.innerHTML
        
        if(typeSelected){
            changeToReturnButton()

            if(activeType){
                document.getElementById(activeType).classList.remove("white-color")
                document.getElementById(activeType).classList.remove(activeType)
            }
            activeType = typeSelected
            document.getElementById(activeType).classList.add("white-color")
            document.getElementById(activeType).classList.add(activeType)

            pokeApi.getPokemonByType(typeSelected).then((pokemons = []) => {
                const newHtml = pokemons.map(convertPokemonToHtml).join('')
                pokemonList.innerHTML = newHtml
            })
        }
    })
});