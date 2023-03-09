import React from 'react'
import { Route, Link, Routes, BrowserRouter } from 'react-router-dom'
import Hello from './Hello'

function FacultyHome(props) {
  return (
    <>
      <div>Hi!! {props.facultyEmail}.  Work under progress</div>
      {/* <Link exact to="/facultyLogin/hello">Hello</Link>

      <Routes>
        <Route exact path='/facultLogin/hello' component={<Hello/>}/>
      </Routes> */}
    </>
  )
}

export default FacultyHome