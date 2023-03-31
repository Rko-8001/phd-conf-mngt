import React, { useState, useEffect } from 'react';
import { Container, Row, Col,Card, ListGroup, ProgressBar } from 'react-bootstrap';
// import Carousel from './Carousal';
// import "./Home.css";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import img from './img1.jpg'
import Newcomp from './Newcomp';
import Edit from './Edit';
import Student_Search from './Student_Search';

const Dashboard = (props) => {
  // in props.email we have email of the logged in person stored
  const [generalInfo, setGeneralInfo] = useState({
    name: "Dr. Puneet Goyal",
    dept: "Computer Science",
    email: "drpuneet@gmal.com",
    doj: "12/01/20",
    fellowshipCat: "",
    aos: "WebDev",
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
      const email = props.email;
      console.log(email);
      const resp = await fetch("/facultyInfoLoading", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
      });
      // console.log(resp);
      return resp.json();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getBasicInfo().then((resp) => {
      console.log(resp);
      setFetchData("name", resp.name);
      setFetchData("dept", resp.department);
      setFetchData("doj", resp.dateOfJoining);
      setFetchData("fellowshipCat", resp.fellowshipCategory);
      setFetchData("aos", resp.areaOfSpecialisation);
      setFetchData("email", resp.email);
      console.log(generalInfo)
    }).catch((e) => {
      console.log(e.message)
    });
  }, []);
  const [expanded, setExpanded] = React.useState(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div className="student-dashboard">
      <Newcomp/>
      <br/>
      <Container>
        {/* <br/> */}
        {/* <Bar /> */}
        <Row>
          <Col xs={12} md={6}>

            <Card>
              <Card.Header style={{ "fontSize": "24px" }}>Faculty Details</Card.Header>
              <br/>
              <ListGroup variant="flush">
              <CardMedia
        sx={{ height: 240 }}
        image={img}
        title="green iguana"
      />
      <br/>
              <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Name</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {generalInfo.name}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Department</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {generalInfo.dept}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>E-mail</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {generalInfo.email}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Entry No.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {generalInfo.entryNo}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Date of Joining</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {generalInfo.doj}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Area of Specialisation</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {generalInfo.aos}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion>
              </ListGroup>
              <br/>
              {/* hello */}
              <Edit/>
              <br/>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card>
              <Card.Header>Progress</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>
            {/* <br/> */}
            <Student_Search email={props.email}/>
            <br/>
              <Stack direction="row" alignItems="center" spacing={2}>
      <Button variant="contained" component="label">
        Upload
        <input hidden accept="image/*" multiple type="file" />
      </Button>
      <IconButton color="primary" aria-label="upload picture" component="label">
        <input hidden accept="image/*" type="file" />
        <PhotoCamera />
      </IconButton>
    </Stack>
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

export default Dashboard;