import React, {useState } from 'react'
import { getUserToken } from '../../../components_login/Tokens.js';
import { BASE_URL } from '../../requests/URL.js';
import Upload from '../uploadSign/Upload.js';

export default function FacultyAction({ user, data }) {

    const [disable, setDisable] = useState(false);
    const [action, setAction] = useState("Take Action");
    const [showModal, setShowModal] = useState(false);

    const [image, setImage] = useState(null);
    const handleDisapprove = (e) => {
        e.preventDefault();
        if (!disable) {
            setDisable(true);
            setAction("Rejecting")
            updateStatus("-1");
        }
    }

    const handleApprove = (e) => {
        e.preventDefault();

        if (!disable) {
            setDisable(true);
            setAction("Approving")
            updateStatus("1");
        }
    }


    const updateStatus = async (status) => {
        if (image === null || image === undefined) {
            window.alert("Please upload your signature");
            setAction("Take Action");
            return;
        }


        const token = getUserToken();
        const formData = new FormData();
        formData.append("id", data._id);
        formData.append("status", status);
        formData.append("image", image);

        console.log("Form Data hehe: ");

        const res = await fetch(`${BASE_URL}/facultyApproveOrDisapprove`, {
            method: "POST",
            headers: {
                "authorization": `Bearer ${token}`
            },
            body: formData
        })
        if (res.status === 200) {
            console.log("Successfull..")
        }
        else {
            window.alert("Error Occurred! Try Again..")
        }
        setAction("Please Refresh the page..");
    }


    return (
        <>

            {showModal &&
                <div className='w-full items-center'>
                    <Upload setShowModal={setShowModal} setUploadImage={setImage} />
                </div>
            }
            {!showModal &&
                <>
                    <div className="overflow-hidden mt-2 bg-white shadow sm:rounded-lg">
                        <div className="px-4 py-2 sm:px-6">
                            <h3 className="text-base font-semibold leading-6 text-gray-900">Take Action</h3>
                        </div>
                        <div className="border-t border-gray-200">
                            <dl>
                                <div className="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Upload Signature</dt>


                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                        <button
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setShowModal(true);
                                            }}
                                            className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 transition-colors duration-200 sm:text-base sm:px-6 dark:hover:bg-gray-800 dark:text-gray-300 gap-x-3 hover:bg-gray-100"
                                        >
                                            Upload Signature
                                        </button>
                                    </dd>
                                </div >

                                {image &&
                                    <div className='p-3 '>
                                        <p className='text-sm font-medium text-green-500'> Your Signature: </p>
                                        <img src={image} alt=" " className="w-1/2 h-1/2" />
                                    </div>
                                }

                            </dl >
                        </div >
                    </div >
                    <br />




                    <div className="flex overflow-hidden items-center bg-white border divide-x rounded-lg rtl:flex-row-reverse dark:bg-gray-900 dark:border-gray-700 dark:divide-gray-700">
                        <div className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 transition-colors duration-200 sm:text-base sm:px-6 dark:hover:bg-gray-800 dark:text-gray-300 gap-x-3 hover:bg-gray-100">
                            {action}
                        </div>
                        <button onClick={handleApprove} className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 transition-colors duration-200 sm:text-base sm:px-6 dark:hover:bg-gray-800 dark:text-gray-300 gap-x-3 hover:bg-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                            </svg>
                            <span>Approve</span>
                        </button>

                        <button onClick={handleDisapprove} className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 transition-colors duration-200 sm:text-base sm:px-6 dark:hover:bg-gray-800 dark:text-gray-300 gap-x-3 hover:bg-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                            </svg>
                            <span>DisApprove</span>
                        </button>
                    </div>
                </>
            }

        </>
    )
}