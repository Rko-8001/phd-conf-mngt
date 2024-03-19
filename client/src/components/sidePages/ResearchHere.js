import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Research1 from '../commonPages/assets/Research1.png';
import Research2 from '../commonPages/assets/Research2.png';
import Research3 from '../commonPages/assets/Research3.png';
import { Link } from 'react-router-dom';
import Footer from '../../components_student/Side/Footer';
const ResearchHere = () => {
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

            <div className="h-full flex flex-col justify-center bg-gray-100 dark:bg-gray-900 pb-7">
                <section className="container mx-auto py-12 px-4 flex-grow">
                    <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8">
                        Research at IIT Ropar
                    </h2>

                    <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
                        <div className="rounded-xl overflow-hidden shadow-md flex flex-col">
                            <div className="aspect-w-16 aspect-h-9">
                                <img
                                    src={Research1}
                                    alt="Research 1"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6 bg-white dark:bg-gray-800 flex flex-col justify-between">
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">COVID-19 Inventions/Solutions</h3>
                                <a href="https://iitrpr.ac.in/covid-19-inventionssolutions" className="block text-center py-2 px-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300 ease-in-out">
                                    Navigate
                                </a>
                            </div>
                        </div>

                        <div className="rounded-xl overflow-hidden shadow-md flex flex-col">
                            <div className="aspect-w-16 aspect-h-9">
                                <img
                                    src={Research2}
                                    alt="Research 2"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6 bg-white dark:bg-gray-800 flex flex-col justify-between">
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Research Highlights</h3>
                                <a href="https://iitrpr.ac.in/research-highlights" className="block text-center py-2 px-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300 ease-in-out">
                                    Navigate
                                </a>
                            </div>
                        </div>

                        <div className="rounded-xl overflow-hidden shadow-md flex flex-col">
                            <div className="aspect-w-16 aspect-h-9">
                                <img
                                    src={Research3}
                                    alt="Research 3"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6 bg-white dark:bg-gray-800 flex flex-col justify-between">
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">More Research at IIT Ropar</h3>
                                <a href="https://iitrpr.ac.in/research-iitrpr" className="block text-center py-2 px-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300 ease-in-out">
                                    Navigate
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}

export default ResearchHere;
