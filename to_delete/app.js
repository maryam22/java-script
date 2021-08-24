fetch(`https://pokeapi.co/api/v2/pokemon/pikachu/')
  .then(response => response.json() )
  console.log("SUCCESS")
  .then(pokemon => console.log(pokemon) )
  console.log("SUCCESS2")

  .catch( error => console.error('error:', error) );