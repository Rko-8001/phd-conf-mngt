import React, { useState } from 'react'
import { BASE_URL } from '../../components/requests/URL';
import { getUserToken } from '../../components_login/Tokens';

export default function UpdateInfoModal({ setModalClass, profileInfo , setProfileInfo }) {

    const [newMobile, setNewMobile] = useState(profileInfo?.mobileNo ||'');
    const [newName, setNewName] = useState(profileInfo?.name||'');
    const [newEntryNumber, setNewEntryNumber] = useState(profileInfo?.entryNo||'');
    const [newEmail, setNewEmail] = useState(profileInfo?.email||'');
    const [newDepartment, setNewDepartment] = useState(profileInfo?.department||'');
    const [newDateOfJoining, setNewDateOfJoining] = useState(profileInfo?.dateOfJoining||'');
    const [newFellowshipCategory, setNewFellowshipCategory] = useState(profileInfo?.fellowshipCategory||'');
    const [newSpecialization, setNewSpecialization] = useState(profileInfo?.specialization||'');
    const [newSupervisor, setNewSupervisor] = useState(profileInfo?.nameOfSupervisor||'');
    const [newSupervisorEmail , setNewSupervisorEmail] =useState(profileInfo?.emailOfSupervisor||'');

    async function updateInfo(e) {
        e.preventDefault();

        const repsonse = await fetch(`${BASE_URL}/updateInfo`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${getUserToken()}`,
            },
            body: JSON.stringify({
                mobileNo: newMobile,
                name: newName,
                entryNumber: newEntryNumber,
                email: newEmail,
                department: newDepartment,
                dateOfJoining: newDateOfJoining,
                fellowshipCategory: newFellowshipCategory,
                specialization: newSpecialization,
                supervisor: newSupervisor,
                supervisorEmail : newSupervisorEmail,
                aisehi: "aisehi"
            })
        })
        setModalClass("hidden");
        if (repsonse.status === 200) {
            window.alert("Updated");
            const updatedProfileInfo = {
                ...profileInfo,
                mobileNo: newMobile,
                name: newName,
                entryNo: newEntryNumber,
                email: newEmail,
                department: newDepartment,
                dateOfJoining: newDateOfJoining,
                fellowshipCategory: newFellowshipCategory,
                areaOfSpecialisation: newSpecialization,
                nameOfSupervisor: newSupervisor,
                emailOfSupervisor: newSupervisorEmail,
            };
            setProfileInfo(updatedProfileInfo);
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
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-wallet" width="52" height="52" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
                            <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
                        </svg>
                    </div>
                    <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">Enter Updated Details</h1>
                    <label htmlFor="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Full name</label>
                    <input
                        id="name"
                        defaultValue={profileInfo?.name}
                        onChange={(e) => setNewName(e.target.value)}
                        className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-4 text-sm border-gray-300 rounded border"
                        placeholder="Enter your name"
                    />
                    <label htmlFor="entrynumber" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Entry Number</label>
                    <input
                        id="entry number"
                        defaultValue={profileInfo?.entryNo}
                        onChange={(e) => setNewEntryNumber(e.target.value)}
                        className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-4 text-sm border-gray-300 rounded border"
                        placeholder="Enter your entry number"
                    />
                    <label htmlFor="email" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Email</label>
                    <input
                        id="email"
                        defaultValue={profileInfo?.email}
                        onChange={(e) => setNewEmail(e.target.value)}
                        className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-4 text-sm border-gray-300 rounded border"
                        placeholder="Enter your email"
                    />
                    <label htmlFor="dept" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Department</label>
                    <input
                        id="dept"
                        defaultValue={profileInfo?.department}
                        onChange={(e) => setNewDepartment(e.target.value)}
                        className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-4 text-sm border-gray-300 rounded border"
                        placeholder="Enter your department"
                    />
                    <label htmlFor="date of joining" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Date of Joining</label>
                    <input
                        id="date of joining"
                        defaultValue={profileInfo?.dateOfJoining}
                        onChange={(e) => setNewDateOfJoining(e.target.value)}
                        className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-4 text-sm border-gray-300 rounded border"
                        placeholder="Enter your date of joining"
                    />
                    <label htmlFor="fellowship category" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Fellowship Category</label>
                    <input
                        id="fellowship category"
                        defaultValue={profileInfo?.fellowshipCategory}
                        onChange={(e) => setNewFellowshipCategory(e.target.value)}
                        className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-4 text-sm border-gray-300 rounded border"
                        placeholder="Enter your fellowship category"
                    />
                    <label htmlFor="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Area of Specialisation</label>
                    <input
                        id="specialization"
                        defaultValue={profileInfo?.areaOfSpecialisation}
                        onChange={(e) => setNewSpecialization(e.target.value)}
                        className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-4 text-sm border-gray-300 rounded border"
                        placeholder="Enter your specialization"
                    />
                    <label htmlFor="name of supervisor" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Name of Supervisor</label>
                    <input
                        id="supervisor name"
                        defaultValue={profileInfo?.nameOfSupervisor}
                        onChange={(e) => setNewSupervisor(e.target.value)}
                        className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-4 text-sm border-gray-300 rounded border"
                        placeholder="Enter name of supervisor"
                    />
                    <label htmlFor="mail of supervisor" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Email of Supervisor</label>
                    <input
                        id="supervisor mail"
                        defaultValue={profileInfo?.emailOfSupervisor}
                        onChange={(e) => setNewSupervisorEmail(e.target.value)}
                        className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-4 text-sm border-gray-300 rounded border"
                        placeholder="Enter email of suprevisor"
                    />
                    <label htmlFor="mobile" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Mobile No</label>
                    <div className="relative mb-5 mt-2">
                        <div className="absolute text-gray-600 flex items-center px-4 border-r h-full">
                            +91
                        </div>
                        <input
                            id="mobile"
                            defaultValue={profileInfo?.mobileNo}
                            onChange={(e) => setNewMobile(e.target.value)}
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
