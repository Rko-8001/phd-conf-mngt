import React, { useState } from 'react'
import { BASE_URL } from '../../components/requests/URL';
import { getUserToken } from '../../components_login/Tokens';

export default function UpdateInfoModal({ setModalClass, mobileNo }) {

    const [newMobile, setNewMobile] = useState(mobileNo);

    async function updateInfo(e) {
        e.preventDefault();

        const repsonse = await fetch(`${BASE_URL}/updateInfo`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${getUserToken()}`,
            },
            body: JSON.stringify({ mobileNo: newMobile, aisehi: "aisehi" })
        })
        setModalClass("hidden");
        if (repsonse.status === 200) {
            window.alert("Updated");
        }
        else {
            window.alert("Error Occured. Please Try Again..");
        }
    
    }
    
    return (
        <>
            <div className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
                <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                    <div className="w-full flex justify-start text-gray-600 mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-wallet" width="52" height="52" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
                            <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
                        </svg>
                    </div>
                    <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">Enter Updated Details</h1>
                    <label for="email2" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Mobile No</label>
                    <div className="relative mb-5 mt-2">
                        <div className="absolute text-gray-600 flex items-center px-4 border-r h-full">
                            +91
                        </div>
                        <input
                            id="email2"
                            defaultValue={mobileNo}
                            onChange={(e) => {
                                setNewMobile(e.target.value);
                            }}
                            className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-16 text-sm border-gray-300 rounded border" placeholder="XXXX - XXXX - XX" />
                    </div>


                    <div className="flex items-center justify-start w-full">
                        <button
                            onClick={updateInfo}
                            className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm"
                        >
                            Update
                        </button>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                setModalClass("hidden");
                            }}
                            className="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
                        >
                            Cancel
                        </button>
                    </div>

                </div>
            </div>

        </>
    )
}
