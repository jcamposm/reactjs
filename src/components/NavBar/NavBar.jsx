import CartWidget from '../CartWidget/CartWidget.jsx'
import { NavLink, Link } from "react-router-dom";
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/NavBar.css'
import Logo from './logo/Logo.jsx'


const NavBar = () => {

  return (
  <div>
  <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand><Link to={'/'}><Logo /></Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
      <NavLink className={({ isActive }) => `nav-link fw-bolder ${isActive ? 'actives' : ''}`} to={"/"} end> Inicio</NavLink>
      <NavLink className={({ isActive }) => `nav-link  fw-bolder ${isActive ? 'actives' : ''}`} to={"/somos"} end>Quienes Somos</NavLink>
        <NavDropdown title="Productos" id="basic-nav-dropdown" className="fw-bolder">
        <NavLink className={({ isActive }) => `nav-link activesDropdown2 fw-normal text-dark dropdown-item  ${isActive ? 'activesDropdown' : ''}`} to={"categoria/motherboards"} > Placas Madres </NavLink>
        <NavLink className={({ isActive }) => `nav-link activesDropdown2 fw-normal text-dark ${isActive ? 'activesDropdown' : ''}`} to={"categoria/gpu"} >Tarjetas de Video</NavLink>
        <NavLink className={({ isActive }) => `nav-link activesDropdown2 fw-normal text-dark ${isActive ? 'activesDropdown' : ''}`} to={"categoria/perifericos"} >Periféricos</NavLink>
        <NavLink className={({ isActive }) => `nav-link activesDropdown2 fw-normal text-dark ${isActive ? 'activesDropdown' : ''}`} to={"categoria/memorias"} >Memorias</NavLink>
        <NavLink className={({ isActive }) => `nav-link activesDropdown2 fw-normal text-dark ${isActive ? 'activesDropdown' : ''}`} to={"categoria/procesadores"} >Procesadores</NavLink>
        <NavLink className={({ isActive }) => `nav-link activesDropdown2 fw-normal text-dark ${isActive ? 'activesDropdown' : ''}`} to={"categoria/discosduros"} >Discos Duros</NavLink>
        </NavDropdown>
        <NavLink className={({ isActive }) => `nav-link fw-bolder ${isActive ? 'actives' : ''}`} to={"/contacto"}>Contacto </NavLink>
        <div><CartWidget className="carrito"/></div>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</div>
  )
};

export default NavBar