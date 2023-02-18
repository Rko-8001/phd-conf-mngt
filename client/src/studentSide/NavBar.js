import React from 'react';
import { Link } from 'react-router-dom';
import { SiGooglescholar } from 'react-icons/si';
import { Nav, Navbar} from 'react-bootstrap';
function NavBar(props) {
    return (
        <>
            <Navbar style={{ "marginLeft": "20px", "fontSize": "30px" }} bg="light" expand="lg">
                <Navbar.Brand style={{ "fontSize": "40px" }}><SiGooglescholar /> PCM Portal</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Item>
                            <Link to="/studentLogin" className="nav-link">Home</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/studentLogin/formFill" className="nav-link">Fill Form</Link>
                        </Nav.Item>
                    </Nav>
                    <Navbar.Text style={{"fontSize": "20px", "color": "black"}}className='justify-content-end me-4'>
                        Signed in as: {props.emailNav}
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default NavBar;