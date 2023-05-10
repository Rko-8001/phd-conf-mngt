import React, { useState, useEffect } from 'react'
import { BASE_URL } from '../requests/URL';
import { getUserToken } from '../../components_login/Tokens';
import userPng from './assets/User.png'

function UpperNav() {

    const [userData, setUserData] = useState({})

    async function getUserData() {
        const response = await fetch(`${BASE_URL}/infoLoading`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${getUserToken()}`
            },
        });

        return response.json();
    }
    useEffect(() => {
        getUserData().then((data) => {
            setUserData(data);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    return (
        <>
            <header>
                <nav className="bg-black border-gray-200  px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                    <div className="flex">

                        <div style={{ "color": "white", "fontSize": "24px" }} className="flex-1 flex-wrap justify-between items-center py-1 mx-auto max-w-screen-xl">
                            PhdCGM : PhD Conference Grant Management Portal
                        </div>
                        {userData && userData?.name && userData?.email &&
                            <div className="flex items-center">
                                <div className="w-8 h-8 overflow-hidden ">
                                    <img src={userPng}
                                        className=" w-full h-full" alt="avatar" />
                                </div>
                                <h3 className="mx-2 text-white dark:text-gray-200 ">{userData?.name} ({userData?.email})</h3>
                            </div>
                        }
                    </div>
                </nav>
            </header >
        </>
    )
}

export default UpperNav