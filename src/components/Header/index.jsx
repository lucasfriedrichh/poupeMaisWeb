import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './header.css'; // Importando o arquivo de estilos CSS
import logo from './logo1-removebg-preview-menor1.png'; // Importando a imagem do logo

export default function Header() {
  return (
    <Navbar variant="dark">
      <Navbar.Brand href="#home">
        <img
          src={logo}
          className="d-inline-block align-top logo"
          alt="Logo"
          style={{ width: '60%' }} // Reduzindo o tamanho da imagem em 20%
        />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Nav>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#conta">Conta</Nav.Link>
          <Nav.Link href="#investimentos">Investimentos</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link href="#sair">Sair</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
