# Pokedex &nbsp; &nbsp; &nbsp; <img src="https://img.shields.io/github/last-commit/bemibrando/pokedex?style=for-the-badge" height="24px"/> &nbsp; <img src="https://img.shields.io/badge/status-In Progress-yellow?style=for-the-badge" height="24px"/>

This is a solution to Building a Pokédex with JavaScript from [Digital Innovation One](https://www.dio.me/en). Dio.me is the platform for you to learn from experts, master the main technologies and enter the most desired companies faster.

This Pokedex load all pokemons and when you click on a pokemon, some details about the chosen pokemon will appear. It's possible to search for a specific pokemon and also look up just for types

<br/><br/>

<b>Build with:</b> <br/>
<img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" height="24px"/>
<img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" height="24px" />
<img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" height="24px" />

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Project Composition](#project-composition)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Useful Resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

<br />

## Overview

### <b id="the-challenge">The challenge</b>
- The project goals was develop a pokedex that displays multiple pokemons and create a page that displays the details of the chosen pokemon.

Extra:
- Search for a specific pokemon

### <b id="project-composition">Project Composition</b>
Done:
- Consume Pokemon RESTful API
- Build webpage dinamically
- Create pagination
- Limit to show only first generation Pokemons
- Create Pokemon Description page

Extra:
- When you click on a pokemon, display the details of the chosen pokemon at middle of screen
- Search for a specific pokemon
- Filter by type
- Reload search list when choosing a type 
- Navigate between search and pokédex and between search type and pokédex
- Page 404 personalized
- Changes the amount of pokemon cards it loads depending on the screen size.
- Search in real time, but it only shows if the pokemon exists if you type its name in full
- Gifs in the corner of the Pokémon's description card

Bugs fixed:
- When a pokémon is selected to show its description, disable page scroll
- Some pokemons do not have habitat and this caused the pokemon not to be loaded
- The "dream_world" sprite does not exist for all pokemons, so now the "official-artwork" sprite is being used
- Don't load pokemons that don't have a sprite

### <b id="screenshot">Screenshot</b>

<p align="center">
    <img src="./assets/img/desktop.gif" alt="Pokedex solution desktop gif view" width="600px">
</p>

<details>
<summary>Desktop view</summary>


<p align="center">
    <img src="./assets/img/desktop.jpeg" alt="Pokedex solution desktop view" width="75%">
    <img src="./assets/img/desktop-description.jpeg" alt="Pokemon description solution desktop view" width="75%">
    <img src="./assets/img/desktop-search.jpeg" alt="Pokemon search solution desktop view" width="75%">
</p>
</details>

<details>
<summary>Phone view</summary>

<p align="center">
    <img src="./assets/img/phone.jpeg" alt="Pokedex solution cellphone view" width="257px">
    <img src="./assets/img/phone-description.jpeg" alt="Pokemon description solution cellphone view" width="257px">
    <img src="./assets/img/phone-search.jpeg" alt="Pokemon search solution cellphone view" width="257px">
</p>
</details>

### <b id="links">Links</b>
- Solution URL: [GitHub Repository](https://github.com/bemibrando/pokedex/)
- Live Site URL: [GitHub Pages](https://bemibrando.github.io/pokedex/)

<br />

## My process

### <b id="built-with">Built with</b>
- Semantic HTML5 markup
- CSS
- JavaScript
- PokeApi
- #region to organize some parts of the code

### <b id="what-i-learned">What I learned</b>
- How to consume RESTful API
- How to manipulate the result of the request through a Promise
- How to use function Map to decrease code verbosity
- How to handle multiple requests in parallel
- How to convert PokeApi model to my model
- How to add subitems to HTML dinamically
- How to add pagination and remove the button when it reaches the limit

## <b id="useful-resources">Useful Resources</b>
- [Saepul Nahwan - Pokedex App](https://dribbble.com/shots/6540871-Pokedex-App) - This design was used as inspiration to develop this webpage.
- [Pokemon RESTful API](https://pokeapi.co/) - All the Pokémon data you'll ever need in one place,
easily accessible through a modern RESTful API.
- [DIO.me - Digital Innovation One](https://www.dio.me/en) - Dio.me is the platform for you to learn from experts, master the main technologies and enter the most desired companies faster.
- [CSS Search Box](https://blog.stackfindover.com/css-search-boxes/) - Inspiration for Search Box Design
- [CSS Box Shadow Examples](https://getcssscan.com/css-box-shadow-examples) - Used for add box shadow
- [CSS Buttons Examples](https://getcssscan.com/css-buttons-examples) - Used for add styled buttons
- [IconScout](https://iconscout.com/) - For free icons

## Author
<div sytle="display: inline-block;">
    <figure>
        <a href="https://github.com/bemibrando" target="_blank">
            <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/102377919?v=4" width="100px" alt="Bianca Emi profile's photo"> <br />
            <sub style="text-align: center; font-size: 1.4em;"><b>Bianca Emi</b></sub>
        </a>
    </figure>
    <p>Made with ♥ by <a href="https://github.com/bemibrando" target="_blank">Bianca Emi</a> 👋 Get in touch!</p>
    <div align="start">
        <a href="https://www.linkedin.com/in/bianca-emi/" target="_blank">
            <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white">
        </a>   
        <a href="https://twitter.com/bemibrando" target="_blank">
            <img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white">
        </a>   
        <a href="mailto: bemi.brando@outlook.com">
            <img src="https://img.shields.io/badge/bemi.brando@outlook.com-0078D4?style=for-the-badge&logo=microsoft-outlook&logoColor=white">
        </a><br/>
    </div>
</div>

## Acknowledgments
» Renan J. de Paula - Taught me how to develop a pokedex that displays multiple pokemons
<div>
    <a href="https://github.com/RenanJPaula" target="_blank">
        <img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white">
    </a>
    <a href="https://www.linkedin.com/in/renanjpaula/" target="_blank">
        <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white">
    </a>
</div>

<br />

» Mateus Rocha - Inspired me to make the pokemon search page
<div>
    <a href="https://github.com/mateusrr" target="_blank">
        <img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white">
    </a>
    <a href="https://www.linkedin.com/in/mateusrr/" target="_blank">
        <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white">
    </a>
</div>

» Rodrigo Withers - Suggested me to filter by type of pokemon
<div>
    <a href="https://github.com/rodrigowithers" target="_blank">
        <img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white">
    </a>
    <a href="https://www.linkedin.com/in/rodrigo-sales-56201412b/" target="_blank">
        <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white">
    </a>
</div>