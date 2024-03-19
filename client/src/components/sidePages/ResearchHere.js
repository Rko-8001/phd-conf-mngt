import React from 'react'
import Research1 from '../commonPages/assets/Research1.png';
import Research2 from '../commonPages/assets/Research2.png';
import Research3 from '../commonPages/assets/Research3.png';

const ResearchHere = () => {
    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-10 mx-auto">
                    <p className="underline mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">
                        <b>Research AT IIT Ropar:</b>
                    </p>

                    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
                        <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                            <span className="inline-block text-blue-500 dark:text-blue-400">
                                <img
                                    className="mx-auto h-[26rem] w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                                    src={Research1}
                                    alt="woman"
                                    loading="lazy"
                                    width="805"
                                    height="805"
                                />
                            </span>

                            <a href="https://iitrpr.ac.in/covid-19-inventionssolutions" className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                                <p>Navigate </p>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </a>
                        </div>

                        <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                            <span className="inline-block text-blue-500 dark:text-blue-400">
                                <img
                                    className="mx-auto h-[26rem] w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                                    src={Research2}
                                    alt="woman"
                                    loading="lazy"
                                    width="805"
                                    height="805"
                                />
                            </span>

                            <a href="https://iitrpr.ac.in/research-highlights" className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                                <p>Navigate </p>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </a>
                        </div>

                        <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                            <span className="inline-block text-blue-500 dark:text-blue-400">
                                <img
                                    className="mx-auto h-[26rem] w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                                    src={Research3}
                                    alt="woman"
                                    loading="lazy"
                                    width="805"
                                    height="805"
                                />
                            </span>

                            <a href="https://iitrpr.ac.in/research-iitrpr" className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                                <p>Navigate </p>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* <div className="my-5 grid gap-6 px-4 sm:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div className="group relative rounded-3xl  space-y-6 overflow-hidden">
                    <img
                        className="mx-auto h-[26rem] w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                        src={Research1}
                        alt="woman"
                        loading="lazy"
                        width="805"
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
            </div> */}
        </div>
    )
}

export default ResearchHere
