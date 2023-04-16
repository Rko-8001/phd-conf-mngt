import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UpperNav from './components/navBars/UpperNav';


//                  Other Components
import LoginN from './components_login/LoginN';
import Team from './components/team/Team';
import ErrorPage from './components/sidePages/ErrorPage';
import LandingPage from './components/sidePages/LandingPage';
import ContactUs from './components/sidePages/ContactUs';
import Heading from './components/navBars/Heading';

//                 Student Side Components
import StudentHome from './components_student/mainPage/StudentHome';
import Application from './components_student/applications/Applications';
import FormInputAbroad from './components_student/forms/abroad/FormInputAbroad';
import FormInputIndia from './components_student/forms/india/FormInputIndia';
import FormOption from './components_student/forms/FormOption';
import StudentProfile from './components_student/profile/Profile';
import ViewApplicationStudent from './components_student/applications/ViewApplication';
import SideBar0 from './components/navBars/Sidebar0';

//                  Faculty Side Components
import FacultyHome from './components_faculty/mainPage/FacultyHome';
import FacultyApplication from './components_faculty/applications/Application';
import ViewApplicationFaculty from './components_faculty/applications/ViewApplication';
import SideBar1 from './components/navBars/Sidebar1';

//                  Research Section Components 
import ResearchHome from './components_research//mainPage/ResearchHome';
import ResearchApplication from './components_research/applications/Application';
import ResearchStudent from './components_research/users/ResearchStudent';
import ResearchFaculty from './components_research/users/ResearchFaculty';
import ViewApplicationResearch from './components_research/applications/ViewApplication';
import SideBar2 from './components/navBars/Sidebar2';





function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<LoginN />} />

        <Route path='/studentLogin' >
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
          <Route path="viewApplication" element={
            <>
              <UpperNav />
              <ViewApplicationStudent />
            </>} />
        </Route>

        <Route path='/facultyLogin'>
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



        <Route path='/meetTheTeam' element={<Team />} />
        <Route path='/contactUs' element={<ContactUs />} />

        <Route path='*' element={<ErrorPage />} />

      </Routes >
    </>
  );
}


export default App;