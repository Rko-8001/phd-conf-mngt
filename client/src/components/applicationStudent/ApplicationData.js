import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


function ApplicationData({ data, user }) {
    const [value, setValue] = useState('one');


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const getFinances = (finance) => {
        var totalAmount = 0;

        finance.forEach(element => {
            totalAmount = totalAmount + Number(element.amount);
        });
        return totalAmount;
    }

    const viewFinances = data.finances.map((element, index) =>
        <tr>
            <td scope="col" className="px-12 py-4 text-sm font-medium text-left whitespace-nowrap">
                <div className="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                    {element.particular}
                </div>
            </td>
            <td scope="col" className="px-12 py-4 text-sm font-medium text-left whitespace-nowrap">
                <div className="inline px-3 py-1 text-sm font-normal text-gray-500 bg-gray-100 rounded-full dark:text-gray-400 gap-x-2 dark:bg-gray-800">
                    {element.amount} Rs
                </div>
            </td>
        </tr>
    )

    return (
        <>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="wrapped label tabs">
                            <Tab value="one" label="Personal Details" />
                            <Tab value="two" label="Conference Details" />
                            <Tab value="three" label="Finance Details" />
                        </TabList>
                    </Box>

                    <TabPanel value="one">
                        <div className="overflow-hidden mt-5 bg-white shadow sm:rounded-lg">
                            <div className="px-4 py-2 sm:px-6">
                                <h3 className="text-base font-semibold leading-6 text-gray-900">Applicant Information</h3>
                            </div>
                            <div className="border-t border-gray-200">
                                <dl>
                                    <div className="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Name of PhD Scholar</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{user.name}</dd>
                                    </div>

                                    <div className="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Email / Entry No</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{user.email} / {user.entryNo}</dd>
                                    </div>

                                    <div className="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Department</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{user.department}</dd>
                                    </div>

                                    <div className="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Date of Joining </dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{user.dateOfJoining}</dd>
                                    </div>

                                    <div className="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Supervisor </dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{user.nameOfSupervisor} ({user.emailOfSupervisor})</dd>
                                    </div>


                                    <div className="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Area Of Specialisation </dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{user.areaOfSpecialisation}</dd>
                                    </div>

                                    <div className="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Fellowship Category </dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{user.fellowshipCategory}</dd>
                                    </div>

                                    <div className="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Mobile No</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{data.mobileNo}</dd>
                                    </div>

                                    <div className="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Bank Acc No</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{data.bankAccoutNo}</dd>
                                    </div>

                                </dl>
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel value="two">
                        <div className="overflow-hidden mt-2 bg-white shadow sm:rounded-lg">
                            <div className="px-4 py-2 sm:px-6">
                                <h3 className="text-base font-semibold leading-6 text-gray-900">Conference Details</h3>
                            </div>
                            <div className="border-t border-gray-200">
                                <dl>
                                    <div className="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Name of Conference</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{data.nameOfConference}</dd>
                                    </div>

                                    <div className="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Venue of Conference</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{data.venueOfConference}</dd>
                                    </div>

                                    <div className="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Period Of Conference</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{data.conferenceStarts} - {data.conferenceEnds}</dd>
                                    </div>

                                    <div className="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Paper(s)/Poster(s) to Present in Conference </dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{data.paperInConference}</dd>
                                    </div>

                                    <div className="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Financial support required </dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{data.financialSupport}</dd>
                                    </div>


                                    <div className="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Duty Leave </dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{data.studentLeaveStarts} - {data.studentLeaveEnds}</dd>
                                    </div>

                                    <div className="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Leave Days</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">3</dd>
                                    </div>

                                    <div className="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">
                                            Enclosures Attached
                                        </dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                            <ul role="list" className="divide-y divide-gray-200 rounded-md border border-gray-200">
                                                <li className="flex items-center justify-between py-1 pl-3 pr-4 text-sm">
                                                    <div className="flex w-0 flex-1 items-center">
                                                        <svg className="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                            <path fill-rule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clip-rule="evenodd" />
                                                        </svg>
                                                        <span className="ml-2 w-0 flex-1 truncate">
                                                            Copy of Acceptance
                                                        </span>
                                                    </div>
                                                    <div className="ml-4 flex-shrink-0">
                                                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Download</a>
                                                    </div>
                                                </li>
                                                <li className="flex items-center justify-between py-1 pl-3 pr-4 text-sm">
                                                    <div className="flex w-0 flex-1 items-center">
                                                        <svg className="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                            <path fill-rule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clip-rule="evenodd" />
                                                        </svg>
                                                        <span className="ml-2 w-0 flex-1 truncate">
                                                            Copy of Conference Brochure
                                                        </span>
                                                    </div>
                                                    <div className="ml-4 flex-shrink-0">
                                                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Download</a>
                                                    </div>
                                                </li>

                                                <li className="flex items-center justify-between py-1 pl-3 pr-4 text-sm">
                                                    <div className="flex w-0 flex-1 items-center">
                                                        <svg className="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                            <path fill-rule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clip-rule="evenodd" />
                                                        </svg>
                                                        <span className="ml-2 w-0 flex-1 truncate">
                                                            Copy of Abstract
                                                        </span>
                                                    </div>
                                                    <div className="ml-4 flex-shrink-0">
                                                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Download</a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel value="three">
                        <div className="overflow-hidden mt-2 bg-white shadow sm:rounded-lg">
                            <div className="px-4 py-2 sm:px-6">
                                <h3 className="text-base font-semibold leading-6 text-gray-900">Conference Details</h3>
                            </div>
                            <div className="border-t border-gray-200">
                                <dl>
                                    <div className="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Advance Required</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{data.advances ? "YES" : "NO"}</dd>
                                    </div>

                                    <div className="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">
                                            Enclosures Attached
                                        </dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                            <div className="flex flex-col mt-6">
                                                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                                        <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">

                                                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                                                <thead className="bg-gray-50 dark:bg-gray-800">
                                                                    <tr>
                                                                        <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                                            Particulars
                                                                        </th>
                                                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                                            Amount (in Rs)
                                                                        </th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                                                    {viewFinances}
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </dd>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Amount Needed</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{getFinances(data.finances)} Rs</dd>
                                    </div>

                                </dl>
                            </div>
                        </div>
                    </TabPanel>
                </TabContext >
            </Box >

        </>
    )
}

export default ApplicationData