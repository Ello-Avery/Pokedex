import {
  getAllPokemon,
  getPokemonDetails,
  getPokemonGenders,
  getAbilities,
} from "./api.js";

//html Elements

var pokemonTable = document.querySelector(".pokemonList");

var headingPokemon = document.querySelector(".pokemonHeading");

var pokemonSprite = document.querySelector("#pokemonSprite");

var stats = document.querySelector(".pokemonStats");

var abilitiesTags = document.querySelector("#abilityList");

var abilityText = document.querySelector(".abilityText");

//Load Pokemon into table

let pokemonData;

document.addEventListener("DOMContentLoaded", async () => {
  var pokemonSelected = await getPokemonDetails("pikachu");

  console.log(pokemonSelected);

  showPokemonDetails(pokemonSelected);
  pokemonData = await getAllPokemon();
  console.log("Pokemon loaded:", pokemonData);

  pokemonTable.innerHTML = "";

  pokemonData.forEach((pokemon) => {
    var pokemonItem = `
            <div class="pokemonItem">
            <img class="listImg" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${
              pokemon.id
            }.gif" alt="${pokemon.name.toLowerCase()}" />
            <div class="details">
              <p class="listNumber">No. ${String(pokemon.id).padStart(
                3,
                "0"
              )}</p>
              <p class="listName">${
                pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
              }</p>
            </div>
          </div>
  `;
    pokemonTable.insertAdjacentHTML("beforeend", pokemonItem);
  });
});

//Select Pokemon

pokemonTable.addEventListener("click", async (event) => {
  const clickedItem = event.target.closest(".pokemonItem");

  if (clickedItem) {
    const pokemonName = clickedItem
      .querySelector(".listName")
      .textContent.toLowerCase();
    console.log(`click: ${pokemonName}`);

    var pokemonSelected = await getPokemonDetails(pokemonName);

    console.log(pokemonSelected);

    showPokemonDetails(pokemonSelected);
  }
});

async function showPokemonDetails(pokemon) {
  pokemonSprite.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${pokemon.id}.gif`;

  pokemonSprite.alt = pokemon.name;

  var pokemonTypeConcat = concatTypes(pokemon);

  var genders = await getPokemonGenders(pokemon.id);

  console.log(genders);

  headingPokemon.innerHTML = `
              <p class="pokemonNum">No. ${String(pokemon.id).padStart(
                3,
                "0"
              )}</p>
          <p class="pokemonName">${capitaliseFirstLetter(pokemon.name)}</p>
          <p class="pokemonType">${pokemonTypeConcat}</p>
          <div class="pokemonGender">
      ${
        !genders
          ? ""
          : genders.name === "female"
          ? '<i class="bi bi-gender-female"></i>'
          : genders.name === "male"
          ? '<i class="bi bi-gender-male"></i>'
          : ""
      }
          </div>
    `;

  stats.innerHTML = `
    <div class="statCard">
              <p class="statHeading">Height</p>
              <p class="stat" id="height">${pokemon.height}"</p>
            </div>
            <div class="statCard">
              <p class="statHeading">Weight</p>
              <p class="stat" id="weight">${pokemon.weight} lbs</p>
            </div>
    `;

  const firstAbility = abilitiesTags.querySelector(".abilityTag");
  if (firstAbility) {
    firstAbility.classList.add("active");
    currentAbilityIndex = 0;
  }

  var abilities = pokemon.abilities;

  console.log(abilities);

  var abilitiesList = abilities.map((obj) => obj.ability.name);

  console.log(abilitiesList);

  abilitiesTags.innerHTML = abilitiesList
    .map((item) => `<li class="abilityTag">${capitaliseFirstLetter(item)}</li>`)
    .join(" ");

  console.log(abilities[0].ability.url);

  var abilityDescription = await getAbilities(abilities[0].ability.url);

  console.log(abilityDescription);

  abilityText.innerHTML = abilityDescription;
}

function concatTypes(pokemon) {
  return pokemon.types
    .map((obj) => {
      var type = obj.type.name;
      return capitaliseFirstLetter(type);
    })
    .join(", ");
}

function capitaliseFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

// Change Ability

abilitiesTags.addEventListener("click", (event) => {
  const clickedAbility = event.target.closest(".abilityTag");

  if (clickedAbility) {
    const abilityName = clickedAbility.textContent.trim().toLowerCase();

    console.log(`click: ${abilityName}`);

    abilitySelected(abilityName);
  }
});

let currentAbilityIndex = 0;

// Click event
abilitiesTags.addEventListener("click", (event) => {
  const clickedAbility = event.target.closest(".abilityTag");

  if (clickedAbility) {
    const abilityName = clickedAbility.textContent.trim().toLowerCase();
    abilitySelected(abilityName);

    const abilities = Array.from(abilitiesTags.querySelectorAll(".abilityTag"));
    abilities.forEach((ability) => ability.classList.remove("active"));

    clickedAbility.classList.add("active");

    currentAbilityIndex = abilities.indexOf(clickedAbility);
  }
});

// Keyboard navigation
document.addEventListener("keydown", (event) => {
  const abilities = abilitiesTags.querySelectorAll(".abilityTag");

  if (event.key === "a" || event.key === "A") {
    // Navigate left (previous ability)
    currentAbilityIndex = Math.max(0, currentAbilityIndex - 1);

    abilities.forEach((ability) => ability.classList.remove("active"));

    abilities[currentAbilityIndex].classList.add("active");

    const abilityName = abilities[currentAbilityIndex].textContent
      .trim()
      .toLowerCase();
    abilitySelected(abilityName);
  } else if (event.key === "d" || event.key === "D") {
    currentAbilityIndex = Math.min(
      abilities.length - 1,
      currentAbilityIndex + 1
    );

    abilities.forEach((ability) => ability.classList.remove("active"));

    abilities[currentAbilityIndex].classList.add("active");

    const abilityName = abilities[currentAbilityIndex].textContent
      .trim()
      .toLowerCase();
    abilitySelected(abilityName);
  }
});

async function abilitySelected(name) {
  var abilityDescription = await getAbilities(
    `https://pokeapi.co/api/v2/ability/${name}`
  );

  console.log(abilityDescription);

  abilityText.innerHTML = abilityDescription;

  return;
}
