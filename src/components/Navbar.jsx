import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";

const Mainbar = ({ setCategory }) => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" style={{ color: "white" }}>
        <Container>
          <Navbar.Brand href="#home">
            <Badge bg="warning" text="dark">
              24News
            </Badge>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => setCategory("business")}
              style={{ cursor: "pointer", color: "white" }}
            >
              Business
            </Nav.Link>
            <Nav.Link
              onClick={() => setCategory("entertainment")}
              style={{ cursor: "pointer", color: "white" }}
            >
              Entertainment
            </Nav.Link>
            <Nav.Link
              onClick={() => setCategory("health")}
              style={{ cursor: "pointer", color: "white" }}
            >
              Health
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Mainbar;
