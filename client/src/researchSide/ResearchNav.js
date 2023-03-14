import React from 'react'

import { Navbar, Container, Offcanvas, Nav, NavDropdown, Form, Button } from 'react-bootstrap'
import { SiGooglescholar } from 'react-icons/si';
import { BiLogOut } from 'react-icons/bi';

function ResearchNav(props) {
    return (
        <>
            <Navbar style={{ "marginLeft": "20px", "fontSize": "30px" }} bg="light" expand="lg">
                <Container fluid>

                    <Navbar.Brand style={{ "fontSize": "40px" }}><SiGooglescholar /> PCM Portal</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >

                                    {/* Under Thinking  */}
                            {/* <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Applications</Nav.Link> */}
                        </Nav>
                        <Navbar.Text style={{ "fontSize": "20px", "color": "black", "marginLeft": "30px" }} className='justify-content-end me-4'>
                            {props.emailNav} <BiLogOut style={{ "fontSize": "30px" }} />
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default ResearchNav;