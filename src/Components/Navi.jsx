import React from "react";
import Navbar from 'react-bootstrap/NavBar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'
import 'bootstrap/dist/css/bootstrap.min.css';

function Navi() {

    return (
        <div className="Navibar">
<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="/">Finding Your Way</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/adventure">Game</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</div>
    )
}

export default Navi;