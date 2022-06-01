import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ hight: "2rem" }}>
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <Nav.Link as={Link} to="/" className="text-white fs-3">
                                <FaHome></FaHome>
                            </Nav.Link>
                        </Nav>
                        <Nav className='d-flex justify-content-around align-items-center w-100'>
                            <Nav.Link as={Link} to="/projectReport" className="text-white">Project Report</Nav.Link>
                            <Nav.Link href="#dashboard" className="text-white">Events</Nav.Link>
                            <Nav.Link href="#blog" className="text-white">Blog</Nav.Link>
                            <Nav.Link href="#about" className="text-white">About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;