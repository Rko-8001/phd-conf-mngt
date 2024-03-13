import React from 'react'
import conference from './conference.png';
import Footer from '../components_student/Side/Footer';
import { useNavigate, Link } from 'react-router-dom';

function UserGuide() {
  const navigate = useNavigate();
  return (
    <>

      <nav className="bg-gray-800 text-white flex justify-between items-center py-3 px-5">
        <h1 className="text-xl font-bold">PhDCGM :: PhD Conference Grant Management Portal</h1>
        <div className="flex items-center space-x-5 text-xs">
          <ul className="flex space-x-10 text-gray-300">
            <li key={2}>
              <Link to="/">Home</Link>
            </li>
            <li key={1}>
              <Link to="/meetTheTeam">Team</Link>
            </li>
            <li key={4}>
              <Link to="/userGuide">User Guide </Link>
            </li>
            <li key={3}>
              <Link to="/contactUs">Contact Us</Link>
            </li>
          </ul>
          <div className="space-x-5">
            <button onClick={(e) => {
              e.preventDefault();
              navigate('/login');
            }} className="border px-5 py-2 rounded font-bold">Login</button>
          </div>
        </div>
      </nav>

      <section className="bg-white px-5 dark:bg-gray-900">

        <div className="grid max-w-screen-xl px-4 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Phd Grant Management Portal</h1>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
              {/* <img src={conference} alt="mockup"/> */}
            </div>
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
              Get started
              <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
            <br />
            <br />
            <a href="#" className="inline-flex items-center justify-center px-10 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
              Video
            </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={conference} alt="mockup" />
          </div>
        </div>
        <div>
          <p className="ml-10 px-10 underline"><b>Step-1</b></p>
          <p className="ml-10 px-2 mr-10 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">The faculty will review the form submitted by the student. If the form is complete and accurate, the faculty will approve the application by adding their signature and send it to the head of the department for further review. If the form is incomplete or inaccurate, the faculty will reject the application and return it to the student.</p>
          <p className="ml-10 px-10 underline"><b>Step-2</b></p>
          <p className="ml-10 px-2 mr-10 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">The head of the department will review the application approved by the faculty. If the application is complete and accurate, the head of the department will approve the application by adding their signature and send it to the research section for further review. If the application is incomplete or inaccurate, the head of the department will reject the application and return it to the faculty.</p>
          <p className="ml-10 px-10 underline"><b>Step-3</b></p>
          <p className="ml-10 px-2 mr-10 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">The research section will review the application approved by the head of the department. If the application is complete and accurate, the research section will approve the application by adding their signature and send it to the accounts section for further review. If the application is incomplete or inaccurate, the research section will reject the application and return it to the head of the department.</p>
          <p className="ml-10 px-10 underline"><b>Step-4</b></p>
          <p className="ml-10 px-2 mr-10 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">The accounts section will review the application approved by the research section. If the application is complete and accurate, the accounts section will approve the application by adding their signature and send it to the dean of college for further review. If the application is incomplete or inaccurate, the accounts section will reject the application and return it to the research section.</p>
          <p className="ml-10 px-10 underline"><b>Step-5</b></p>
          <p className="ml-10 px-2 mr-10 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">The dean of college will review the application approved by the accounts section. If the application is complete and accurate, the dean of college will approve the application by adding their signature and the reimbursement will be processed. If the application is incomplete or inaccurate, the dean of college will reject the application and return it to the accounts section. It will then go to the accounts section again for the final payment process</p>
        </div>
        <br />
        <br />
      </section>
      <Footer />
    </>
  )
}

export default UserGuide