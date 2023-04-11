import React from 'react'



export default function FinanceDetails({ user, data }) {


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
        </>
    )
}
