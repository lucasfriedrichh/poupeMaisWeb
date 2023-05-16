import { Container, Nav, Navbar } from "react-bootstrap";

import logoApp from '../../images/logo.png'

import './header.css'

export default function Header() {
    return (
        <header>
            <Navbar expand="md">
                <Container>
                    <Navbar.Brand>
                        <img src={logoApp} alt="Logo Central" width="70" />
                    </Navbar.Brand>

                    <Navbar.Toggle className="toggle-icon">
                        <i className="fa fa-bars" style={{ color: 'white' }} />
                    </Navbar.Toggle>

                    <Navbar.Collapse className="justify-content-end">
                        <Nav>
                            <Nav.Link href="#">Departamento</Nav.Link>
                            <Navbar.Text className="divisor" />
                            <Nav.Link href="#">Sair</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}