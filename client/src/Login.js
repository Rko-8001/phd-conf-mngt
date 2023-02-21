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
            else {
                navigate('/adminLogin');
            }
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


                <Row style={{ "marginTop": "20px" }}>
                    <Col>
                        <Card>
                            <Card.Header style={{"fontSize": "24px"}}>Login with your IIT Ropar Google ID</Card.Header>
                            <Card.Body>

                                <Card.Text>
                                    Work under Progress..
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card >
                            <Card.Header style={{"fontSize": "24px"}}>Login with PCMP credentials</Card.Header>
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