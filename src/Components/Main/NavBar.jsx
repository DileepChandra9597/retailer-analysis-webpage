import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavBar = () => {
  return (
    <>
      {/* Navbar Header code */}
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home" style={{ fontWeight: 'bold' }}>
            Retail Brand Software
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Overview</Nav.Link>
            <Nav.Link href="#features">Brand Landscape</Nav.Link>
            <Nav.Link href="#pricing">Optimizer</Nav.Link>
            <Nav.Link href="#simulator">Simulator</Nav.Link>
            <Nav.Link href="#campaign-planner">Campaign Planner</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
