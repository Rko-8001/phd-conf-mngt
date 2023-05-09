import React, { useState } from 'react'
import { getUserToken } from '../../../components_login/Tokens.js';
import { BASE_URL } from '../../requests/URL.js';

export default function DeanAction({ user, data }) {

    const [disable, setDisable] = useState(false);
    const [action, setAction] = useState("Take Action");


    const handleDisapprove = (e) => {
        e.preventDefault();
        if (!disable) {
            setDisable(true);
            setAction("Rejecting")
            updateStatus("-5");
        }
    }

    const handleApprove = (e) => {
        e.preventDefault();
        
        if (!disable) {
            setDisable(true);
            setAction("Approving")
            // alert("changing..");
            updateStatus("5");

        }
    }

    const updateStatus = async (status) => {
        const token = getUserToken();
        
        const res = await fetch(`${BASE_URL}/deanApproveOrDisapprove`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                id: data._id,
                status: status,
            })
        })
        // alert("changing..");
        setAction("Please Refresh the page..");
    }


    return (
        <>
            <div className="overflow-hidden mt-2 bg-white shadow sm:rounded-lg">
                <div className="px-4 py-2 sm:px-6">
                    <h3 className="text-base font-semibold leading-6 text-gray-900">Take Action</h3>
                </div>
                <div className="border-t border-gray-200">
                    <dl>
                        <div className="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Upload Dean's Signature</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                <div class="col-span-full">
                                    <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                        <div class="text-center">
                                            <svg class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
                                            </svg>
                                            <div class="mt-4 flex text-sm leading-6 text-gray-600">
                                                <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                                    <span>Upload image</span>
                                                    <input id="file-upload" name="file-upload" type="file" class="sr-only" />
                                                </label>
                                                <p class="pl-1">or drag and drop</p>
                                            </div>
                                            <p class="text-xs leading-5 text-gray-600">PNG, JPG less than 1MB</p>
                                        </div>
                                    </div>
                                </div>
                            </dd>
                        </div >

                    </dl >
                </div >
            </div >
            <br />
            <div className="flex overflow-hidden items-center bg-white border divide-x rounded-lg rtl:flex-row-reverse dark:bg-gray-900 dark:border-gray-700 dark:divide-gray-700">
                <div className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 transition-colors duration-200 sm:text-base sm:px-6 dark:hover:bg-gray-800 dark:text-gray-300 gap-x-3 hover:bg-gray-100">
                    {action}
                </div>
                <button onClick={handleApprove} className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 transition-colors duration-200 sm:text-base sm:px-6 dark:hover:bg-gray-800 dark:text-gray-300 gap-x-3 hover:bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                    </svg>
                    <span>Approve</span>
                </button>

                <button onClick={handleDisapprove} className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 transition-colors duration-200 sm:text-base sm:px-6 dark:hover:bg-gray-800 dark:text-gray-300 gap-x-3 hover:bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                    </svg>
                    <span>DisApprove</span>
                </button>
            </div>

        </>
    )
}