/* eslint-disable import/no-extraneous-dependencies */
import '../styles/navComp.css';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';

export default function NavComp() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expanded={expanded} expand="md" className="NavComp" id="NavComp">
      <Container>
        <Navbar.Brand className="brand">
          <Link className="Brand" to="/">
            Always On Electrician
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle onClick={() => setExpanded(!expanded)} className="burger" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="ms-auto Navi">
            <Link onClick={() => setExpanded(false)} className="SubLink" to="/">
              Home
            </Link>
            <Link onClick={() => setExpanded(false)} className="SubLink" to="/services">
              Services
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
