import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import UpperNav from './components/navBars/UpperNav';


//                  Other Components
import LoginN from './components_login/LoginN';
import Team from './components/team/Team';
import ErrorPage from './components/sidePages/ErrorPage';
import LandingPage from './components/sidePages/LandingPage';
import ContactUs from './components/sidePages/ContactUs';
<<<<<<< HEAD
import Heading from './components/navBars/Heading';

//                 Student Side Components
import StudentHome from './components_student/mainPage/StudentHome';
import Application from './components_student/applications/Application';
import FormInputAbroad from './components_student/forms/abroad/FormInputAbroad';
import FormInputIndia from './components_student/forms/india/FormInputIndia';
import FormOption from './components_student/forms/FormOption';
import StudentProfile from './components_student/profile/Profile';
import ViewApplication from './components_student/applications/ViewApplication';
import SideBar0 from './components/navBars/Sidebar0';
=======
import UpperNav from './components/sidePages/UpperNav';

//                 Student Side Components
import StudentHome from './components_student/mainPage/StudentHome';
import Application from './components_student/applications/Applications';
import FormOption from './components_student/forms/FormOption';
import FormInputAbroad from './components_student/forms/abroad/FormInputAbroad';
import FormInputIndia from './components_student/forms/india/FormInputIndia'
import StudentProfile from './components_student/profile/Profile';
import ViewApplicationStudent from './components_student/applications/ViewApplication';
>>>>>>> maste

//                  Faculty Side Components
import FacultyNav from './components_faculty/facultyNav/FacultyNav';
import FacultyHome from './components_faculty/mainPage/FacultyHome';
import FacultyApplication from './components_faculty/applications/Application';
import ViewApplicationFaculty from './components_faculty/applications/ViewApplication';
<<<<<<< HEAD
import SideBar1 from './components/navBars/Sidebar1';

//                  Research Section Components 
=======

//                  Research Section Components 
import ResearchNav from './components_research/researchNav/ResearchNav';
>>>>>>> master
import ResearchHome from './components_research//mainPage/ResearchHome';
import ResearchApplication from './components_research/applications/Application';
import ResearchStudent from './components_research/users/ResearchStudent';
import ResearchFaculty from './components_research/users/ResearchFaculty';
<<<<<<< HEAD
import StudentApplication from './components_research/applications/StudentApplication';
import SideBar2 from './components/navBars/Sidebar2';
=======
import ViewApplicationResearch from './components_research/applications/ViewApplication';
>>>>>>> master

//                  Account Section Components 
import AccountsDashboard from './components_accounts/Accounts_dashboard';
import FacultyUser from './components_research/users/FacultyUser';



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
<<<<<<< HEAD
          <Route index element={
            <>
              <UpperNav />
              <div className='flex'>
                <SideBar0 />
                <div>
                  <Heading />
                  <StudentHome />
                </div>
              </div>
            </>} />
          <Route path="formFill" element={
            <>
              <UpperNav />
              <div className='flex'>
                <SideBar0 />
                <FormOption />
              </div>
            </>} />
          <Route path="formIndia" element={
            <>
              <UpperNav />
              <div className='flex'>
                <SideBar0 />
                <FormInputIndia />
              </div>
            </>} />
          <Route path="formAbroad" element={
            <>
              <UpperNav />
              <div className='flex'>
                <SideBar0 />
                <FormInputAbroad />
              </div>
            </>} />
          <Route path="profile" element={
            <>
              <UpperNav />
              <div className='flex'>
                <SideBar0 />
                <StudentProfile />
              </div>
            </>} />

          <Route path="application" element={
            <>
              <UpperNav />
              <div className='flex'>
                <SideBar0 />
                <Application />
              </div>
            </>} />
=======
          <Route index element={<StudentHome />} />
          {/* <Route path="fillForm" element={<FormInput />} /> */}
          <Route path="formFill" element={<FormOption />} />
          <Route path="formAbroad" element={<FormInputAbroad />} />
          <Route path="formIndia" element={<FormInputIndia />} />

          <Route path="profile" element={<StudentProfile />} />
          <Route path="application" element={<Application />} />
>>>>>>> master
          <Route path="viewApplication" element={
            <>
              <UpperNav />
              <ViewApplicationStudent />
            </>} />
        </Route>

        <Route path='/facultyLogin'>
<<<<<<< HEAD
          <Route index element={<>
            <UpperNav />
            <div className='flex'>
              <SideBar1 />
              <FacultyHome />
            </div>
          </>} />

          <Route path='application' element={<>
            <UpperNav />
            <div className='flex'>
              <SideBar1 />
              <FacultyApplication />
            </div>
          </>} />

          <Route path='studentApplication' element={<>
            <UpperNav />
            <div className='flex'>
              <SideBar1 />
              <ViewApplicationFaculty />
            </div>
          </>} />
=======
          <Route index element={<div class="min-h-screen w-full relative">
            <UpperNav />
            <FacultyNav />
            <FacultyHome />
          </div>} />

          <Route path='application' element={
            <div class="min-h-screen w-full relative">
              <UpperNav />
              <FacultyNav />
              <FacultyApplication />
            </div>} />

          <Route path='studentApplication' element={
            <div class="min-h-screen w-full relative">
              <UpperNav />
              <ViewApplicationFaculty />
            </div>} />
>>>>>>> master
        </Route>

        <Route path='/researchLogin'>
          <Route index element={
            <>
              <UpperNav />
              <div className='flex'>
                <SideBar2 />
                <ResearchHome />
              </div>
            </>} />
          <Route path="application" element={
            <>
              <UpperNav />
              <div className='flex'>
                <SideBar2 />
                <ResearchApplication />
              </div>
            </>} />
          <Route path="student" element={
            <>
              <UpperNav />
              <div className='flex'>
                <SideBar2 />
                <ResearchStudent />
              </div>
            </>} />
          <Route path="faculty" element={
            <>
              <UpperNav />
              <div className='flex'>
                <SideBar2 />
                <ResearchFaculty />
              </div>
            </>} />
          <Route path="studentApplication" element={
            <div class="min-h-screen w-full relative">
              <UpperNav />
              <ViewApplicationResearch />
            </div>} />
        </Route>



        <Route path='/accountLogin'>
          <Route index element={<AccountsDashboard accountsEmail={emailId} />} />
        </Route>
        <Route path='/meetTheTeam' element={<Team />} />
        <Route path='/contactUs' element={<ContactUs />} />

        <Route path='*' element={<ErrorPage />} />

      </Routes >
    </>
  );
}


export default App;
