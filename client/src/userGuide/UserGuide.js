import React, { useState } from 'react';
import conference from './conference.png';
import Footer from '../components_student/Side/Footer';
import { useNavigate, Link } from 'react-router-dom';
const UserGuide = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-gray-800 text-white">
        <div className="container mx-auto py-4 px-2 md:flex md:justify-between md:items-center">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-xl font-bold">PhDCGM :: PhD Conference Grant Management Portal</Link>
            <button className="md:hidden" onClick={toggleNavbar}>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>

          <div className={`md:flex flex-col md:flex-row md:items-center ${isOpen ? '' : 'hidden'} ${isOpen ? 'mt-4' : ''}`}>
            <div className="flex flex-col md:flex-row md:space-x-2 mr-5">
              <Link to="/" className="block md:inline-block py-2 px-2 text-white hover:bg-gray-700 hover:text-white">Home</Link>
              <Link to="/meetTheTeam" className="block md:inline-block py-2 px-2 text-white hover:bg-gray-700 hover:text-white">Team</Link>
              <Link to="/userGuide" className="block md:inline-block py-2 px-2 text-white hover:bg-gray-700 hover:text-white">User Guide</Link>
              <Link to="/researchInfo" className="block md:inline-block py-2 px-2 text-white hover:bg-gray-700 hover:text-white">Research at IIT Ropar</Link>
              <Link to="/contactUs" className="block md:inline-block py-2 px-2 text-white hover:bg-gray-700 hover:text-white">Contact Us</Link>
            </div>
            <div className="mt-4 md:mt-0 ml-2 mr-4">
              <button onClick={(e) => {
                e.preventDefault();
                navigate('/login');
              }} className="border px-5 py-2 rounded font-bold">Login</button>
            </div>
          </div>
        </div>
      </nav>


      <section className="bg-white dark:bg-gray-900 py-16 px-4">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-extrabold mb-4 text-gray-800 dark:text-white">PhD Grant Management Portal</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">Welcome to the PhD Conference Grant Management Portal. This portal simplifies the process of managing conference grant applications.</p>
            <div className="flex space-x-3">
              <a href="#" className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-white rounded-lg bg-blue-500 hover:bg-blue-600 transition duration-300">
                Get Started
              </a>
              <a href="#" className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-blue-500 border border-blue-500 rounded-lg hover:bg-blue-50 transition duration-300">
                Watch Video
              </a>
            </div>
          </div>
          <div className="hidden lg:flex justify-center">
            <img src={conference} alt="Conference" className="w-full max-w-lg" />
          </div>
        </div>

        <div className="container mx-auto mt-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Application Process</h2>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Step 1</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">The faculty will review the form submitted by the student. If the form is complete and accurate, the faculty will approve the application by adding their signature and send it to the head of the department for further review. If the form is incomplete or inaccurate, the faculty will reject the application and return it to the student.</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Step 2</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">The head of the department will review the application approved by the faculty. If the application is complete and accurate, the head of the department will approve the application by adding their signature and send it to the research section for further review. If the application is incomplete or inaccurate, the head of the department will reject the application and return it to the faculty.</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Step 3</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">The research section will review the application approved by the head of the department. If the application is complete and accurate, the research section will approve the application by adding their signature and send it to the accounts section for further review. If the application is incomplete or inaccurate, the research section will reject the application and return it to the head of the department.</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Step 4</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">The accounts section will review the application approved by the research section. If the application is complete and accurate, the accounts section will approve the application by adding their signature and send it to the dean of college for further review. If the application is incomplete or inaccurate, the accounts section will reject the application and return it to the research section.</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Step 5</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">The dean of college will review the application approved by the accounts section. If the application is complete and accurate, the dean of college will approve the application by adding their signature and the reimbursement will be processed. If the application is incomplete or inaccurate, the dean of college will reject the application and return it to the accounts section. It will then go to the accounts section again for the final payment process.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default UserGuide;
