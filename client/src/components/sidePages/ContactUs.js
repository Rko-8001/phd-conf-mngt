import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../requests/URL';
import Footer from '../../components_student/Side/Footer';



function ContactUs() {
    const navigate = useNavigate();

    const handleContact = async (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        console.log(email, subject, message);
        // navigate('/login');

        // const res = await fetch(`${BASE_URL}/contact`, {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     // body: JSON.stringify({ email, mssg, otp })
        // });
    }
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


            <section className="bg-gray-100 dark:bg-gray-800">
                <div className="py-12 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-6 text-4xl font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
                    <p className="mb-8 text-lg font-medium text-center text-gray-700 dark:text-gray-300">Got a question or feedback? We'd love to hear from you.</p>
                    <form onSubmit={handleContact} className="space-y-6">
                        <div className="flex flex-col">
                            <label htmlFor="email" className="mb-2 text-sm font-medium text-gray-800 dark:text-gray-200">Your Email</label>
                            <input type="email" id="email" className="input-field" placeholder="user@example.com" required />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="subject" className="mb-2 text-sm font-medium text-gray-800 dark:text-gray-200">Subject</label>
                            <input type="text" id="subject" className="input-field" placeholder="How can we assist you?" required />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="message" className="mb-2 text-sm font-medium text-gray-800 dark:text-gray-200">Your Message</label>
                            <textarea id="message" rows="6" className="input-field" placeholder="Please provide details..." required></textarea>
                        </div>
                        <button type="submit" className="w-full py-3 text-sm font-medium text-white rounded-lg bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Send Message</button>
                    </form>
                </div>
            </section>
            <Footer />
        </>
            )
}

            export default ContactUs