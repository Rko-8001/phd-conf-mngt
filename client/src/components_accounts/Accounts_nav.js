import * as React from 'react';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Newcomp from './Newcomp';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import CardMedia from '@mui/material/CardMedia';
import img from './img1.png'
import { Container, Row, Col,Card, ListGroup, ProgressBar } from 'react-bootstrap';
import Accounts_details from './Accounts_details';
import GenerateCard from './GenerateCard';
import Bar from './Bar';
import Accounts_statistics from './Accounts_statistics';
import Student_Search from './Student_Search';
import UpperNav from './UpperNav';
import Info from './Info.js'

const drawerWidth = 240;
const arr = [];
const obj1 = {
    email: "2020csb1143@iitrpr.ac.in",
    status: "",
    mobileNo: "",
    bankAccountNo: "",
    nameOfConference: "MIST ",
    venueOfConference: "Munich, Germany",
    periodOfConference: "",
    paperInConference: "",
    financialSupport: "",
    advance: "",
    coaa: "",
    coaba: "",
    cocba: "",
};
const obj2 = {
  email: "2020csb1141@iitrpr.ac.in",
  status: "",
  mobileNo: "",
  bankAccountNo: "",
  nameOfConference: "MIST ",
  venueOfConference: "Munich, Germany",
  periodOfConference: "",
  paperInConference: "",
  financialSupport: "",
  advance: "",
  coaa: "",
  coaba: "",
  cocba: "",
};
arr.push(obj1);
arr.push(obj2);
// const [selectedCard, setSelectedCard] = useState(null);
//     const handleCardClick = (cardData) => {
//       setSelectedCard(cardData);
//     };

export default function PermanentDrawerLeft(props) {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Welcome To Accounts Section
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <Typography paragraph>
        {/* <h6>Welcome to the Faculty Portal </h6>
      <h3>Indian Institute of Technology Ropar</h3>
      <h3>भारतीय प्रौद्योगिकी संस्थान रोपड़</h3> */}
           <UpperNav/>
          <Newcomp/>
          <div className="student-dashboard">
      <br/>
      <Container>
        {/* <br/> */}
        {/* <Bar /> */}
        <Row>
          <Col xs={12} md={6}>

            <Card>
              <Card.Header style={{ "fontSize": "24px" }}> Account Section</Card.Header>
              <br/>
              <ListGroup variant="flush">
              <CardMedia
        sx={{ height: 240 }}
        image={img}
        title="green iguana"
      />
      <br/>
      <Info email = {props.email}/>
      {/* <br/> */}
             
      
              </ListGroup>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card>
              <Card.Header></Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Student_Search/>
                <br/>
      <Button variant="contained" component="label">
        Upload
        <br/>
        <input hidden accept="image/*" multiple type="file" />
      </Button>
      <IconButton color="primary" aria-label="upload picture" component="label">
        <input hidden accept="image/*" type="file" />
        <PhotoCamera />
      </IconButton>
    </Stack>
    <br/>
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
        </Typography>
        <Typography paragraph>      
          <Accounts_statistics/>
          <Accounts_details/>
          <br/>
         {/* <b> Pending Approval </b> */}
          {/* {arr.map(item => (<GenerateCard/>))} */}
          <GenerateCard/>
          {/* <Bar/> */}
        </Typography>
      </Box>
    </Box>
  );
}