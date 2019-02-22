import React, { Component } from 'react';
import './CSS/PokemonInfo.css'
import ListGroup from 'react-bootstrap/ListGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';

class PokemonInfo extends Component{
  constructor(props) {
    super(props)
    this.state = {
      checked: false
    }
  }
  clicked = () => {
    if (this.props.pokemonData.moves.length < 1) {
      document.querySelector('.btn').classList.add('disabled');
    }
    if (this.props.pokemonData.moves.length > 1) {
      document.querySelector('.btn').classList.remove('disabled');
      if (this.state.checked) {
        return this.setState({checked: false})
      } else {
        return this.setState({checked: true})
      }
    }
  }

    render() {
      const {name, image, height, weight, moves} = this.props.pokemonData;
      console.log(moves);
    return (
        <div>
            <ListGroup>
                <ListGroup.Item> <img src={image}/></ListGroup.Item>
                <ListGroup.Item>  Name: {name}</ListGroup.Item>
                <ListGroup.Item> Weight: {weight}</ListGroup.Item>
                <ListGroup.Item> Height: {height}</ListGroup.Item>
            </ListGroup>
            <h1>Moves</h1>
            <ListGroup className="list">
                {this.state.checked ? moves.map((move,key) => {
                      return <ListGroup.Item className="list-child"
                          key={key}>{move}
                      </ListGroup.Item>
                    }
                ): moves.map((move,key) => {
                    if (key < 3) {
                      return <ListGroup.Item className="list-child"
                          key={key}>{move}
                      </ListGroup.Item>
                    }
                  }
                )}
            </ListGroup>
            <ButtonToolbar>
            <Button className="btn" onClick={this.clicked}>{this.state.checked === false ? "Show all": "Close all"}</Button>
            </ButtonToolbar>
     </div>
    )
  }
}


export default PokemonInfo;
