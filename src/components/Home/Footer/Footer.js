import React from 'react';
import { BsFillTelephoneFill, BsWhatsapp, BsInstagram } from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';
import { FaFacebookF } from 'react-icons/fa';
import { GrLinkedinOption } from 'react-icons/gr';
import { Container } from 'react-bootstrap';
import '../Footer/Footer.css';

const Footer = () => {
    return (
        <div className='mt-5'>
            <footer className='footer'>
                <Container>
                    <div className='d-flex justify-content-around footer-icons' >
                        <p className='text-white' style={{ marginBottom: "0px" }}>
                            <IoMdMail style={{ fontSize: "2.3rem", marginRight: '0.6rem', backgroundColor: "#4361ee", padding: "0.6rem", borderRadius: "50px", color: "white" }}></IoMdMail>
                            <span style={{ fontSize: "0.8rem" }}>info@gmail.com</span> / <span style={{ fontSize: "0.8rem" }}>system@gmail.com</span>
                        </p>

                        <p className='text-white' style={{ marginRight: "0.5rem", marginBottom: "0px" }}>
                            <BsFillTelephoneFill style={{ fontSize: "2.1rem", marginRight: '0.6rem', backgroundColor: "#4361ee", padding: "0.6rem", borderRadius: "50px", color: "white" }}></BsFillTelephoneFill>
                            <span style={{ fontSize: "0.8rem", marginRight: "0.6rem", }}>+112345678</span> /

                            <BsWhatsapp style={{ fontSize: "2.1rem", marginRight: '0.6rem', marginLeft: '0.8rem', backgroundColor: "#4361ee", padding: "0.6rem", borderRadius: "50px", color: "white" }} ></BsWhatsapp>
                            <span style={{ fontSize: "0.8rem" }}>+112345678</span>
                        </p>

                        <p className='text-white' style={{ marginRight: "0.5rem", marginBottom: "0px" }}>

                            <FaFacebookF style={{ fontSize: "2.2rem", marginRight: '0.6rem', backgroundColor: "#4361ee", padding: "0.6rem", borderRadius: "50px", color: "white" }} ></FaFacebookF>

                            <BsInstagram style={{ fontSize: "2.2rem", marginRight: '0.6rem', backgroundColor: "#4361ee", padding: "0.6rem", borderRadius: "50px", color: "white" }}></BsInstagram>

                            <GrLinkedinOption style={{ fontSize: "2.2rem", marginRight: '0.6rem', backgroundColor: "#4361ee", padding: "0.6rem", borderRadius: "50px", color: "white" }}></GrLinkedinOption>
                        </p>
                    </div>
                </Container>
                <div className='extra mb-3'>

                </div>
                <Container>
                    <div>
                        <small className='text-white'>Copyright {new Date().getFullYear()} Unique Site</small>
                    </div>
                </Container>
            </footer>
        </div >
    );
};

export default Footer;