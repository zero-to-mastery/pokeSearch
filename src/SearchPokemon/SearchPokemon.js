import React from "react";
import "./CSS/SearchPokemon.css";
import Form from "react-bootstrap/Form";

const SearchPokemon = (props) => {
  return (
    <Form onSubmit={props.onSubmit}>
      <Form.Label>Search Pokemon</Form.Label>

      <Form.Control
        type="text"
        placeholder="e.g. Pikachu"
        value={props.pokemon}
        onChange={props.onChange}
      />
    </Form>
  );
};

export default SearchPokemon;
