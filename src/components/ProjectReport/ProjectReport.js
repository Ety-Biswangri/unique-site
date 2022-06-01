import React from 'react';
import { Container, Nav, Navbar, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../ProjectReport/ProjectReport.css';

const ProjectReport = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="dark" style={{ hight: "2rem" }}>
                <Container>
                    {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
                    {/* <Navbar.Collapse id="responsive-navbar-nav"> */}
                    <Nav>
                        <Nav.Link as={Link} to="/" className="text-black fs-3 project-report" style={{ width: "18rem", textAlign: "left", fontWeight: "600" }}>
                            Project Report
                        </Nav.Link>
                    </Nav>
                    <Nav className='d-flex justify-content-around align-items-center w-100'>
                        <Nav.Link href="#dashboard" className="text-black">
                            <span className='text-primary'>Home {">"} </span>
                            <span className='text-muted'> Project Report</span>
                        </Nav.Link>
                    </Nav>
                    {/* </Navbar.Collapse> */}
                </Container>
            </Navbar>

            <Table responsive className='mt-5'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Project Name</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Warehouse Management</td>
                        <td>1 February, 2022</td>
                        <td>28 February, 2022</td>
                        <td className='text-success'>Completed</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Manufacturer Website</td>
                        <td>1 March, 2022</td>
                        <td>30 March, 2022</td>
                        <td className='text-success'>Completed</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Doctors Appointment Management</td>
                        <td>1 April, 2022</td>
                        <td>30 April, 2022</td>
                        <td className='text-primary'>Ongoing</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default ProjectReport;