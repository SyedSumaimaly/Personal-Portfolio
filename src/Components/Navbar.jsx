import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavDropdown from 'react-bootstrap/NavDropdown';


// function Header() {
//   return (
//     <>
//        <Navbar className='nav' variant="dark">
//         <Container>
//         <Navbar.Brand className='Logo' href="/">Syed Sumaim Ali</Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link href ="/" >Home</Nav.Link>
//             <Nav.Link href="/Resume" >Resume</Nav.Link>
//             <Nav.Link href="/Portfolio" >Portfolio</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar> 
//     </>
//   );
// }

// export default Header;

function Header() {
  return (
    <Navbar className='nav' collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand className='Logo' href="/">Syed Sumaim Ali</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" >Home</Nav.Link>
            <Nav.Link href="/Resume" >Resume</Nav.Link>
            <Nav.Link href="/Portfolio" >Portfolio</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;