import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './header.css'; // Importando o arquivo de estilos CSS

export default function Header() {
  return (
    <Navbar variant="dark">
      <Navbar.Brand className="logo" href="#home">Meu Site</Navbar.Brand>
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
