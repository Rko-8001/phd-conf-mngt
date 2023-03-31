import * as React from 'react';
import { useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import OpenSearch from './OpenSearch';

export default function CustomizedInputBase(props) {
  var femail = props.email;
  const [data, setData] = useState({});
  const handleChangeData = (obj) => {
    setData(obj);
    console.log("data changed");
    console.log(obj);
  }

  const [curInput,setcurInput] = useState('');
  const handleInputChange = (event) => {
    setcurInput(event.target.value);
  };
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  // Searching function...
  const changeData = async (e) => {
    e.preventDefault();
    console.log(curInput);
    try {
      const semail = curInput;
      // console.log(semail);
      const resp = await fetch("/studentInfoAdmin", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({ semail, femail} )
      });
      const dat = await resp.json();
      var curpos = 0;

      if(resp.status === 200)
      {
          console.log(dat);
          curpos = 1;
          handleClick(1);
          handleChangeData(dat);
      }
      else if(resp.status === 421)
      {
          curpos = 2;
          handleClick(2);
      }
      else 
      {
         curpos = 3;
         handleClick(3);
        //  handleChangeData()
      }
      // console.log(resp);
  } catch (error) {
      console.log(error);
  }

  };
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search for Students"
        inputProps={{ 'aria-label': 'search Student' }}
        onChange={handleInputChange}

      />
      {/* Current Value is :{curInput} */}
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={changeData}>
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
        <DirectionsIcon />
      </IconButton>
      {activeTab === 0 && <div>0</div>}
    {activeTab === 1 && <div><OpenSearch data = {data}/></div>}
    {activeTab === 2 && <div>2</div>}
    {activeTab === 3 && <div>3</div>}

    </Paper>
  );
}