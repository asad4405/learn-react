import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Navbar, Nav, Container, NavDropdown, Row, Col, Button } from "react-bootstrap";

const Header = () => {
  return (
    <>
      {/* Top Navbar */}
      <Navbar expand="lg" bg="dark" variant="dark" className="py-2">
        <Container>
          <Navbar.Brand href="#">MyShop</Navbar.Brand>

          <Navbar.Toggle aria-controls="main-navbar" />

          <Navbar.Collapse id="main-navbar">
            <Nav className="ms-auto align-items-lg-center">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">Shop</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>

              <NavDropdown title="Account" id="account-dropdown">
                <NavDropdown.Item href="#login">Login</NavDropdown.Item>
                <NavDropdown.Item href="#register">Register</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#profile">Profile</NavDropdown.Item>
              </NavDropdown>

              <Button variant="warning" className="ms-lg-3 mt-2 mt-lg-0">
                Cart (0)
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Category Bar */}
      <div style={{ background: "#f8f9fa", borderBottom: "1px solid #ddd" }}>
        <Container>
          <Nav className="py-2 justify-content-center">
            <Nav.Link href="#">Electronics</Nav.Link>
            <Nav.Link href="#">Fashion</Nav.Link>
            <Nav.Link href="#">Home & Living</Nav.Link>
            <Nav.Link href="#">Beauty</Nav.Link>
            <Nav.Link href="#">Sports</Nav.Link>
            <Nav.Link href="#">Grocery</Nav.Link>
          </Nav>
        </Container>
      </div>

      
    </>
    )
}

export default Header;
