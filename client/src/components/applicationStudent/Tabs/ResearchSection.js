import React from 'react'

export default function ResearchSection({ data }) {
    return (
        <>
            <div className="overflow-hidden mt-2 bg-white shadow sm:rounded-lg">
                <div className="px-4 py-2 sm:px-6">
                    <h3 className="text-base font-semibold leading-6 text-gray-900">Research Section Review</h3>
                </div>
                <div className="border-t border-gray-200">
                    <dl>
                        <div className="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Grant Eligibility</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                {data.grantEligibility}
                            </dd>
                        </div>

                        <div className="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Earlier Sanctions
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
                                                                Name of Conference
                                                            </th>
                                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                                Amount Sanctioned (in Rs)
                                                            </th>
                                                            <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                                Date
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </dd>
                        </div>

                        <div className="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Remarks</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0">
                                {data.remarksResearch}
                            </dd>
                        </div>
                    </dl>
                </div >
            </div >
        </>
    )
}
