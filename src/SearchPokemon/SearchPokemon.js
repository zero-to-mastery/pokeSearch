import React from 'react';
import './CSS/SearchPokemon.css'
import Form from 'react-bootstrap/Form'
const SearchPokemon = (props) => {
        return (
            /*
           <form onSubmit={props.onSubmit}>
                <label>
                    Pokemon:
                    <input type='text' value={props.pokemon} onChange={props.onChange} />
                    <input type='submit' value='Submit' />
                </label>
           </form>
           */
            <Form onSubmit={props.onSubmit}>
                <Form.Label>Search Pokemon</Form.Label>
                <Form.Control type='text' placeholder='Pikachu' value={props.pokemon} onChange={props.onChange}/>
            </Form>
        )
    }
    
export default SearchPokemon;