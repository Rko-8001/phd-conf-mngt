import React, { useState, useEffect } from 'react';
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
import ResearchNav from './components_research/researchNav/ResearchNav';
import UpperNav from './components_research/researchNav/UpperNav';
import ResearchHome from './components_research//mainPage/ResearchHome';
import ResearchApplication from './components_research/applications/ResearchApplication';
import ResearchStudent from './components_research/users/ResearchStudent';
import ResearchFaculty from './components_research/users/ResearchFaculty';
import StudentApplication from './components_research/applications/StudentApplication';

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
          <Route path="viewApplication" element={
            <>
              <UpperNav />
              <ViewApplication />
            </>} />
        </Route>

        <Route path='/facultyLogin' element={<FacultyHome facultyEmail={emailId} />} />

        <Route path='/researchLogin'>
          <Route index element={
            <div class="min-h-screen w-full relative">
              <UpperNav />
              <ResearchNav />
              <ResearchHome />
            </div>} />
          <Route path="application" element={
            <div class="min-h-screen w-full relative">
              <UpperNav />
              <ResearchNav />
              <ResearchApplication />
            </div>} />
          <Route path="student" element={
            <div class="min-h-screen w-full relative">
              <UpperNav />
              <ResearchNav />
              <ResearchStudent />
            </div>} />
          <Route path="faculty" element={
            <div class="min-h-screen w-full relative">
              <UpperNav />
              <ResearchNav />
              <ResearchFaculty />
            </div>} />
          <Route path="studentApplication" element={
            <div class="min-h-screen w-full relative">
              <UpperNav />
              <StudentApplication />
            </div>} />
        </Route>



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
