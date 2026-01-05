async function getAllPokemon() {
  try {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
    );

    if (!response.ok) {
      throw new Error(
        `Could not retrive pokemon from api. Status: ${response.status}`
      );
    }

    const data = await response.json();

    //Transform Data

    const pokemonList = data.results.map((pokemon) => {
      var id = pokemon.url.split("/").filter(Boolean).pop();
      return {
        name: pokemon.name,
        id: Number(id),
      };
    });

    return pokemonList;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

async function getPokemonDetails(name) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

    if (!response.ok) {
      throw new Error(
        `Could not retrive pokemon from api. Status: ${response.status}`
      );
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

async function getPokemonGenders(id) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/gender/${id}`);

    if (!response.ok) {
      throw new Error(
        `Could not retrive pokemon gender from api. Status: ${response.status}`
      );
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(`Failed to get Pokemon's Gender. Status: ${error} `);
    return null;
  }
}

async function getAbilities(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `Could not retrive pokemon ability from api. Status: ${response.status}`
      );
    }

    const data = await response.json();

    const englishEffect = data.effect_entries.find(
      (entry) => entry.language.name === "en"
    );

    return englishEffect ? englishEffect.effect : "No description available";
  } catch (error) {
    console.log(`Failed to get Pokemon's abilities. Status: ${error} `);
    return null;
  }
}

export { getAllPokemon, getPokemonDetails, getPokemonGenders, getAbilities };
