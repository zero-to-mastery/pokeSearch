import React, { Component } from 'react';
import './CSS/PokemonInfo.css'
import ListGroup from 'react-bootstrap/ListGroup';
const PokemonInfo = (props) => {
    const {name, image, height, weight, moves} = props.pokemonData;
    return (
        <div>
            <ListGroup>
                <ListGroup.Item> <img src={image}/></ListGroup.Item>
                <ListGroup.Item>  Name: {name}</ListGroup.Item>
                <ListGroup.Item> Weight: {weight}</ListGroup.Item>
                <ListGroup.Item> Height: {height}</ListGroup.Item>
            </ListGroup>
            <h1>Moves</h1>
            <ListGroup>
                {moves.map((move,key) => {
                    return <ListGroup.Item 
                        key={key}>{move}
                    </ListGroup.Item>
                })}
            </ListGroup>
     </div>

     
    )
}   

export default PokemonInfo;