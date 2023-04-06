import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

//                    Components Maintained
import Login from './components_login/Login'; 
import LoginN from './components_login/LoginN'; 
import Team from './components_login/Team'; 
import FormInput from './studentSide/forms/FormInput';
import StudentHome from './studentSide/StudentHome';
import FacultyHome from './components_faculty/Faculty_dashboard';
import Accounts_dashboard from './components_accounts/Accounts_dashboard';
import Research_dashboard from './components_research/Research_dashboard';
import LandingPage from './components/LandingPage';
import ErrorPage from './components/ErrorPage';
import Profile from './studentSide/profile/Profile';
import ContactUs from './components_login/ContactUs';
import Application from './studentSide/applications/Application';



function App() {

  const [emailId, setEmailId] = useState("");

  const getEmailId = e => {
    setEmailId(e);
    // console.log(e);
  }
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/login' element={<LoginN getEmailIdLogin={getEmailId} />} />
        
        <Route path='/studentLogin' >
          <Route index element={<StudentHome studentEmail={emailId} />} />
          <Route path="formFill" element={<FormInput studentEmail={emailId}/>} />
          {/* <Route path="formFill" element={<FormInput />} /> */}
          <Route path = "profile" element={<Profile studentEmail={emailId} />} />
          <Route path = "application" element={<Application studentEmail={emailId} />} />
        </Route>

        <Route path='/facultyLogin' element={<FacultyHome facultyEmail={emailId}/>} />

        <Route path='/researchLogin' element={<Research_dashboard adminEmail={emailId} />} />


        
        <Route path='/accountLogin'>
          <Route index element={<Accounts_dashboard accountsEmail={emailId}/>}/>
        </Route>
        <Route path='/meetTheTeam' element={<Team />} />
        <Route path='/contactUs' element={<ContactUs />} />

        <Route  path='*' element={<ErrorPage/>} />

      </Routes>
    </>
  );
}


export default App;
