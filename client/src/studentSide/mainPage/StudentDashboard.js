import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, ListGroup, ProgressBar } from 'react-bootstrap';
import Carousel from './Carousal';
import "./Home.css";
const StudentDashboard = (props) => {
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    dept: "",
    email: "",
    entryNo: "",
    doj: "",
    fellowshipCat: "",
    aos: "",
    supervisor: ""
  });
  const getGeneralInfo = ((e) => {
    const { name, value } = e.target;
    // console.log(name + " " + value);
    setGeneralInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  });

  const setFetchData = ((name, value) => {
    setGeneralInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  })
  const getBasicInfo = async (req, res) => {
    try {
      const email = props.studentEmail;
      console.log(email);
      const role = 0;
      const resp = await fetch("/studentInfoLoading", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, role })
      });
      return resp.json();
      // console.log(resp);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getBasicInfo().then((resp) => {
      console.log(resp);
      setFetchData("name", resp.name);
      setFetchData("entryNo", resp.entryNo);
      setFetchData("dept", resp.department);
      setFetchData("doj", resp.dateOfJoining);
      setFetchData("fellowshipCat", resp.fellowshipCategory);
      setFetchData("aos", resp.areaOfSpecialisation);
      setFetchData("supervisor", resp.nameOfSupervisor);
      setFetchData("email", resp.email);
    }).catch((e) => {
      console.log(e.message)
    });
  }, []);

  return (
    <div className="student-dashboard">
      <Carousel />
      <Container>
        {/* <br/> */}
        {/* <Bar /> */}
        <Row>
          <Col xs={12} md={6}>

            <Card>
              <Card.Header style={{ "fontSize": "24px" }}>Student Details</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <strong>Name:</strong> {generalInfo.name}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Email:</strong> {props.studentEmail}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Entry No:</strong> {generalInfo.entryNo}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Department:</strong> {generalInfo.dept}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Date of Joining:</strong> {generalInfo.doj}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Fellowship Category:</strong> {generalInfo.fellowshipCat}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Area Of Specialisation:</strong> {generalInfo.aos}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Name Of Supervisor:</strong> {generalInfo.supervisor}
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card>
              <Card.Header>Progress</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <strong>Assignment 1:</strong> 100%
                  <ProgressBar variant="success" now={100} />
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Assignment 2:</strong> 80%
                  <ProgressBar variant="info" now={80} />
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Assignment 3:</strong> 50%
                  <ProgressBar variant="warning" now={50} />
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>

      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default StudentDashboard;