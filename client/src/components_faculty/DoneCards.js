import { useEffect, useState } from 'react';
import Newcomp from './Newcomp';
import './GenerateCard.css'
import img from './img1.jpg'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stepper from './Stepper';

function DoneCards(props) {
    var email = props.email;
    const [doneApproval, setdoneApproval] = useState([]);
    const [selectedCard, setSelectedCard] = useState(null);
    const handleCardClick = (cardData) => {
      setSelectedCard(cardData);
    };

  
    const getBasicInfo = async (req, res) => {
        try {
            // const email = props.studentEmail;
            // console.log(email);
            const role = 0;
            const resp = await fetch("/approvedFacultyApplication", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email })

            });
            return resp.json();
            // console.log(resp);
        } catch (error) {
            console.log(error);
        }
    }
    const navigate = (() => {

    })
    const [isOpen, setIsOpen] = useState(false);
    function handleClick() {
        setIsOpen(true);
    }

    useEffect(() => {
        getBasicInfo().then((resp) => {
            console.log(resp);
            setdoneApproval(resp);
        }).catch((e) => {
            console.log(e.message)
        });
    }, []);
    
    return (
        <div className='cc'>
        <h4>Already Approved/Disapproved status </h4>
        <div className='aa'>
        <Container>
  <Row>
    <Col sm>
    {doneApproval.map(item => (
                <Card sx={{ maxWidth: 345 }}>
  <CardMedia
    component="img"
    alt="green iguana"
    height="140"
    image={img}
  />
  
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
      {item.email}
    </Typography>
    <Typography variant="body2" color="text.secondary">
      Name of Conference: {item.nameOfConference}
      <br/>
      Venue: {item.venueOfConference}
    </Typography>
  </CardContent>
  <CardActions>
    {/* <Button size="small" onClick={(e)=>handleCardClick(item.email)}>Take Action</Button> */}
    <Button size="small">Learn More</Button>
  </CardActions>
  {selectedCard === item.email && <div><Stepper id={item.email} /></div>}
  <br/>
</Card>
            ))}
    </Col>
    {/* <Col sm>sm=4</Col> */}
  </Row>
</Container>
    {/* Current value = {selectedCard} */}
        </div>
        <br/>
    </div>
    );
}

export default DoneCards;