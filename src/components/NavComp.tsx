/* eslint-disable import/no-extraneous-dependencies */
import '../styles/navComp.css';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavComp() {
  return (
    <Navbar expand="md" className="NavComp">
      <Container>
        <Navbar.Brand className="brand">
          <Link className="Brand" to="/">
            Always On Electrician
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle className="burger" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="ms-auto Navi">
            <Link className="SubLink" to="/">
              Home
            </Link>
            <Link className="SubLink" to="/services">
              Services
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
