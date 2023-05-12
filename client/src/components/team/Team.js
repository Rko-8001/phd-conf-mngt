import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Puneet from './images/puneet.png';
import adish from './images/adish.jpg';
import vinay from './images/vinay.jpg';
import yadwinder from './images/yadwinder.jpeg';
import tanuj from './images/tanuj.jpg';
import './Team.css';
import { Link } from 'react-router-dom';



function Team() {

  const navigate = useNavigate();


  return (
    <>

      <nav class="bg-gray-800 text-white flex justify-between items-center py-3 px-5">
        <h1 class="text-xl font-bold">PCMP :: PhD Conference Management Portal</h1>
        <div class="flex items-center space-x-5 text-xs">
          <ul class="flex space-x-10 text-gray-300">

            <li>
              <Link to="/meetTheTeam">Team</Link>
            </li>
            <li>
              <Link to="/work in progress">About</Link>
            </li>
            <li>
              <Link to="/contactUs">Contact Us</Link>
            </li>
          </ul>
          <div class="space-x-5">
            <button onClick={(e) => {
              e.preventDefault();
              navigate('/login');
            }} class="border px-5 py-2 rounded font-bold">Login</button>
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
            <div className='abc'>

              <div className="group relative rounded-3xl  space-y-6 overflow-hidden">
                <img
                  className="mx-auto h-[26rem] w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  src={Puneet}
                  alt="woman"
                  loading="lazy"
                  width="64"
                  height="80"
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
          </div>
          <p className="text-gray-600 text-center dark:text-gray-300 lg:mx-auto lg:w-5/12">
            Here is our team, comprising Members with diverse skills and experiences each of their's contribution made this site possible
          </p>
          <div className="my-5 grid gap-6 px-4 sm:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="group relative rounded-3xl  space-y-6 overflow-hidden">
              <img
                className="mx-auto h-[26rem] w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                src={adish}
                alt="woman"
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
                alt="woman"
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
                alt="woman"
                loading="lazy"
                width="640"
                height="805"
              />
              <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
                <div>
                  <h4 className="text-xl font-semibold dark:text-gray-700 text-white">Tanuj Goswami</h4>
                  <span className="block text-sm text-gray-500">Member</span>
                </div>
                <p className="mt-8 text-gray-300 dark:text-gray-600">Department - Computer Science and Engineering</p>
              </div>

            </div>
            <div className="group relative rounded-3xl  space-y-6 overflow-hidden">
              <img
                className="mx-auto h-[26rem] w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                src={vinay}
                alt="woman"
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



    </>
  )

}

export default Team