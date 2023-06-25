import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Link
} from "react-router-dom";





function Header() {
  return (
    <Navbar className='nav Card_antD' collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand className='Logo' href="/">Syed Sumaim Ali</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/" className='Links'>Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/Skills" className='Links'>Skills & Tools</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/Portfolio" className='Links'>Portfolio</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;