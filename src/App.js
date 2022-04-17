import React, { useEffect, useState } from "react";
import "./App.css";
import SearchPokemon from "./SearchPokemon/SearchPokemon";
import PokemonInfo from "./PokemonInfo/PokemonInfo";
import Pokedex from "pokedex-promise-v2";
import Nav from "./Nav/Nav";
const P = new Pokedex();

const App = () => {
  const [searchFor, setSearchFor] = useState("");
  const [pokemon, setPokemon] = useState({
    name: "",
    height: "",
    weight: "",
    image: "",
    moves: [],
  });

  const handleChange = (e) => {
    // get's called each time something is typed and sets state
    console.log(e.target.value, "state of target value inside handleChange");
    setSearchFor(e.target.value);
  };

  useEffect(() => {
    console.log("check");
  }, []);

  const handleSubmit = (e) => {
    // once the submit button is clicked we fetch data with the value of state
    e.preventDefault();

    const pokemon = searchFor;
    console.log(pokemon, "inside handleSubmit");
    if (pokemon === undefined) {
      return null;
    } else {
      P.getPokemonByName(pokemon.toLocaleLowerCase())
        .then((pokemonData) => {
          console.log(pokemonData);
          const pokemonName = pokemonData.name;
          const pokemonHeight = pokemonData.height;
          const pokemonWeight = pokemonData.weight;
          const pokemonSprite = pokemonData.sprites.front_default;
          const pokemonMoves = [];
          pokemonData.moves.forEach((move) => {
            // Pushes all the moves into pokemonMoves array.
            return pokemonMoves.push(move.move.name);
          });
          setPokemon({
            name: pokemonName,
            height: pokemonHeight,
            weight: pokemonWeight,
            image: pokemonSprite,
            moves: [...pokemonMoves],
          });
        })
        .catch((err) => {
          console.log("OH NOOO ", err);
        });
    }
  };

  return (
    <div className="App container">
      <Nav />
      <SearchPokemon
        onChange={handleChange}
        onSubmit={handleSubmit}
        variant="outline-primary"
      />
      <PokemonInfo
        pokemonData={pokemon}
        // checkMoves={pokemon.moves}
      />
    </div>
  );
};

export default App;
