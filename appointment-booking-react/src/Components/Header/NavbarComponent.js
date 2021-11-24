import React from "react";
import { Container, Row, Col, Navbar, Nav, NavDropdown } from "react-bootstrap";
const NavbarComponent = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/dashboard">Booker</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar" />
                <Navbar.Collapse id="navbar" className="justify-content-end">
                    <Nav className="d-flex">
                        <Nav.Link href="/dashboardd">Dashboard</Nav.Link>
                        <span style={{ width: "50px" }}></span>
                        <NavDropdown title="Hi User" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/profile">
                                Profile
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;
