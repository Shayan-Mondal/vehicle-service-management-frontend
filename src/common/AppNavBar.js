import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export function AppNavBar() {
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Navbar.Brand as={Link} to="/">
        VEHICLE_SERVICE_MANAGEMENT
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/vehicle">
            Vehicle
          </Nav.Link>
          <Nav.Link as={Link} to="/enquiry">
            Enquiry
          </Nav.Link>
          <Nav.Link as={Link} to="/servicerequest">
            Service Request
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
