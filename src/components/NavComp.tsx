/* eslint-disable import/no-extraneous-dependencies */
import '../styles/navComp.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavComp() {
  return (
    <Navbar expand="md" className="NavComp">
      <Container>
        <Navbar.Brand className="brand" href="#home">
          Always On Electrician
        </Navbar.Brand>
        <Navbar.Toggle className="burger" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link className="link" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="link" href="#link">
              Link
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
