import React from 'react'

function ConferenceDetailsAbroad({ user, data, links }) {

    console.log("Links: ", links);

    const textList = (type, title, value) =>
        <div key={title} className={`${type === "1" ? "bg-white" : "bg-gray-50"} px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}>
            <dt className="text-sm font-medium text-gray-500">{title}: </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {value}
            </dd>
        </div>

    const viewFlights =
        <div className="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
                Flight Details
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
                                                Serial No
                                            </th>
                                            <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                Departure
                                            </th>
                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                Arrival
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                        <tr key={1}>
                                            <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                1
                                            </th>
                                            <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                {data?.flightDetails[0].destination}

                                            </th>
                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                {data?.flightDetails[0].arrival}
                                            </th>
                                        </tr>

                                        { !data?.flightDetails[1].destination === "" &&<tr key={2} >
                                            <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                2
                                            </th>
                                            <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                {data?.flightDetails[1].destination}

                                            </th>
                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                {data?.flightDetails[1].arrival}
                                            </th>
                                        </tr>}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </dd>
        </div>

    return (
        <>
            <div className="overflow-hidden mt-2 bg-white shadow sm:rounded-lg">
                <div className="px-4 py-2 sm:px-6">
                    <h3 className="text-base font-semibold leading-6 text-gray-900">Conference Details</h3>
                </div>
                <div className="border-t border-gray-200">
                    <dl>
                        {textList("1", "Title of the conference / symposium", data?.nameOfConference)}
                        {textList("0", "Name of the society organizing the conference", data?.nameOfSociety)}
                        {textList("1", "Is the conference organized by the recognized Scientific Society", data?.societyRecognized)}
                        {textList("0", "Venue of Conference", data?.venueOfConference)}
                        {textList("1", "Period Of Event", data?.conferenceStarts + " - " + data?.conferenceEnds)}
                        {textList("0", "Why would you like to attend this conference and what is its relevance with your PhD thesis", data?.reasonToAttend)}
                        {textList("1", "Paper(s)/Poster(s) to Present in Conference", data?.paperInConference)}
                        {textList("0", "Whether applied to DST/DBT/INSA/other funding sources?", data?.fundingSources)}
                        {textList("1", "Particular of any additional visit(s): Puspose of Visit", data?.purposeOfVisit)}
                        {textList("0", "Particular of any additional visit(s): Justification", data?.justification)}
                        {textList("1", "Particular of any additional visit(s): SponsorShip", data?.sponsorship)}


                        {textList("0", "Financial support required (Any type of financial support from institute fund/ project/ any other source.)", data?.financialSupport)}
                        {textList("1", "Whether any advance is required", data?.advances ? "Yes" : "No")}
                        {textList("0", "Duty Leave", data?.studentLeaveStarts + "-" + data?.studentLeaveEnds)}

                        {viewFlights}

                        <div className="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Enclosures Attached
                            </dt>
                            <dd className="mt-1 text-md text-gray-900 sm:col-span-2 sm:mt-0">
                                <ul className="divide-y divide-gray-200 rounded-md border border-gray-200">

                                    <li key={1} className=" bg-white flex items-center justify-between py-1 pl-3 pr-4 ">
                                        <div className="flex w-0 flex-1 items-center">
                                            <svg className="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clipRule="evenodd" />
                                            </svg>
                                            <span className="ml-2 w-0 flex-1 truncate">
                                                Letter of Invitation
                                            </span>
                                        </div>
                                        <div className="ml-4 flex-shrink-0">
                                            <a href={links?.invitationUrl}
                                                target='_blank' rel="noreferrer"
                                                className="font-medium text-indigo-600 hover:text-indigo-500">
                                                Download
                                            </a>
                                        </div>
                                    </li>

                                    <li key={2} className="flex bg-gray-50 items-center justify-between py-1 pl-3 pr-4 ">
                                        <div className="flex w-0 flex-1 items-center">
                                            <svg className="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clipRule="evenodd" />
                                            </svg>
                                            <span className="ml-2 w-0 flex-1 truncate">
                                                Copy of Abstract
                                            </span>
                                        </div>
                                        <div className="ml-4 flex-shrink-0">
                                            <a
                                                href={links?.abstractUrl}
                                                target='_blank' rel="noreferrer"
                                                className="font-medium text-indigo-600 hover:text-indigo-500">
                                                Download
                                            </a>
                                        </div>
                                    </li>

                                    <li key={3} className="flex bg-white items-center justify-between py-1 pl-3 pr-4 ">
                                        <div className="flex w-0 flex-1 items-center">
                                            <svg className="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clipRule="evenodd" />
                                            </svg>
                                            <span className="ml-2 w-0 flex-1 truncate">
                                                Conference brochure with registraton fee detail
                                            </span>
                                        </div>
                                        <div className="ml-4 flex-shrink-0">
                                            <a
                                                href={links?.conferenceBrochureUrl}
                                                target='_blank' rel="noreferrer"
                                                className="font-medium text-indigo-600 hover:text-indigo-500">
                                                Download
                                            </a>
                                        </div>
                                    </li>

                                    <li key={4} className="flex bg-gray-50  items-center justify-between py-1 pl-3 pr-4 ">
                                        <div className="flex w-0 flex-1 items-center">
                                            <svg className="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clipRule="evenodd" />
                                            </svg>
                                            <span className="ml-2 w-0 flex-1 truncate">
                                                Acceptance of Paper
                                            </span>
                                        </div>
                                        <div className="ml-4 flex-shrink-0">
                                            <a
                                                href={links?.acceptanceUrl}
                                                target='_blank' rel="noreferrer"
                                                className="font-medium text-indigo-600 hover:text-indigo-500">
                                                Download
                                            </a>
                                        </div>
                                    </li>

                                    <li key={5} className="flex bg-white items-center justify-between py-1 pl-3 pr-4 ">
                                        <div className="flex w-0 flex-1 items-center">
                                            <svg className="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clipRule="evenodd" />
                                            </svg>
                                            <span className="ml-2 w-0 flex-1 truncate">
                                                Accomodation Cost/details
                                            </span>
                                        </div>
                                        <div className="ml-4 flex-shrink-0">
                                            <a
                                                href={links?.accmodationUrl}
                                                target='_blank' rel="noreferrer"
                                                className="font-medium text-indigo-600 hover:text-indigo-500">
                                                Download
                                            </a>
                                        </div>
                                    </li>

                                    <li key={6} className="flex bg-gray-50  items-center justify-between py-1 pl-3 pr-4 ">
                                        <div className="flex w-0 flex-1 items-center">
                                            <svg className="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clipRule="evenodd" />
                                            </svg>
                                            <span className="ml-2 w-0 flex-1 truncate">
                                                Invitation Letter(s) e-mails [for additonal visit(s)]
                                            </span>
                                        </div>
                                        <div className="ml-4 flex-shrink-0">
                                            <a
                                                href={links?.invitationAdditonalUrl}
                                                target='_blank' rel="noreferrer"
                                                className="font-medium text-indigo-600 hover:text-indigo-500">
                                                Download
                                            </a>
                                        </div>
                                    </li>

                                </ul>
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </>
    )
}

export default ConferenceDetailsAbroad