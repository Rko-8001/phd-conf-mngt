import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminHome from './adminSide/AdminHome';
import FacultyHome from './facultySide/FacultyHome';

//                    Components Maintained
import Login from './Login';
import FormInput from './studentSide/forms/FormInput';
import StudentHome from './studentSide/StudentHome';



function App() {

  const [emailId, setEmailId] = useState("");

  const getEmailId = e => {
    setEmailId(e);
    // console.log(e);
  }
  return (
    <>
      <Routes>
        <Route path='/' element = {<Login getEmailIdLogin={getEmailId} />} />
        <Route path='/studentLogin' >
          <Route index           element={ <StudentHome studentEmail={emailId}/>     }/>
          <Route path="formFill" element={ <FormInput studentEmail={emailId}/>}/>
        </Route>
        <Route path='/facultyLogin' element={ <FacultyHome   facultyEmail={emailId}/>}/>
        <Route path='/adminLogin'   element={ <AdminHome adminEmail  ={emailId}/>}/>

        {/* <Route exact path='/studentLogin' element= { <Home/>     }/>
        <Route path='/studentLogin/:id'   element= { <FormInput/>}/> */}
      </Routes>
    </>
  );
}


export default App;
