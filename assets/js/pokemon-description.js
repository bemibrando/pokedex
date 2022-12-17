const listPokemon = document.getElementById("pokedexContainer")
let pokemonSelectedActive = false
let selectedPokemonBg, selectedPokemon
let search = false

function convertPokemonDescriptionToHtml(pokemon){
    return (pokemon.sprite) ? `    
    <div class="pokemon-description-bg ${pokemon.type} light-bg" id="descriptionBg">
    </div>
    <div class="display-none pokemon-description ${pokemon.type}" id="pokemonDescription">
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
        
        <div class="description-details-bg">
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
    ` : ``
}

function openCardAnimation(){    
    var id = setInterval(remove, 5);
    var pos = 100
    function remove(){
        if(pos == 100){
            selectedPokemon.classList.remove('display-none')
        }
        else if(pos <= 50){
            selectedPokemon.style.top = '50' + '%';
            clearInterval(id);
        }
        else{
            selectedPokemon.style.top = pos + '%';
        }
        pos -= 4;
    }
    return
}

function removeCardAnimation(){    
    var id = setInterval(remove, 5);
    var pos = 50
    function remove(){
        if(pos == 102){
            selectedPokemon.parentElement.removeChild(selectedPokemon)
        }
        else if(pos >= 110){
            selectedPokemonBg.parentElement.removeChild(selectedPokemonBg)
            clearInterval(id);
            enableScroll();
        }
        else{
            selectedPokemon.style.top = pos + '%';
        }
        pos += 4;
    }
    return
}

function checkClickBg(clickId){
    if(clickId === "descriptionBg"){
        removeCardAnimation()
        pokemonSelectedActive = false

        enableScroll();
        initialY = null
    }
}

listPokemon.addEventListener('click', function(e) {
    if(!pokemonSelectedActive && !search){
        const pokemonSelected = e.target.id
        
        if(pokemonSelected && pokemonSelected !== 'pokemonList'){
            //debugger
            pokeApi.getPokemonDescription(pokemonSelected).then((pokemon) => {
                const newHtml = convertPokemonDescriptionToHtml(pokemon)
                listPokemon.innerHTML += newHtml

                selectedPokemonBg = document.getElementById("descriptionBg")
                selectedPokemon = document.getElementById("pokemonDescription")

                openCardAnimation()

                pokemonSelectedActive = true
            })
            .catch((error) => console.error(error))

            disableScroll();
        }

    }else{
        checkClickBg(e.target.id)
    }
})


//#region  GET USER SWIPE
listPokemon.addEventListener("touchstart", startTouch, false)
listPokemon.addEventListener("touchmove", moveTouch, false)

var initialY = null;

function startTouch(e) {
    if(pokemonSelectedActive){
        initialY = e.touches[0].clientY;
        e.preventDefault();
        checkClickBg(e.target.id)
        console.log(e.target.id)
    }
}

function moveTouch(e) {
    if(pokemonSelectedActive){

        if(initialY == null){
            return
        }
        
        var currentY = e.touches[0].clientY;
        var differenceY = initialY - currentY;

        if(differenceY < 0 ){
            removeCardAnimation()
            
            pokemonSelectedActive = false
        }

        initialY = null;
        e.preventDefault();
    }
}

//#endregion