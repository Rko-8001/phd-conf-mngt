import React, { useEffect, useState, useRef } from 'react'
import { getAppToken } from '../../components_login/Tokens';
import { Container } from '@mui/material';
import LoaderContent from '../../components/loading/LoaderContent';
import { useReactToPrint } from 'react-to-print';
import ApplicationData from '../../components/applicationStudent/ApplicationData';
import FormPrint from '../../components/applicationStudent/FormPrint';
import { BASE_URL } from '../../components/requests/URL';
import FormPrintAbroad from './FormPrintAbroad';
import FormPrintSettlement from './FormPrintSettlement';


export default function ApplicationMainPage({ role, goBack }) {

    const componentRef = useRef();
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [applicantInfo, setApplicantInfo] = useState();
    const [links, setLinks] = useState({
        abstractUrl: "",
        acceptanceUrl: "",
        conferenceBrochureUrl: ""
    });


    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    })


    const getBasicInfo = async (req, res) => {
        try {
            const token = getAppToken();
            const resp = await fetch(`${BASE_URL}/viewAnApplication`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "authorization": `Bearer ${token}`
                },
            });
            return resp.json();
        } catch (error) {
            console.log(error);
            return null
        }
    }

    function getlinks(name, value) {

        setLinks(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    useEffect(() => {
        getBasicInfo().then((resp) => {
            console.log("Risp: ", resp);
            if (resp !== null) {

                setData(resp.data);
                setApplicantInfo(resp.applicantInfo)
                if (resp.data.type === 1) {
                    getlinks("invitationAdditonalUrl", resp?.invitationAdditonalUrl)
                    getlinks("invitationUrl", resp?.invitationUrl)
                    getlinks("abstractUrl", resp?.abstractUrl)
                    getlinks("acceptanceUrl", resp?.acceptanceUrl)
                    getlinks("conferenceBrochureUrl", resp?.conferenceBrochureUrl)
                    getlinks("accmodationUrl", resp?.accmodationUrl)
                }
                else {
                    getlinks("abstractUrl", resp?.abstractUrl);
                    getlinks("acceptanceUrl", resp?.acceptanceUrl);
                    getlinks("conferenceBrochureUrl", resp?.conferenceBrochureUrl);
                }
                setIsLoading(false);
            }
            else {
                window.alert("Internal Server Error Occured! Please refresh the page.");
            }
        }).catch((e) => {
            console.log(e.message)
        });
    }, []);
    function extractFileId(driveLink) {
        const startIndex = driveLink.indexOf('/file/d/') + 8;
        const endIndex = driveLink.indexOf('/view');
        if (startIndex !== -1 && endIndex !== -1) {
            return driveLink.substring(startIndex, endIndex);
        } else {
            return null;
        }
    }

    return (
        <>
            {isLoading ?
                <LoaderContent />
                :
                <>
                    < Container style={{ "marginTop": "2rem" }}>
                        <div className="lg:flex lg:items-center lg:justify-between">

                            <div className="min-w-0 flex-1">
                                <div className="flex flex-col mb-5">
                                    <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                                        {data?.nameOfConference}
                                    </h2>
                                    <h2 className='text-xl text-gray-500'>
                                        Application for conference in {data?.type === 0 ? "India" : "Abroad"}
                                    </h2>
                                </div>
                                <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                                    <div className="mt-2 flex items-center text-sm text-gray-500">
                                        <svg className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z" clipRule="evenodd" />
                                        </svg>
                                        Submitted On {data?.createdAt.substr(0, 10)}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-5 flex lg:ml-4 lg:mt-0">
                                <span className="ml-3 hidden sm:block">
                                    <button type="button" onClick={(e) => {
                                        e.preventDefault();
                                        handlePrint();
                                    }} className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                                        <svg className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z" />
                                            <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z" />
                                        </svg>
                                        Download
                                    </button>
                                </span>
                                <span className="sm:ml-3">
                                    <button type="button" onClick={goBack} className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                        Go Back
                                    </button>
                                </span>
                            </div>
                        </div>

                        <ApplicationData data={data} user={applicantInfo} role={role} links={links} />
                        <div className='hidden'>
                            <div ref={componentRef} >
                                {data.type === 1
                                    ?
                                    <FormPrintAbroad data={data} user={applicantInfo} />
                                    :
                                    (
                                        data.type === 0
                                            ?
                                            <FormPrint data={data} user={applicantInfo} />
                                            :
                                            <FormPrintSettlement data={data} user={applicantInfo} />
                                    )
                                }
                            </div>
                        </div>

                    </Container>
                </>
            }
        </>
    )
}
