import React, { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './History.css';

const History = (props) => {

  const [apps, setapps] = useState([]);

  const getBasicInfo = async (req, res) => {
    try {
      const email = props.email
      const resp = await fetch("/studentApplicationView", {
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

  useEffect(() => {
    getBasicInfo().then((resp) => {
      setapps(resp)
      console.log(resp);

    }).catch((e) => {
      console.log(e.message)
    });
  }, []);
  function giveStatus(s) {

    if(s === "0")
    {
      return "Pending Faculty Approval";
    }
    else if(s === "1")
    {
      return "Pending Research Approval";
    }
    else if(s === "-1")
    {
      return "Faculty Disapproved";
    }
    else if(s === "2")
    {
      return "Pending Accounts Approval";
    }
    else if(s === "-2")
    {
      return "Faculty Disapproved";
    }
    else if(s === "3")
    {
      return "Approved";
    }
    else 
    {
      return "Faculty Disapproved";
    }
  }
  return (
    <div className="His">
      {apps.map(item => (
        <Card sx={{ maxWidth: 345 }} style={{"margin": "20px"}}>
          <CardContent>
            <Typography  variant="h5" component="div">
              Name of Conference: {item.nameOfConference}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <br />
              Venue: {item.venueOfConference}
              <br/> 
              Current Status: {giveStatus(item.status)}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
          <br />
          <br />
        </Card>
      ))}
    </div>
  )
}

export default History