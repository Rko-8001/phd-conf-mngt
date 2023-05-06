import React from 'react';
import { Route, Routes } from 'react-router-dom';

//          Protected Routes
import StudentRoute from './routes/StudentRoute';

//                  Other Components
import LoginN from './components_login/LoginN';
import Team from './components/team/Team';
import ErrorPage from './components/sidePages/ErrorPage';
import LandingPage from './components/sidePages/LandingPage';
import ContactUs from './components/sidePages/ContactUs';
import Heading from './components/navBars/Heading';
import UpperNav from './components/navBars/UpperNav';


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


//                Accounts Section Components
import AccountHome from './components_account/mainPage/Home';
import AccountApplication from './components_account/applications/Application';
import ViewApplicationAccount from './components_account/applications/ViewApplication';
import SideBar3 from './components/navBars/Sidebar3';


import { StudentFormAbroad, StudentFormIndia, StudentFormOption, StudentHomePage, StudentProfile, StudentApplicationsPage, StudentSpecficApplication } from './routes/StudentComponent';
import Footer from './components_student/Side/Footer';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<LoginN />} />

        <Route path='/studentLogin' >
          <Route index element={<StudentRoute Component={StudentHomePage} />} />
          <Route path="formFill" element={<StudentRoute Component={StudentFormOption} />} />
          <Route path="formIndia" element={<StudentRoute Component={StudentFormIndia} />} />
          <Route path="formAbroad" element={<StudentRoute Component={StudentFormAbroad} />} />
          <Route path="profile" element={<StudentRoute Component={StudentProfile} />} />
          <Route path="application" element={<StudentRoute Component={StudentApplicationsPage} />} />
          <Route path="viewApplication" element={<StudentRoute Component={StudentSpecficApplication} />} />
        </Route>

        <Route path='/facultyLogin'>
          <Route index element={<>
            <UpperNav />
            <div className='flex'>
              <SideBar1 />
              <FacultyHome />
            </div>
            <Footer/>
          </>} />

          <Route path='application' element={<>
            <UpperNav />
            <div className='flex'>
              <SideBar1 />
              <FacultyApplication />
            </div>
            <Footer/>
          </>} />

          <Route path='studentApplication' element={<>
            <UpperNav />
            <ViewApplicationFaculty />
            <Footer/>
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
              <Footer/>
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
              <Footer/>
            </>} />
          <Route path="faculty" element={
            <>
              <UpperNav />
              <div className='flex'>
                <SideBar2 />
                <ResearchFaculty />
              </div>
              <Footer/>
            </>} />
          <Route path="studentApplication" element={
            <div class="min-h-screen w-full relative">
              <UpperNav />
              <ViewApplicationResearch />
              <Footer/>
            </div>} />
        </Route>


        <Route path='/accountLogin'>
          <Route index element={
            <>
              <UpperNav />
              <div className='flex'>
                <SideBar3 />
                <AccountHome />
              </div>
              <Footer/>
            </>} />
          <Route path="application" element={
            <>
              <UpperNav />
              <div className='flex'>
                <SideBar3 />
                <AccountApplication />
              </div>
              <Footer/>
            </>} />

          <Route path="studentApplication" element={
            <div class="min-h-screen w-full relative">
              <UpperNav />
              <ViewApplicationAccount />
              <Footer/>
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