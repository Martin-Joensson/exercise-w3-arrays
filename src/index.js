const pokemon = [
  "Bulbasaur",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Metapod",
  "Weedle",
  "Pikachu",
  "Pidgey",
];

const countThem = () => {
  // print out, in a sentence, how many pokemon I have.
  // like: "I have x pokemon!"
  const numberOfPokemon = pokemon.length;
  console.log(`I have ${numberOfPokemon} pokemon!`);
};
countThem();

const orderThem = () => {
  // order the pokemons alphabetically
  console.log(pokemon.sort());
};
orderThem();

const flipThem = () => {
  // reverse the order of the pokemon
  console.log(pokemon.reverse());
};
flipThem();

const makeThemBig = () => {
  // print the pokemon in UPPERCASE letters
  const uppercasePokemon = pokemon.map((x) => x.toUpperCase());
  console.log(uppercasePokemon);
};
makeThemBig();

const onlyTheBs = () => {
  // only print the pokemon that starts with B
  const startB = pokemon.filter((x) => x[0] === "B");
  console.log(startB);
};

onlyTheBs()

const notTheCs = () => {
  // remove all pokemon that starts with C
  const noC = pokemon.filter((x) => x[0] != "C");
  console.log(noC);

};
notTheCs()

const nameAndIdThanks = () => {
  // print out name and index of all pokemon
  // like: number x - Squirtle
};

const catchPokemon = (name) => {
  // add a pokemon with a name of your choice to the list,
  // print the list so you see its there.
};

const didICatchIt = (name) => {
  // check the pokemon to see if a specific pokemon is in the array
};

const addInThirdPlace = () => {
  // add the pokemon "Clefairy" in the third place of the array
  // print the list so you see its there.
};

// ***BONUS***
const theLongestName = () => {
  // find the pokemon with the longest name
};
