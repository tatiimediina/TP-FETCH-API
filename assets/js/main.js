async function obtenerPokemon() {
    const url = `https://pokeapi.co/api/v2/pokemon/`;
    const respuesta = await fetch(url);

    if (respuesta.ok) {
      const datosPokemon = await respuesta.json();
      return datosPokemon;
    } else {
      console.error(`Error al obtener Pokémon: ${respuesta.status}`);
      return null;
    }
  }

  function mostrarPokemon(datosPokemon) {
    const listaPokemon = document.getElementById('pokemon-list');

    datosPokemon.results.forEach((pokemon) => {
      const divPokemon = document.createElement("div");
      divPokemon.classList.add("pokemon");

      const imgPokemon = document.createElement("img");
      imgPokemon.src = pokemon.sprites.front_default;
      imgPokemon.alt = pokemon.name;

      const nombrePokemon = document.createElement("span");
      nombrePokemon.textContent = pokemon.name;

      divPokemon.appendChild(imgPokemon);
      divPokemon.appendChild(nombrePokemon);
      listaPokemon.appendChild(divPokemon);
    });
  }

  obtenerPokemon().then(datosPokemon => mostrarPokemon(datosPokemon));