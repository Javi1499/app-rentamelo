import React from 'react';
import { Form, Navbar, Button, NavDropdown, Nav, FormControl} from 'react-bootstrap';
const NavbarC = () => {
    return ( 
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/">Rentamelo</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/" >Inicio</Nav.Link>
      <Nav.Link href="/agregar-producto">Productos</Nav.Link>
      <NavDropdown title="Tu cuenta" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Mis productos</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Mis Rentas </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Mis datos</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
     );
}
 
export default NavbarC;