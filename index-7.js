// Con esto da error
// const baseURL = 'https://api.github.com/users/guerreroooo';

// Con esto no da error
const baseURL = 'https://api.github.com/users/guerrero';

const pokemonURL = num => `${baseURL}pokemon/${num}/`;

fetch(baseURL)
  .then(response => {
    if (response.ok){
      return response.json();
    }else{
      throw new Error('Service not available');
    }
  })
  .then(results => drawInfo(results))
  .catch(error => drawError(error));

const drawError = error => {
  const results = document.querySelector('.results');
  results.innerHTML += `
    <h1>Error</h1>
    <p>${error}</p>
  `;
}

const drawInfo = info => {
  const results = document.querySelector('.results');

  const {name, bio} = info;

  results.innerHTML += `
    <span class="card">
      <p>${name}</p>
      <p>${bio}</p>
    </span>
  `;
};
