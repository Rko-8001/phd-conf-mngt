import React from 'react';
import { Container, Row, Col, Card, ListGroup, ProgressBar } from 'react-bootstrap';
import './History.css';

const History = () => {
  return (
    <div className="His">
        <Card>
            <Card.Header>Progress</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <strong>Grant 1:</strong> 100%
                <ProgressBar variant="success" now={100} />
              </ListGroup.Item>
              <strong>Remarks:</strong>
              <br/>
              <br/>
              <ListGroup.Item>
                <strong>Grant 2:</strong> 80%
                <ProgressBar variant="info" now={80} />
              </ListGroup.Item>
              <strong>Remarks:</strong>
              <br/>
              <br/>
              <ListGroup.Item>
                <strong>Grant 3:</strong> 50%
                <ProgressBar variant="warning" now={50} />
              </ListGroup.Item>
              <strong>Remarks:</strong>
              <br/>
              <br/>
            </ListGroup>
          </Card>
    </div>
  )
}

export default History