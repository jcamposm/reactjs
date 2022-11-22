import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/NavBar.css'
import './css/NavBar.css'

const NavBar = () => {
  const categorias = [{id: 1, nombre: "Gabinetes"},{id: 2, nombre: "Memorias"},{id: 3, nombre: "CPUS"},{id: 4, nombre: "Accesorios"},{id: 5, nombre: "Periféricos"}]
  categorias.push({id:6, nombre: "Discos Duros"})
  console.log(categorias)
  return (
  <div>
  <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home"><h2>Turbo-Gamer</h2></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link href="#inicio">Inicio</Nav.Link>
        <Nav.Link href="#quienes-somos">Quienes Somos</Nav.Link>
        <NavDropdown title="Productos" id="basic-nav-dropdown">
        {categorias.map((categoria) => {return <NavDropdown.Item key={categoria.id}>{categoria.nombre}</NavDropdown.Item>})}
        </NavDropdown>
        <Nav.Link href="#contacto">Contactos</Nav.Link>
        <CartWidget className="carrito" />
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</div>
  )
};

export default NavBar;