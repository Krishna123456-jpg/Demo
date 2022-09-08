import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavbarList() {
  return (
    <Navbar bg="primary" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Company Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#service">Service</Nav.Link>
            <NavDropdown title="about" id="basic-nav-dropdown">
              <NavDropdown.Item href="#about">Client</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Company</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Team</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Contact Us</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarList;
