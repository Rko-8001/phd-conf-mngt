// eslint-disable-next-line
import React, { useState } from 'react';

import { Col, Form, Row, Container} from 'react-bootstrap';
function FormInputGenData(props) {


    return (
        <>

            <div style={{ "marginTop": "50px" }}>

                <Container className='mt-3' style={{ "fontSize": "20px" }}>
                    <Form>
                        <p style={{ "fontSize": "26px" }}>General Info: </p>
                        <Row className='mt-3'>
                            <Form.Group as={Col} controlId="formPersMobile">
                                <Form.Label>Mobile No.</Form.Label>
                                <Form.Control name="mobileNo" type="text" placeholder="Mobile No" onChange={props.getGeneralInfo} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formPersAccNo">
                                <Form.Label>Bank A/c No.</Form.Label>
                                <Form.Control name="bankAccNo" type="text" placeholder="12345678901" onChange={props.getGeneralInfo} />
                            </Form.Group>
                        </Row>

                        {/* <Button className="mt-3" variant="primary" type="submit">
                            Submit
                        </Button> */}
                    </Form>

                    <br /> <br />

                    <Form>
                        <p style={{ "fontSize": "26px" }}>Conference Info: </p>
                        <Row className="mt-3">
                            <Form.Group as={Col} controlId="formPersName">
                                <Form.Label>Conference Name:</Form.Label>
                                <Form.Control name="nameOfConference" type="text" placeholder="Defense Seminar"  onChange={props.getConferenceInfo}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formPersMobile">
                                <Form.Label>Venue</Form.Label>
                                <Form.Control name="venueOfConference" type="text" placeholder="Lab 201, CS Block, IIT Ropar" onChange={props.getConferenceInfo}/>
                            </Form.Group >
                        </Row>
                        <Row className="mt-3">
                            <Form.Group as={Col} controlId="formPersName">
                                <Form.Label>Period of Conference:</Form.Label>
                                <Form.Control name="periodOfConference" type="text" placeholder="23/01/2023" onChange={props.getConferenceInfo}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formPersMobile">
                                <Form.Label>Paper(s)/Poster(s) to Present in Conference</Form.Label>
                                <Form.Control name="paperInConference" type="text" placeholder="" onChange={props.getConferenceInfo}/>
                            </Form.Group >
                        </Row>
                    </Form>
                </Container>
            </div>
        </>
    );
};

export default FormInputGenData;