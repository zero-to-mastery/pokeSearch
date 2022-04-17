import React from "react";
import "./CSS/Nav.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Navigation = (props) => {
  return (
    <div>
      <Navbar expand="lg">
        <Navbar.Brand href="#home">
          <img src={require("./Logo/PokeSearch.png")} alt="pokemon logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Pokemon</Nav.Link>
            <Nav.Link href="#link">Item</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
