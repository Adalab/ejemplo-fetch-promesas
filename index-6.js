const baseURL = 'http://pokeapi.co/api/v2/';

const pokemonURL = num => `${baseURL}pokemon/${num}/`;

const numberOfPokemon = 5;

const numbers = [...Array(numberOfPokemon).keys()].map(n => n + 1);

Promise.all(
  numbers.map(number =>
    fetch(pokemonURL(number))
      .then(response =>
        response.json()
      )
  )
).then(results =>
  results.map(result => drawPokemon(result))
).catch(error => drawError(error));

const drawError = error => {
  const results = document.querySelector('.results');
  results.innerHTML += `
    <h1>Error</h1>
    <p>${error}</p>
  `;
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
