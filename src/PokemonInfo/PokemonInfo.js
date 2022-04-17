import React, { useState } from "react";
import "./CSS/PokemonInfo.css";
import ListGroup from "react-bootstrap/ListGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";

const PokemonInfo = ({ pokemonData }) => {
  const [checked, setChecked] = useState(false);

  const clicked = () => {
    if (pokemonData.moves.length < 1) {
      document.querySelector(".btn").classList.add("disabled");
    }
    if (pokemonData.moves.length > 1) {
      document.querySelector(".btn").classList.remove("disabled");
      if (checked) {
        return setChecked(false);
      } else {
        return setChecked(true);
      }
    }
  };

  const { name, image, height, weight, moves } = pokemonData;
  console.log(moves);

  return (
    <div>
      <ListGroup>
        <ListGroup.Item>
          {" "}
          <img src={image} alt="" />
        </ListGroup.Item>
        <ListGroup.Item> Name: {name}</ListGroup.Item>
        <ListGroup.Item> Weight: {weight}</ListGroup.Item>
        <ListGroup.Item> Height: {height}</ListGroup.Item>
      </ListGroup>

      <h1>Moves</h1>
      <ListGroup className="list">
        {checked
          ? moves.map((move, key) => {
              return (
                <ListGroup.Item className="list-child" key={key}>
                  {move}
                </ListGroup.Item>
              );
            })
          : moves.map((move, key) => {
              if (key < 3) {
                return (
                  <ListGroup.Item className="list-child" key={key}>
                    {move}
                  </ListGroup.Item>
                );
              }
            })}
      </ListGroup>

      <ButtonToolbar>
        <Button className="btn" onClick={clicked}>
          {checked === false ? "Show all moves" : "Close all moves"}
        </Button>
      </ButtonToolbar>
    </div>
  );
};

export default PokemonInfo;
