import React from 'react'
import Enclosures from './Enclosures';

export default function Particulars(props) {

    const tableRows = props.tableData.map((info) => {
        return (
            <tr key={info.particular} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">{info.particular}</th>
                <th className="px-6 py-2">{info.amount}</th>
            </tr>
        );
    });

    return (
        <>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-2">
                    <label htmlFor="mobileNo" name='mobileNo' className="block text-sm font-medium leading-6 text-gray-900">
                        Particulars
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="particular"
                            id="abcd"
                            value={props.rowData.particular}
                            onChange={props.getRowData}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor="accountNo" className="block text-sm font-medium leading-6 text-gray-900">
                        Amount
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="amount"
                            id="amount"
                            value={props.rowData.amount}
                            onChange={props.getRowData}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-2">
                    {/* <label htmlFor="accountNo" className="block text-sm font-medium leading-6 text-gray-900">
                        Upload Bill
                    </label>
                    <div className="mt-2">
                        <input
                            type="file"
                            name="amount"
                            id="amount"
                            value={props.rowData.amount}
                            onChange={props.getRowData}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div> */}
                    <Enclosures
                        title="Upload Bill"
                        name="yoursignature"
                        onChangeFunction={props.fileFunction}
                        type="file"
                        acceptType="application/pdf"
                    />
                </div>


            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                    onClick={props.addRowData}
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    ADD
                </button>
            </div>



            <br />
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Particulars
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Amount (Rs)
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Bill
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Travel
                            </th>
                            <td className="px-6 py-2">
                                <input
                                    type="text"
                                    name="travel"
                                    value={props.travel}
                                    className=""
                                    onChange={props.getFixedParts}
                                />
                            </td>
                            <td className="px-6 py-2">
                                <Enclosures
                                    title="Upload Bill"
                                    name="yoursignature"
                                    onChangeFunction={props.fileFunction}
                                    type="file"
                                    acceptType="application/pdf"
                                />
                            </td>

                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Registration Fee
                            </th>
                            <td className="px-6 py-2">
                                <input
                                    type="text"
                                    name="registrationFee"
                                    value={props.registrationFee}
                                    className=""
                                    onChange={props.getFixedParts}
                                />
                            </td>
                            <td className="px-6 py-2">
                                <Enclosures
                                    title="Upload Bill"
                                    name="yoursignature"
                                    onChangeFunction={props.fileFunction}
                                    type="file"
                                    acceptType="application/pdf"
                                />
                            </td>

                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Food
                            </th>
                            <td className="px-6 py-2">
                                <input
                                    type="text"
                                    name="food"
                                    value={props.food}
                                    className=""
                                    onChange={props.getFixedParts}
                                />
                            </td>
                            <td className="px-6 py-2">
                                <Enclosures
                                    title="Upload Bill"
                                    name="yoursignature"
                                    onChangeFunction={props.fileFunction}
                                    type="file"
                                    acceptType="application/pdf"
                                />
                            </td>

                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Stay
                            </th>
                            <td className="px-6 py-2">
                                <input
                                    type="text"
                                    name="stay"
                                    value={props.stay}
                                    className=""
                                    onChange={props.getFixedParts}
                                />
                            </td>
                            <td className="px-6 py-2">
                                <Enclosures
                                    title="Upload Bill"
                                    name="yoursignature"
                                    onChangeFunction={props.fileFunction}
                                    type="file"
                                    acceptType="application/pdf"
                                />
                            </td>
                        </tr>
                        {tableRows}
                    </tbody>
                </table>
            </div>
        </>
    )
}
