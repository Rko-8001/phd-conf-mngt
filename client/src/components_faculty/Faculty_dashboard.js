import React from 'react'
import Bar from './Bar'
import Nav from './Facultynav';
import Stepper from './Stepper';
import Newcomp from './Newcomp';


const faculty_dashboard = (props) => {
  return (
    <div>
      {/* <Newcomp/> */}
      <Nav email={props.facultyEmail}/>
      {/* {props.facultyEmail} */}
      {/* <h6>Welcome to the Faculty Portal </h6>
      <h3>Indian Institute of Technology Ropar</h3>
      <h3>भारतीय प्रौद्योगिकी संस्थान रोपड़</h3>
      <Bar /> */}
      {/* <Stepper/> */}
      
    </div>
  )
}

export default faculty_dashboard
