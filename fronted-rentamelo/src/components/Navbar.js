import React from 'react';
import { Navbar, Button, NavDropdown, Nav } from 'react-bootstrap';
import { deleteToken, getToken } from "../helpers";
const url = "http://localhost:3000"
// const urlServidor = "http://localhost:4006"
const NavbarC = () => {
  return (
    <Navbar className="bg-warning" expand="lg">
      <Navbar.Brand href={`${url}/`}>RENTAMELO</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        {getToken() ?
          <Nav className="mr-auto">
            <Nav.Link href={`${url}/`} >Inicio</Nav.Link>
            <Nav.Link href={`${url}/agregar-producto`}>Agregar producto</Nav.Link>
            <NavDropdown title="Tu cuenta" id="basic-nav-dropdown">
              <NavDropdown.Item href={`${url}/mis-productos`}>Mis productos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Mis Rentas </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Mis datos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href={`/login`} onClick={() => deleteToken()}>Cerrar sesion</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          :
          <Nav className="mr-auto">
            <Nav.Link href="/" >Inicio</Nav.Link>
            <Button variant="success" style={{ marginRight: "2rem" }} href="/login">Login</Button>
            <Button variant="primary" href={`${url}/signup`}>Registrarse</Button>
          </Nav>
        }
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarC;