import React, { Component } from 'react';
import './App.css';
import SearchPokemon from './SearchPokemon/SearchPokemon';
import PokemonInfo from './PokemonInfo/PokemonInfo';
import Pokedex from 'pokedex-promise-v2';
import Nav from './Nav/Nav';
const P = new Pokedex() 

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
       seachFor: '',
       pokemon: {
         name: '',
         height: '',
         weight: '',
         image: '',
         moves: []
       }
    }
  }

  handleChange = (e) => { // get's called each time something is typed and sets state
    console.log(e.target.value, 'state of target value inside handleChange')
    this.setState({searchFor: e.target.value})
  }
  
  componentDidMount() {
    console.log('check')
  }
  handleSubmit = (e) => { // once the submit button is clicked we fetch data with the value of state
    e.preventDefault();
    const pokemon = this.state.searchFor
    console.log(this.state.pokemon, 'inside handleSubmit')
    if(pokemon === undefined) {
      return null;
    } else {
      P.getPokemonByName(pokemon.toLocaleLowerCase())
      .then(pokemonData => {
        console.log(pokemonData)
        const pokemonName = pokemonData.name;
        const pokemonHeight = pokemonData.height;
        const pokemonWeight = pokemonData.weight;
        const pokemonSprite = pokemonData.sprites.front_default;
        const pokemonMoves = [];
        pokemonData.moves.forEach(move => { // Pushes all the moves into pokemonMoves array.
          return pokemonMoves.push(move.move.name);
        })
        this.setState({
          pokemon: {
            name: pokemonName,
            height: pokemonHeight,
            weight: pokemonWeight,
            image: pokemonSprite,
            moves: [...pokemonMoves]
          }
        })
      }).catch(err => {
        console.log('OH NOOO ', err)
      })
    }
   
  }

  render() {
    return (
      <div className="App container" >
        <Nav />
        <SearchPokemon onChange={this.handleChange} onSubmit = {this.handleSubmit} variant='outline-primary'/>
        <PokemonInfo pokemonData = {this.state.pokemon}/>
      </div>
    );
  }
}

export default App;
