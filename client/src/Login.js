import React, { useState } from 'react';
import { Form, Button, Container, Navbar, Card, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function Login(props) {

    const navigate = useNavigate();


    //                      States Maintained
    const [emailId, setEmailId] = useState("");
    const [otpLogin, setOtp] = useState("");

    //                       Updating States Function
    const getEmailId = e => {
        setEmailId(e.target.value);
    }
    const getOtp = e => {
        setOtp(e.target.value);
    }

    //                      Post Function Maintained
    // request OTP
    const requestOtp = async (e) => {
        e.preventDefault();
        const mssg = "otp";
        const otp = otpLogin;
        const email = emailId;
        const res = await fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, mssg, otp })
        });

        //logic
        // const data = await res.json();

        if (res.status === 422) {
            window.alert(" Galat hai");
        }
        else {
            window.alert("OTP Sent to your " + email);
        }
    }

    // login logic
    const requestLogIn = async (e) => {
        e.preventDefault();
        const mssg = "login";
        const email = emailId;
        const otp = otpLogin;

        const res = await fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, mssg, otp })
        });
        const data = await res.json();
        const role = data.split(' ')[0];
        // const id = data.split(' ')[1];


        // console.log(role);
        // console.log(id);
        // console.log(data);

        if (res.status === 422) {
            window.alert("Wrong OTP Entered!! Try Again..");
        }
        else {
            props.getEmailIdLogin(emailId);
            if (role === "0") {
                navigate('/studentLogin');
            }
            else if (role === "1") {
                navigate('/facultyLogin');
            }
            else if (role === "2") {
                navigate('/adminLogin');
            }
            else if (role === "3") {
                navigate('/researchLogin');
            }
            else {

            }
        }
    }

    const loginWithGoogle = async (e) => {
        console.log("Hello");
        e.preventDefault();
        const res = await fetch("/auth", {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
                'Access-Control-Request-Method': 'GET, POST, DELETE, PUT, OPTIONS'
            }
        });

        const data = await res.json();
        const role = data.split(' ')[0];
        const email = data.split(' ')[1];
        console.log(email);
        if (res.status === 200) {
            if (role === "0") {
                navigate('/studentLogin');
            }
            else if (role === "1") {
                navigate('/facultyLogin');
            }
            else if (role === "2") {
                navigate('/adminLogin');
            }
            else {
            }
        }
        else {
            window.alert("Error! Try Again..");
        }
    }


    return (
        <>
            {/* <div style={{"background": "lightgrey"}}> */}
            <div>
                <Navbar bg="dark" variant="dark" >
                    <Navbar.Brand style={{ "marginLeft": "10px", "fontSize": "36px", "color": "white" }}> PCMP :: PhD Conference Management Portal </Navbar.Brand>
                </Navbar>
            </div>

            <Container>
                <br />
                <p style={{ "fontSize": "19px", "color": "red" }} className="text-center">By proceeding with the login you agree to the terms of use of this service.</p>
                <Row style={{ "marginTop": "20px" }}>
                    <Col>
                        <Card>
                            <Card.Header style={{ "fontSize": "24px" }}>Login with your IIT Ropar Google ID</Card.Header>
                            <Card.Body>

                                <Card.Text>
                                    <Button onClick={loginWithGoogle}>Sign In with Google ID</Button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card >
                            <Card.Header style={{ "fontSize": "24px" }}>Login with PCMP credentials</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <p style={{ "marginTop": "5px", "fontSize": "19px", "textAlign": "center", "color": "grey" }}>Please enter your email and OTP to Log In</p>

                                    <Form method="POST">


                                        <Form.Group className="mb-3" controlId="formGroupEmail">
                                            <Form.Label style={{ "fontSize": "18px" }}>Email address</Form.Label>
                                            <Form.Control style={{ "fontSize": "17px" }} type="email" placeholder="Enter email" onChange={getEmailId} />
                                            <Form.Text style={{ "fontSize": "15px" }} id="emailHelpBlock" muted>
                                                Use your Institute Id to Login!
                                            </Form.Text>
                                        </Form.Group>


                                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                            <Button style={{ "fontSize": "14px" }} variant="secondary" onClick={requestOtp}>Request OTP</Button>
                                        </div>

                                        <Form.Group className="mb-3" controlId="formgroupOtp">
                                            <Form.Label style={{ "fontSize": "18px" }}>OTP: </Form.Label>
                                            <Form.Control style={{ "fontSize": "17px" }} type="text" placeholder="" onChange={getOtp} />
                                            <Form.Text style={{ "fontSize": "15px" }} id="otpHelpBlock" muted>
                                                Enter the Otp you recieve on your email. Please wait until alert pops out!
                                            </Form.Text>
                                        </Form.Group>


                                        <div style={{ display: "flex", justifyContent: "right", alignItems: "right" }}>
                                            <Button style={{ "fontSize": "14px" }} variant="success" onClick={requestLogIn}>Log In</Button>
                                        </div>
                                    </Form>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>



        </>
    )

}

export default Login