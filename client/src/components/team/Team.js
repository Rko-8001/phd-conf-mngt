import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Puneet from './images/puneet.png';
import adish from './images/adish.jpg';
import vinay from './images/vinay.jpg';
import yadwinder from './images/yadwinder.jpeg';
import tanuj from './images/tanuj.jpg';
import './Team.css';
import { Link } from 'react-router-dom';
import Footer from '../../components_student/Side/Footer';


function Team() {

  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
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



      <div className="py-20">
        <div className="xl:container mx-auto px-6 md:px-12">
          <div className="mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
              Meet Our Team
            </h2>
            <p className="text-gray-600 text-center dark:text-gray-300 lg:mx-auto lg:w-5/12">
              We are thankful to IIT Ropar for giving us this wonderful opportunity. We would also like to thank our mentor Dr Puneet Goyal for guiding us throughout and giving us regular feedback.
            </p>

          </div>
          <div className='my-5 grid gap-6 px-4 sm:px-0 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3'>
            <div className="group relative rounded-3xl  space-y-6 overflow-hidden"></div>
            <div className="group relative rounded-3xl  space-y-6 overflow-hidden">
              <img
                className="mx-auto h-[26rem] w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                src={Puneet}
                alt="Puneet Goyal, Professor, IIT Ropar"
                loading="lazy"
                width="640"
                height="805"
              />
              <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
                <div>
                  <h4 className="text-xl font-semibold dark:text-gray-700 text-white">Dr Puneet Goyal</h4>
                  <span className="block text-sm text-gray-500">Mentor & Advisor</span>
                </div>
                <p className="mt-8 text-gray-300 dark:text-gray-600">Department - Computer Science and Engineering</p>
              </div>

            </div>
          </div>
          <p className="text-gray-600 text-center dark:text-gray-300 lg:mx-auto lg:w-5/12">
            Here is our team, comprising Members with diverse skills and experiences each of their's contribution made this site possible
          </p>
          <div className="my-5 grid gap-6 px-4 sm:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="group relative rounded-3xl  space-y-6 overflow-hidden">
              <img
                className="mx-auto h-[26rem] w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                src={adish}
                alt="Adish Lodha"
                loading="lazy"
                width="640"
                height="805"
              />
              <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
                <div>
                  <h4 className="text-xl font-semibold dark:text-gray-700 text-white">Adish Lodha</h4>
                  <span className="block text-sm text-gray-500">Member</span>
                </div>
                <p className="mt-8 text-gray-300 dark:text-gray-600">Department - Computer Science and Engineering</p>
              </div>

            </div>
            <div className="group relative rounded-3xl  space-y-6 overflow-hidden">
              <img
                className="mx-auto h-[26rem] w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                src={yadwinder}
                alt="Yadwinder Singh"
                loading="lazy"
                width="640"
                height="805"
              />
              <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
                <div>
                  <h4 className="text-xl font-semibold dark:text-gray-700 text-white">Yadwinder Singh</h4>
                  <span className="block text-sm text-gray-500">Member</span>
                </div>
                <p className="mt-8 text-gray-300 dark:text-gray-600">Department - Computer Science and Engineering</p>
              </div>

            </div>
            <div className="group relative rounded-3xl  space-y-6 overflow-hidden">
              <img
                className="mx-auto h-[26rem] w-full grayscale object-cover object-top transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                src={tanuj}
                alt="Tanuj Kumar"
                loading="lazy"
                width="640"
                height="805"
              />
              <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
                <div>
                  <h4 className="text-xl font-semibold dark:text-gray-700 text-white">Tanuj Kumar</h4>
                  <span className="block text-sm text-gray-500">Member</span>
                </div>
                <p className="mt-8 text-gray-300 dark:text-gray-600">Department - Computer Science and Engineering</p>
              </div>

            </div>
            <div className="group relative rounded-3xl  space-y-6 overflow-hidden">
              <img
                className="mx-auto h-[26rem] w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                src={vinay}
                alt="Vinay Kumar"
                loading="lazy"
                width="640"
                height="805"
              />
              <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
                <div>
                  <h4 className="text-xl font-semibold dark:text-gray-700 text-white">Vinay Kumar</h4>
                  <span className="block text-sm text-gray-500">Member</span>
                </div>
                <p className="mt-8 text-gray-300 dark:text-gray-600">Department - Computer Science and Engineering</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )

}

export default Team