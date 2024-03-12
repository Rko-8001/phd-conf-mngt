import React from 'react'

export default function Particulars(props) {

    const tableRows = props.tableDataTravel.map((info) => {
        return (
            <tr key={info.particularTravel} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">{info.particularTravel}</th>
                <th className="px-6 py-2">{info.amountTravel}</th>
            </tr>
        );
    });

    return (
        <>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                    <label htmlFor="mobileNo" name='mobileNo' className="block text-sm font-medium leading-6 text-gray-900">
                        Departure Date
                    </label>
                    <div className="mt-2">
                        <input
                            type="date"
                            name="particular"
                            id="deptdate"
                            value={props.rowDataTravel.particularTravel}
                            onChange={props.getRowDataTravel}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label htmlFor="accountNo" className="block text-sm font-medium leading-6 text-gray-900">
                        Departure Time
                    </label>
                    <div className="mt-2">
                        <input
                            type="time"
                            name="amount"
                            id="depttime"
                            value={props.rowDataTravel.amountTravel}
                            onChange={props.getRowDataTravel}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label htmlFor="mobileNo" name='mobileNo' className="block text-sm font-medium leading-6 text-gray-900">
                        Departure Place
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="particular"
                            id="deptplace"
                            value={props.rowDataTravel.particularTravel}
                            onChange={props.getRowDataTravel}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label htmlFor="mobileNo" name='mobileNo' className="block text-sm font-medium leading-6 text-gray-900">
                        Arrival Date
                    </label>
                    <div className="mt-2">
                        <input
                            type="date"
                            name="particular"
                            id="arrivaldate"
                            value={props.rowDataTravel.particularTravel}
                            onChange={props.getRowDataTravel}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label htmlFor="mobileNo" name='mobileNo' className="block text-sm font-medium leading-6 text-gray-900">
                        Arrival Time
                    </label>
                    <div className="mt-2">
                        <input
                            type="time"
                            name="particular"
                            id="arrivaltime"
                            value={props.rowDataTravel.particularTravel}
                            onChange={props.getRowDataTravel}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label htmlFor="mobileNo" name='mobileNo' className="block text-sm font-medium leading-6 text-gray-900">
                        Arrival Place
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="particular"
                            id="arrivalplace"
                            value={props.rowDataTravel.particularTravel}
                            onChange={props.getRowDataTravel}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label htmlFor="mobileNo" name='mobileNo' className="block text-sm font-medium leading-6 text-gray-900">
                        Mode
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="particular"
                            id="mode"
                            value={props.rowDataTravel.particularTravel}
                            onChange={props.getRowDataTravel}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label htmlFor="mobileNo" name='mobileNo' className="block text-sm font-medium leading-6 text-gray-900">
                        Km
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="particular"
                            id="KM"
                            value={props.rowDataTravel.particularTravel}
                            onChange={props.getRowDataTravel}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label htmlFor="mobileNo" name='mobileNo' className="block text-sm font-medium leading-6 text-gray-900">
                        Fare
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="particular"
                            id="fare"
                            value={props.rowDataTravel.particularTravel}
                            onChange={props.getRowDataTravel}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label htmlFor="mobileNo" name='mobileNo' className="block text-sm font-medium leading-6 text-gray-900">
                        Ticket No.
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="particular"
                            id="TicketNo"
                            value={props.rowDataTravel.particularTravel}
                            onChange={props.getRowDataTravel}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-6">
                    <label htmlFor="mobileNo" name='mobileNo' className="block text-sm font-medium leading-6 text-gray-900">
                        Remarks
                    </label>
                    {/* <div className="mt-2">
                        <input
                            type="text"
                            name="particular"
                            id="abcd"
                            value={props.rowDataTravel.particular}
                            onChange={props.getRowData}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div> */}

                    <div className="mt-2">
                        <textarea
                            type="text"
                            id="remarks"
                            name="reasonToAttend"
                            rows={3}
                            onChange={props.getConferenceInfoTravel}
                            className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                            defaultValue={''}
                        />
                    </div>

                </div>

            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                    onClick={props.addRowDataTravel}
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
                                Departure Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Departure Time
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Departure Place
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Arrival Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Arrival Time
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Arrival Place
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Mode
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Km
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Fare
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Ticket No.
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Remarks
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            {/* <th scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
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
                            </td> */}

                            {/* <th scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Travel
                            </th>
                            <td className="px-6 py-2">
                                <input
                                    type="text"
                                    name="travel"
                                    value={props.travel}
                                    className=""
                                    onChange={props.getFixedPartsTravel}
                                />
                            </td> */}

                        </tr>
                        {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
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
                        </tr> */}
                        {tableRows}
                    </tbody>
                </table>
            </div>
        </>
    )
}
