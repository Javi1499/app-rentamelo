import React from 'react';
import { Form, Navbar, Button, NavDropdown, Nav, FormControl } from 'react-bootstrap';
import { deleteToken, getToken } from "../helpers";

const NavbarC = () => {
  return (
    <Navbar className="bg-warning" expand="lg">
      <Navbar.Brand href="/">RENTAMELO</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        {getToken() ?
          <Nav className="mr-auto">
            <Nav.Link href="/" >Inicio</Nav.Link>
            <Nav.Link href="/agregar-producto">Agregar producto</Nav.Link>
            <NavDropdown title="Tu cuenta" id="basic-nav-dropdown">
              <NavDropdown.Item href="/mis-productos/true">Mis productos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Mis Rentas </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Mis datos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/login" onClick={() => deleteToken()}>Cerrar sesion</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          :
          <Nav className="mr-auto">
            <Nav.Link href="/" >Inicio</Nav.Link>
            <Button variant="success" style={{marginRight:"2rem"}} href="/login">Login</Button>
           <Button variant="primary" href="/signup">Registrarse</Button>
          </Nav>
        }

        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarC;