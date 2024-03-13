import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../requests/URL';



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
                        }}
                            className="border px-5 py-2 rounded font-bold">Login</button>
                    </div>
                </div>
            </nav>



            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
                    <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a discrepency? ? Let us know.</p>
                    <form 
                    onSubmit={handleContact}
                    className="space-y-8">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                            <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="user@iitrpr.ac.in" required />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                            <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                            <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..." required></textarea>
                        </div>
                        <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-500 hover:bg-blue-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
                        {/* <button onClick={handleContact} className="py-3 px-5 text-sm font-medium text-center text-gray-900 rounded-lg bg-blue-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button> */}
                        
                    </form>
                </div>
            </section>
        </>
    )
}

export default ContactUs