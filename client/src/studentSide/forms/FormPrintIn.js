import React, {useRef} from 'react';
import {Button, Card, Table, Row, Col, Container, ListGroup} from 'react-bootstrap';
import { useReactToPrint} from 'react-to-print';


function FormPrintIn(props) {

    const componentRef = useRef();
    
    
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'New_Application for Participating in Conference, Workshop, Seminar (within India)',
    })
    
    
    return (
        <>
            <Button variant='outline-dark' onClick={handlePrint}> Print Form</Button>
            <br/> <br/> 


            <Container ref={componentRef} className='mt-3' style={{ "fontSize": "18px" }}>
                <div className="text-center">
                    <h2 >INDIAN INSTITUTE OF TECHNOLOGY ROPAR</h2>
                    <h4>APPLICATION FORM FOR PARTICIPATING IN CONFERENCE/WORKSHOP/SEMINAR</h4>
                    <h4>(within India)</h4>
                </div>
                <br /> <br />


                <div className="text-center" style={{ "fontSize": "30px" }}>PART A: GENERAL INFORMATION</div>
                <br />
                <Row>
                    <Col style={{ "fontSize": "18px" }} sm={7}><pre>1. Name of PhD Scholar    : {props.partA.name}</pre></Col>
                    <Col style={{ "fontSize": "18px" }} sm={5}><pre>Mobile No: {props.partA.mobileNo}</pre></Col>
                </Row>
                <Row>
                    <Col style={{ "fontSize": "18px" }} sm={7}><pre>2. Department/Centre      : {props.partA.dept}</pre></Col>
                    <Col style={{ "fontSize": "18px" }} sm={5}><pre>Email: {props.partA.email}</pre></Col>
                </Row>
                <Row>
                    <Col style={{ "fontSize": "18px" }} sm={7}><pre>3. Entry No.              : {props.partA.entryNo}</pre></Col>
                    <Col style={{ "fontSize": "18px" }} sm={5}><pre>Bank A/c No: {props.partA.bankAccNo}</pre></Col>
                </Row>
                <Row>
                    <Col style={{ "fontSize": "18px" }} ><pre>4. Date of Joining        : {props.partA.doj}</pre></Col>
                </Row>
                <Row>
                    <Col style={{ "fontSize": "18px" }} ><pre>5. Fellowship Category    : {props.partA.fellowshipCat}</pre></Col>
                </Row>
                <Row>
                    <Col style={{ "fontSize": "18px" }} ><pre>6. Area of Specialization : {props.partA.aos}</pre></Col>
                </Row>
                <Row>
                    <Col style={{ "fontSize": "18px" }} ><pre>7. Name of Supervisor(s)	 : {props.partA.supervisor}</pre></Col>
                </Row>

                <br /> <br />

                
                <Card>
                    <Card.Header className='text-center'>Conference Details</Card.Header>
                    <Card.Body>

                        <Card.Text>
                            <Row>
                                <Col style={{ "fontSize": "18px" }} ><pre>Name of Confernce DEP                       : {props.partB.nameOfConference}.</pre></Col>
                            </Row>
                            <Row>
                                <Col style={{ "fontSize": "18px" }} ><pre>Venue of Confernce                          : {props.partB.venueOfConference}</pre></Col>
                            </Row>
                            <Row>
                                <Col style={{ "fontSize": "18px" }} ><pre>Period of Confernce                         : {props.partB.periodOfConference}</pre></Col>
                            </Row>
                            <Row>
                                <Col style={{ "fontSize": "18px" }} ><pre>Paper(s)/Poster(s) to Present in Conference : {props.partB.paperInConference}</pre></Col>
                            </Row>

                        </Card.Text>
                    </Card.Body>
                </Card>

                <br /> <br />

                <p>Financial support required (if any) from institute fund/ project/ any other:  </p>
                <p>Advance required :  Yes</p>

                <br /> <br />
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Sr. No. </th>
                            <th>Particulars</th>
                            <th>Amount (Rs)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </Table>
                <br /> <br />
                <Card>
                    <Card.Header className='text-center'>Enclosures Attached (Please Tick)</Card.Header>
                    <Card.Body>

                        <ListGroup as="ul">
                            <ListGroup.Item as="li"><pre>1. Copy ofAcceptance           :      </pre></ListGroup.Item>
                            <ListGroup.Item as="li"><pre>2. Copy of Conference Brochure :     </pre></ListGroup.Item>
                            <ListGroup.Item as="li"><pre>3. Copy of Abstract            :   </pre></ListGroup.Item>
                        </ListGroup>

                    </Card.Body>
                </Card>
                <br /> <br />

            </Container>
        </>
    );

}

export default FormPrintIn;