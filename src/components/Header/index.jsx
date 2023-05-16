import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './header.css'; // Importando o arquivo de estilos CSS
import logo from './logo1-removebg-preview-menor1.png'; // Importando a imagem do logo
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
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
          <Nav.Link onClick={() => navigate('/dashboard')} >Home</Nav.Link>
          <Nav.Link onClick={() => navigate('/account')}>Conta</Nav.Link>
          <Nav.Link>Investimentos</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link onClick={() => navigate('/')}>Sair</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
