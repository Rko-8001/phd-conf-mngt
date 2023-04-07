import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';


//                  Other Components
import LoginN from './components_login/LoginN';
import Team from './components/team/Team';
import ErrorPage from './components/sidePages/ErrorPage';
import LandingPage from './components/sidePages/LandingPage';
import ContactUs from './components/sidePages/ContactUs';

//                 Student Side Components
import StudentHome from './components_student/mainPage/StudentHome';
import Application from './components_student/applications/Application';
import FormInput from './components_student/forms/FormInput';
import StudentProfile from './components_student/profile/Profile';
import ViewApplication from './components_student/applications/ViewApplication';

//                  Faculty Side Components
import FacultyHome from './components_faculty/Faculty_dashboard';

//                  Research Section Components 
import ResearchDashboard from './components_research/Research_dashboard';

//                  Account Section Components 
import AccountsDashboard from './components_accounts/Accounts_dashboard';



function App() {

  const [emailId, setEmailId] = useState("");

  const getEmailId = e => {
    setEmailId(e);
    // console.log(e);
  }
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<LoginN getEmailIdLogin={getEmailId} />} />

        <Route path='/studentLogin' >
          <Route index element={<StudentHome />} />
          <Route path="formFill" element={<FormInput />} />
          <Route path="profile" element={<StudentProfile />} />
          <Route path="application" element={<Application />} />
          <Route path="viewApplication" element={<ViewApplication />} />
        </Route>

        <Route path='/facultyLogin' element={<FacultyHome facultyEmail={emailId} />} />

        <Route path='/researchLogin' element={<ResearchDashboard adminEmail={emailId} />} />



        <Route path='/accountLogin'>
          <Route index element={<AccountsDashboard accountsEmail={emailId} />} />
        </Route>
        <Route path='/meetTheTeam' element={<Team />} />
        <Route path='/contactUs' element={<ContactUs />} />

        <Route path='*' element={<ErrorPage />} />

      </Routes>
    </>
  );
}


export default App;
