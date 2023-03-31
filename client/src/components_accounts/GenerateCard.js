import { useEffect, useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import Newcomp from './Newcomp';
import './GenerateCard.css'
import img from './img1.png'
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

function BasicExample(props) {
    var email = props.email;
    const [pendingApproval, setpendingApproval] = useState([]);


    const getBasicInfo = async (req, res) => {
        try {
            // const email = props.studentEmail;
            // console.log(email);
            const resp = await fetch("/researchApprovedApps", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
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
            setpendingApproval(resp)
            console.log(resp);
           
        }).catch((e) => {
            console.log(e.message)
        });
    }, []);
    
    const [selectedCard, setSelectedCard] = useState(null);
    const handleCardClick = (cardData) => {
      setSelectedCard(cardData);
      // console.log("reach here")
    };
    const showDetail = (id)=>{
      console.log(id);
    }
    return (
        <div className='cc'>
            <h4>Pending Approval/Disapproval list</h4>
            <div className='aa'>
            <Container>
      <Row>
        <Col sm>
        {pendingApproval.map(item => (
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
        <Button size="small" onClick={(e)=>handleCardClick(item.email)}>Take Action</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
      <br/>
      {selectedCard === item.email && <div><Stepper appData={item} /></div>}
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

export default BasicExample;