const filterButton = document.getElementById("filter_button");
const typesDiv = document.getElementById("filter_types")
let activeType = ""
let openFilter = false;
let filterActive = false;

function closeFilter(){    
    typesDiv.classList.add("hide")
    openFilter = false
}

function desactiveFilter(){    
    if(activeType){
        document.getElementById(activeType).classList.remove("white-color")
        document.getElementById(activeType).classList.remove(activeType)
        activeType = ""
    }
    filterActive = false
}

function removeActiveType(){
    document.getElementById(activeType).classList.remove("white-color")
    document.getElementById(activeType).classList.remove(activeType)
}

function loadPokemons(pokemons = []){    
    const newHtml = pokemons.map(convertPokemonToHtml).join('')
    pokemonList.innerHTML = newHtml
}

function searchTypeArr(typedName){
    filterTypeArr = []
    for(i = 0; i < typeArr.length; i++){
        if(typeArr[i].name.includes(typedName)){
            pokemonhtml = convertPokeApiDetailToPokemon(typeArr[i])
            filterTypeArr.push(pokemonhtml)
        }
    }
    
    
    loadPokemons(filterTypeArr)
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
            if(!filterActive){
                changeToReturnButton()
                cleanTypeArr()
            }
            
            if(activeType === typeSelected){
                removeActiveType()
                returnHome()
                activeType = ""
                filterActive = false
            }
            else {
                filterActive = true;
    
                // remove previous active bg color 
                if(activeType){                
                    removeActiveType()
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
                    loadPokemons(pokemons)
                })
            }
        }
    })
});