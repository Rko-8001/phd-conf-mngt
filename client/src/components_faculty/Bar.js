import * as React from 'react';
import {useState} from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Post from './Post';
import GenerateCard from './GenerateCard';
import DoneCards from './DoneCards';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Newcomp from './Newcomp';
import Main from './Main';
import img from './img5.png';
import UpperNav from './UpperNav';

const AntTabs = styled(Tabs)({
  borderBottom: '1px solid #e8e8e8',
  '& .MuiTabs-indicator': {
    backgroundColor: '#1890ff',
  },
});

const AntTab = styled((props: StyledTabProps) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    minWidth: 0,
    [theme.breakpoints.up('sm')]: {
      minWidth: 0,
    },
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(1),
    color: 'rgba(0, 0, 0, 0.85)',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&.Mui-selected': {
      color: '#1890ff',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&.Mui-focusVisible': {
      backgroundColor: '#d1eaff',
    },
  }),
);

interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 40,
    width: '100%',
    backgroundColor: '#635ee7',
  },
});

interface StyledTabProps {
  label: string;
}

const StyledTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  textTransform: 'none',
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.pxToRem(15),
  marginRight: theme.spacing(1),
  color: 'rgba(255, 255, 255, 0.7)',
  '&.Mui-selected': {
    color: '#fff',
  },
  '&.Mui-focusVisible': {
    backgroundColor: 'rgba(100, 95, 228, 0.32)',
  },
}));

export default function CustomizedTabs(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const [activeTab, setActiveTab] = useState(1);

  const handleClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div>
      {/* <img src={img} /> */}
      {/* <h6>Welcome to the Faculty Portal </h6>
      <h3>Indian Institute of Technology Ropar</h3>
      <h3>भारतीय प्रौद्योगिकी संस्थान रोपड़</h3> */}
      {/* hello */}
      <UpperNav/>
      
    <Box sx={{ width: '100%' }}>
      <Box sx={{ bgcolor: '#2e1534' }}>
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="styled tabs example"
        >
          <StyledTab label="Dashboard" onClick={() => handleClick(1)}/>
          <StyledTab label="Pending" onClick={() => handleClick(2)}/>
          <StyledTab label="Approved" onClick={() => handleClick(3)}/>
          <StyledTab label="Messages" onClick={() => handleClick(4)}/>
        </StyledTabs>
        <Box sx={{ p: 3 }} />
      </Box>
    </Box>
    {activeTab === 1 && <div><Main email = {props.email}/></div>}
    {activeTab === 2 && <div><GenerateCard email = {props.email}/></div>}
    {activeTab === 3 && <div><DoneCards email = {props.email}/></div>}
    {activeTab === 4 && <div><Post/></div>}
    {/* <Newcomp/> */}

    </div>
  );
}