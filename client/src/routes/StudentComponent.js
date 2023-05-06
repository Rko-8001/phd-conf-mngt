import SideBar from '../components/navBars/Sidebar';
import Heading from '../components/navBars/Heading';
import UpperNav from '../components/navBars/UpperNav';

import Home from '../components_student/mainPage/Home';
import FormOption from '../components_student/forms/FormOption';
import FormInputIndia from '../components_student/forms/india/FormInputIndia';
import FormInputAbroad from '../components_student/forms/abroad/FormInputAbroad';
import Profile from '../components_student/profile/Profile';
import Applications from '../components_student/applications/Applications';
import ViewApplication from '../components_student/applications/ViewApplication';


export const StudentHomePage =
    <>
        <UpperNav />
        <div className='flex'>
            <SideBar />
            <div>
                <Heading />
                <Home />
            </div>
        </div>
    </>

export const StudentFormOption =
    <>
        <UpperNav />
        <div className='flex'>
            <SideBar />
            <FormOption />
        </div>
    </>

export const StudentFormIndia =
    <>
        <UpperNav />
        <div className='flex'>
            <SideBar />
            <FormInputIndia />
        </div>
    </>

export const StudentFormAbroad =
    <>
        <UpperNav />
        <div className='flex'>
            <SideBar />
            <FormInputAbroad />
        </div>
    </>
export const StudentProfile =
    <>
        <UpperNav />
        <div className='flex'>
            <SideBar />
            <Profile />
        </div>
    </>

export const StudentApplicationsPage =
    <>
        <UpperNav />
        <div className='flex'>
            <SideBar />
            <Applications />
        </div>
    </>

export const StudentSpecficApplication =
    <>
        <UpperNav />
        <ViewApplication />
    </>
