import React from 'react';
import Header from '../Header/Header';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { BsFillTelephoneFill, BsWhatsapp, BsFillQuestionCircleFill, BsInstagram } from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';
import { FaFacebookF } from 'react-icons/fa';
import { GrLinkedinOption } from 'react-icons/gr';
import '../../Home/HomePage/HomePage.css';
import ProjectReport from '../../ProjectReport/ProjectReport';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';


const HomePage = () => {
    return (
        <div>
            <div className='header-upper'>
                <Navbar collapseOnSelect expand="lg" variant="dark" style={{ backgroundColor: "#00509d", height: "3rem" }}>
                    <Container>
                        <Nav className="me-auto">
                            <li className='text-white' style={{ marginRight: "0.5rem" }}>
                                <BsFillTelephoneFill style={{ fontSize: "0.7rem", marginRight: '0.4rem' }}></BsFillTelephoneFill>
                                <span style={{ fontSize: "0.8rem" }}>+112345678</span> /
                            </li>

                            <li className='text-white'>
                                <BsWhatsapp style={{ fontSize: "0.8rem", marginRight: '0.4rem' }}></BsWhatsapp>
                                <span style={{ fontSize: "0.8rem" }}>+112345678</span>
                            </li>

                            <span style={{ marginLeft: "1rem", marginRight: "1rem", color: "gray" }}>|</span>

                            <li className='text-white'>
                                <IoMdMail style={{ fontSize: "0.9rem", marginRight: '0.4rem' }}></IoMdMail>
                                <span style={{ fontSize: "0.8rem" }}>Email: info@gmail.com</span> / <span style={{ fontSize: "0.8rem" }}>system@gmail.com</span>
                            </li>
                        </Nav>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ms-auto">
                                <li className='text-white' style={{ marginRight: "0.5rem" }}>
                                    <BsFillQuestionCircleFill style={{ fontSize: "0.8rem", marginRight: '0.4rem' }}></BsFillQuestionCircleFill>
                                    <span style={{ fontSize: "0.8rem", marginRight: "2rem" }}>Have any questions?</span>

                                    <FaFacebookF style={{ fontSize: "0.8rem", marginRight: '0.4rem' }}></FaFacebookF>

                                    <BsInstagram style={{ fontSize: "0.8rem", marginRight: '0.4rem' }}></BsInstagram>

                                    <GrLinkedinOption style={{ fontSize: "0.8rem", marginRight: '0.4rem' }}></GrLinkedinOption>
                                </li>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>

            <div>
                <Navbar collapseOnSelect expand="lg" bg="white" variant="dark">
                    <Container>
                        <Navbar.Brand as={Link} to="/" style={{ fontWeight: "bold", fontSize: "2rem", textTransform: "uppercase" }}>
                            <span style={{ color: "#e36414" }}>Unique</span>
                            <span style={{ color: "#3a0ca3" }}> Site</span>
                        </Navbar.Brand>
                    </Container>
                </Navbar>
            </div>

            <Header></Header>
            <ProjectReport></ProjectReport>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;