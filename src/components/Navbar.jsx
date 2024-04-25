import React, { Component } from 'react'
import '../App.css'
import './Navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function BasicExample() {
    return (
        <>
      <Navbar expand="lg" bg="opacity-0" data-bs-theme="dark" className='navbar'>
        <Container>
        

          <Navbar.Brand className='brandname d-flex align-items-center 'href="#home">KYOMU</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Servicios</Nav.Link>
              <Nav.Link href="#link">Projectos</Nav.Link>
              <Nav.Link href="#home">Sobre Nosotros</Nav.Link>
              <Nav.Link href="#link">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className='banner'>
        <img src="/descarga.gif" alt="" />
    </div>
      </>
    );
  }

export default BasicExample


