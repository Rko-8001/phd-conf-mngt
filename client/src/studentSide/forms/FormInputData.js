// eslint-disable-next-line
import React, { useState } from 'react';

import { Col, Form, Row, Card, Table, Container, Button } from 'react-bootstrap';
function FormInputGenData(props) {

    const [coa, setCoa] = useState(0);
    const [cocb, setCocb] = useState(0);
    const [coab, setCoab] = useState(0);

    const tableRows = props.tableData.map((info) => {
        return (
            <tr key={info.particular}>
                <th>{info.particular}</th>
                <th>{info.amount}</th>
            </tr>
        );
    });
    return (
        <>

            <div style={{ "marginTop": "50px" }}>

                <Container className='mt-3' style={{ "fontSize": "15px" }}>
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
                                <Form.Control name="nameOfConference" type="text" placeholder="Defense Seminar" onChange={props.getConferenceInfo} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formPersMobile">
                                <Form.Label>Venue</Form.Label>
                                <Form.Control name="venueOfConference" type="text" placeholder="Lab 201, CS Block, IIT Ropar" onChange={props.getConferenceInfo} />
                            </Form.Group >
                        </Row>
                        <Row className="mt-3">
                            <Form.Group as={Col} controlId="formPersName">
                                <Form.Label>Period of Conference:</Form.Label>
                                <Form.Control name="periodOfConference" type="text" placeholder="23/01/2023" onChange={props.getConferenceInfo} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formPersMobile">
                                <Form.Label>Paper(s)/Poster(s) to Present in Conference</Form.Label>
                                <Form.Control name="paperInConference" type="text" placeholder="" onChange={props.getConferenceInfo} />
                            </Form.Group >
                        </Row>
                    </Form>
                    <br /> <br />



                    <Form className='justify-content-start'>
                        <Form.Group as={Col} controlId="finSupport">
                            <Form.Label>Financial support required (if any) from institute fund/ project/ any other (please specify) </Form.Label>
                            <Form.Control name="financialSupport" type="text" placeholder="" onChange={props.getGeneralInfo} />
                        </Form.Group>

                        <br />
                        <Card body>
                            <Row>
                                <Col>
                                    Advance Required:
                                </Col>
                                <Col>
                                    <Form.Check
                                        type="switch"
                                        id="finanaceSupport"
                                        label={props.advance === true ? "Yes" : "No"}
                                        onChange={props.getAdvance}
                                    />
                                </Col>
                            </Row>
                            <br />

                            <div>
                                <Row className="align-items-center">
                                    <Col >
                                        <Form.Group as={Col} controlId="advanceType">
                                            <Form.Label>Particulars</Form.Label>
                                            <Form.Control name="particular" type="text" placeholder='Flight Charges' value={props.rowData.particular} onChange={props.getRowData} />
                                        </Form.Group>
                                    </Col>

                                    <Col >
                                        <Form.Group controlId="advanceAmount">
                                            <Form.Label>Amount (Rs)</Form.Label>
                                            <Form.Control name="amount" type="text" placeholder='8000' value={props.rowData.amount} onChange={props.getRowData} />
                                        </Form.Group>
                                    </Col>

                                    <Col md="auto">
                                        <Button className="mb-2" onClick={props.addRowData}>
                                            Add
                                        </Button>
                                    </Col>
                                </Row>

                                <br />
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Particular</th>
                                            <th>Amount (Rs)</th>
                                        </tr>
                                    </thead>
                                    <tbody>{tableRows}</tbody>
                                </Table>

                                <br /><br />
                            </div>

                        </Card>

                        <br /> <br />
                        <p>Enclosures Attached (Please Tick):</p>
                        <Form.Check aria-label="option 1" label="Copy of Acceptance." value={coa} checked={coa === 1} onChange={(e) => {
                            if (coa === 1) {
                                setCoa(0);
                            }
                            else {
                                setCoa(1);
                            }
                        }} />
                        <Form.Check aria-label="option 1" label="Copy of Conference Brochure." value={cocb} checked={cocb === 1} onChange={(e) => {
                            if (cocb === 1) {
                                setCocb(0);
                            }
                            else {
                                setCocb(1);
                            }
                        }} />
                        <Form.Check aria-label="option 1" label="Copy of Abstract." value={coab} checked={coab === 1} onChange={(e) => {
                            if (coab === 1) {
                                setCoab(0);
                            }
                            else {
                                setCoab(1);
                            }
                        }} />
                    </Form>
                    <br />
                </Container>
                <br /> <br />
                <br /> <br />
            </div>
        </>
    );
};

export default FormInputGenData;