import React from 'react'
import Nav from './Accounts_nav';
import GenerateCard from './GenerateCard';
import Bar from './Bar';

const Accounts_dashboard = (props) => {
  return (
    <div>
    {/* <Newcomp/> */}
    <Nav email = {props.accountsEmail}/>
    {/* <h6>Welcome to the Faculty Portal </h6>
    <h3>Indian Institute of Technology Ropar</h3>
    <h3>भारतीय प्रौद्योगिकी संस्थान रोपड़</h3>
    <Bar /> */}
    {/* <Stepper/> */}
    {/* <GenerateCard/> */}
    {/* <Bar/> */}
  </div>
  )
}

export default Accounts_dashboard
