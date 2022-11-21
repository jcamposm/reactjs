import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/NavBar.css'

const NavBar = () => {
  return (
  <div>
  <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse class="nave" id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link href="#inicio"><p>Inicio</p></Nav.Link>
        <Nav.Link href="#quienes-somos"><p>Quienes Somos</p></Nav.Link>
        <NavDropdown class="nave" title="Productos" id="basic-nav-dropdown">
          <NavDropdown.Item href="#gabinetes">Gabinetes</NavDropdown.Item>
          <NavDropdown.Item href="#memorias">
            Memorias RAM 
          </NavDropdown.Item>
          <NavDropdown.Item href="#cpus">Procesadores</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#accesorios">
            Accesorios
          </NavDropdown.Item>
          <NavDropdown.Item href="#perifericos">
            Perifericos
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#contacto"><p>Contactos</p></Nav.Link>
        <CartWidget />
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</div>
  )
};

export default NavBar;