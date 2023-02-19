import React from 'react';
import { Container, Row, Col, Card, ListGroup, ProgressBar } from 'react-bootstrap';
import './Home.css';
import Carousal from './Carousal'

const StudentDashboard = () => {
  return (
    <div classname="student-dashboard">
      <Carousal />
    <Container>
      <Row>
        {/* <br/> */}
        <Col xs={12} md={6}>
          <Card>
            <Card.Header>Overview</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <strong>Name:</strong> Adish Lodha
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Email</strong> 2020csb1063@iitrpr.ac.in
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Entry No:</strong> 2020CSB1063
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Department:</strong> Computer Science
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Date of Joining:</strong>
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Fellowship Category:</strong>
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Area Of Specialisation:</strong>
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Name Of Supervisor:</strong>
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
    </div>
  );
};

export default StudentDashboard;