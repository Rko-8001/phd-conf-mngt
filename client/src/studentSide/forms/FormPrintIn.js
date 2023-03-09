import React, { useRef } from 'react';
import { Button, Card, Table, Row, Col, Container, ListGroup } from 'react-bootstrap';
import { useReactToPrint } from 'react-to-print';


function FormPrintIn(props) {

    const componentRef = useRef();


    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'New_Application for Participating in Conference, Workshop, Seminar (within India)',
    })


    const tableRows = props.partC.map((info) => {
        return (
            <tr key={info.particular}>
                <th>{info.particular}</th>
                <th>{info.amount}</th>
            </tr>
        );
    });


    const submitApplication = async (e) => {
        e.preventDefault();
        

        // save all data
        const email = props.partA.email ;
        const status = "0";
        const mobileNo = props.partA.mobileNo ;
        const bankAccountNo = props.partA.bankAccNo ;
        const nameOfConference = props.partB.nameOfConference ;
        const venueOfConference = props.partB.venueOfConference ;
        const periodOfConference = props.partB.periodOfConference ;
        const paperInConference = props.partB.paperInConference ;
        
        //                      To be Fixed.. 
        // const financialSupport = props.partB.financialSupport ;
        const financialSupport = true;
        const advance = props.advance ;
        const coaa =   true ;
        const coaba =  true;
        const cocba  =   true;

        const res = await fetch("/studentApplicationSubmit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email,status,  mobileNo, bankAccountNo, nameOfConference, venueOfConference, periodOfConference, paperInConference, financialSupport, advance, coaa, coaba, cocba })
        });

        //logic
        // const data = await res.json();

        if (res.status === 422) {
            window.alert("Loda lele");
        }
        else {
            window.alert("Application Submitted");
        }
    }
    return (
        <>
            <Row>
                <Col>
                    <Button variant='outline-dark' onClick={handlePrint}> Print Form</Button>
                </Col>
                <Col>
                    <Button variant='outline-dark' onClick={submitApplication}>Request Grant</Button>
                </Col>
            </Row>
            <br /> <br />


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
                                <Col style={{ "fontSize": "18px" }} ><pre>Name of Confernce                           : {props.partB.nameOfConference}</pre></Col>
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

                <p>Financial support required (if any) from institute fund/ project/ any other:  {props.partB.financialSupport}</p>
                <p>Advance required :  {props.advance ? "Yes" : "No"} </p>

                <br />
                {props.advance ?
                    <Table striped size="sm">
                        <thead>
                            <tr>
                                <th>Particulars</th>
                                <th>Amount (Rs)</th>
                            </tr>
                        </thead>
                        <tbody style={{ "Color": "grey" }}>{tableRows}</tbody>
                    </Table>
                    :
                    <Table striped size="sm">
                        <thead>
                            <tr>
                                <th>Particulars</th>
                                <th>Amount (Rs)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>-</th>
                                <th>-</th>
                            </tr> </tbody>
                    </Table>
                }
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