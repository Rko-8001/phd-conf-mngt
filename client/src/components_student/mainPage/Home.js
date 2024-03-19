import React, { useState, useEffect } from 'react'
import Sidebar from '../Side/Sidebar';
import Newcomp from '../Side/Newcomp';
import Newcomp3 from '../Side/Newcomp3';
import { FaSort } from 'react-icons/fa';
import { FaMoneyBillAlt } from 'react-icons/fa';
import ApplicationsHome from '../applications/ApplicationsHome';
import { FaChartLine } from 'react-icons/fa';
import FlexPage from '../../components/commonPages/FlexPage';
import { BASE_URL } from '../../components/requests/URL';
import { getUserToken } from '../../components_login/Tokens';

function Home(props) {

    const [studentInfo, setStudentInfo] = useState({});

    async function fetchUserInfo() {
        const response = await fetch(`${BASE_URL}/studentInfoLoading`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getUserToken()}`
            }
        })
        return response.json();
    }
    useEffect(() => {
        fetchUserInfo().then((data) => {
            setStudentInfo(data);
        }).catch((error) => {
            console.log(error);
        })
    }, [])

    return (
        <>
            <div>
                <Newcomp />
                <div className="container px-10 py-10 mx-5">
                    <span style={{ display: 'flex', alignItems: 'center' }}>
                        <FaChartLine size={32} style={{ marginRight: '1rem' }} />
                        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white"> <span className="underline decoration-blue-500">Welcome to Student Portal</span></h1>
                    </span>
                </div>
                <div className='px-2 w-full'>
                    <div className='flex'>
                        <div className="max-w-sm mx-auto rounded overflow-hidden ">
                            <div className="my-5  bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="flex items-center justify-between bg-gray-100 px-4 py-2">
                                    <span style={{ display: 'flex', alignItems: 'center' }}>
                                        <FaSort color="red" size={32} style={{ marginRight: '0.5rem' }} />
                                        <span className='text-lg font-medium'>Your previous applications status:</span>
                                    </span>
                                    <div className="flex">

                                    </div>
                                </div>
                                <div className="p-2">
                                </div>
                            </div>
                            <ApplicationsHome />
                        </div>
                        <div className="max-w-sm mx-auto">
                            <div className="my-5  bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="flex items-center justify-between bg-gray-100 px-4 py-2">
                                    <span style={{ display: 'flex', alignItems: 'center' }}>
                                        <FaMoneyBillAlt size={32} style={{ marginRight: '1rem' }} />
                                        <span className='text-lg font-medium'>Your current finances </span>
                                    </span>
                                    <div className="flex">

                                    </div>
                                </div>
                                <div className="p-2">
                                </div>
                            </div>
                            <div className="px-4">
                                <div className="my-5 p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                                    <span className="inline-block text-blue-500 dark:text-blue-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                                        </svg>
                                    </span>

                                    <h2 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Available Balance: {studentInfo?.balance} Rs</h2>
                                    <h2 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Unsettled Amount: {studentInfo?.unsettledBalance} Rs</h2>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className='mx-auto'></div> */}
                    {/* <Newcomp3 /> */}
                    {/* <FlexPage /> */}
                    <br />
                    <br />

                </div>
            </div>


        </>
    )
}

export default Home