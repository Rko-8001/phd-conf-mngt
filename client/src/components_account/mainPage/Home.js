import React, { useState, useEffect } from 'react'
import { getUserToken } from '../../components_login/Tokens';
import LoaderContent from '../../components/loading/LoaderContent';
import { delay } from '../../components/loading/Delay';
import { BASE_URL } from '../../components/requests/URL';
import ApplicationsHome from '../applications/ApplicationsHome';
import Links from '../../components/commonPages/Links';
import { FaSort } from 'react-icons/fa';
import { FaMoneyBillAlt } from 'react-icons/fa';
import { FaChartLine } from 'react-icons/fa';
import FlexPage from '../../components/commonPages/FlexPage';
import Heading from '../../components/navBars/Heading';

export default function Home() {
    const [user, setUser] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const getUserInfo = async (req, res) => {
        try {
            const token = getUserToken();
            const resp = await fetch(`${BASE_URL}/infoLoading`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "authorization": `Bearer ${token}`
                },
            });
            return resp.json();
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getUserInfo().then((resp) => {
            setUser(resp);

            delay(100).then(() => {
                setIsLoading(false);
            }).catch((error) => {
                console.log(error);
            })


        }).catch((error) => {
            console.log(error);
        })
    }, []);

    return (
        <>
            {isLoading
                ?
                <LoaderContent />
                :
                <>
                    <div>
                        <Heading />
                        <Links />
                        <div class="container px-10 py-10 mx-5">
                            <span style={{ display: 'flex', alignItems: 'center' }}>
                                <FaChartLine size={32} style={{ marginRight: '1rem' }} />
                                <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white"> <span class="underline decoration-blue-500">Welcome to Accounts Section</span></h1>
                            </span>
                        </div>
                        <div className='px-2 w-full'>
                            <div className='flex'>
                                <div className="max-w-sm mx-auto rounded overflow-hidden ">
                                    <div className="my-5  bg-white rounded-lg shadow-md overflow-hidden">
                                        <div className="flex items-center justify-between bg-gray-100 px-4 py-2">
                                            <span style={{ display: 'flex', alignItems: 'center' }}>
                                                <FaSort color="red" size={32} style={{ marginRight: '0.5rem' }} />
                                                <span className='text-lg font-medium'>Recently Submitted applications:</span>
                                            </span>
                                            <div className="flex">

                                            </div>
                                        </div>
                                        <div className="p-2">
                                        </div>
                                    </div>
                                    <ApplicationsHome />
                                </div>
                                {/* <div className="max-w-sm mx-auto">
                                    <div className="my-5  bg-white rounded-lg shadow-md overflow-hidden">
                                        <div className="flex items-center justify-between bg-gray-100 px-4 py-2">
                                            <span style={{ display: 'flex', alignItems: 'center' }}>
                                                <FaMoneyBillAlt size={32} style={{ marginRight: '1rem' }} />
                                                <span className='text-lg font-medium'>Current finances </span>
                                            </span>
                                            <div className="flex">

                                            </div>
                                        </div>
                                        <div className="p-2">
                                        </div>
                                    </div>
                                    <div class="px-4">
                                        <div class="my-5 p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                                            <span class="inline-block text-blue-500 dark:text-blue-400">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                                                </svg>
                                            </span>

                                            <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">Available Balance:</h1>

                                            <p class="text-gray-500 dark:text-gray-300">

                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                                            </p>

                                            <a href="#" class="inline-flex p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                            {/* <div className='mx-auto'></div> */}
                            <FlexPage />
                            <br />
                            <br />

                        </div>
                    </div>


                </>
            }
        </>
    )
}