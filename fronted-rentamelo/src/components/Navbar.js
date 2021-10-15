import React from 'react';
import { Navbar, Button, NavDropdown, Nav } from 'react-bootstrap';
import { deleteToken, getToken } from "../helpers";
// const url = "http://localhost:3000"
// const urlServidor = "http://localhost:4006"
const NavbarC = () => {
  return (
    <Navbar className="bg-warning" expand="lg">
      <Navbar.Brand href={`/`}>RENTAMELO</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        {getToken() ?
          <Nav className="mr-auto">
            <Nav.Link href={`/`} >Inicio</Nav.Link>
            <Nav.Link href={`/agregar-producto`}>Agregar producto</Nav.Link>
            <NavDropdown title="Mi cuenta" id="basic-nav-dropdown">
              <NavDropdown.Item href={`/mis-productos`}>Mis productos</NavDropdown.Item>
              <NavDropdown.Item href="/rentas">Mis Rentas </NavDropdown.Item>
              <NavDropdown.Item href="/perfil">Mis datos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href={`/login`} onClick={() => deleteToken()}>Cerrar sesion</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          :
          <Nav className="mr-auto">
            <Nav.Link href="/" >Inicio</Nav.Link>
            <Button variant="success" style={{ marginRight: "2rem" }} href="/login">Login</Button>
            <Button variant="primary" href={`/signup`}>Registrarse</Button>
          </Nav>
        }
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarC;