const baseURL = 'http://pokeapi.co/api/v2/';

const pokemonURL = num => `${baseURL}pokemon/${num}/`;

const getPokemon = number => {
  const request = new XMLHttpRequest();
  request.open('get', pokemonURL(number));
  request.addEventListener('load', () => contentLoaded(request));
  request.send();
}

const contentLoaded = request => {
  var json = JSON.parse(request.responseText);
  drawPokemon(json);
}

const drawPokemon = pokemonData => {
  const{
    name,
    id,
    sprites: {front_default: image},
    types: [{type: {name: type}}]
  } = pokemonData;

  const results = document.querySelector('.results');
  results.innerHTML += `
    <span class="card">
      <p>${id}</p>
      <p>${name}</p>
      <p>Tipo ${type}</p>
      <img src="${image}" />
    </span>
  `;
};

getPokemon(150);
getPokemon(151);
