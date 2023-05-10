import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { removeAppToken, setAppToken } from '../../components_login/Tokens';
import LoaderCard from '../../components/loading/LoaderCard';
import { Container } from '@mui/material';
import { delay } from '../../components/loading/Delay';
import { BASE_URL } from '../../components/requests/URL';
import { FaSort } from 'react-icons/fa';
import { FaPaperPlane } from 'react-icons/fa';

const data = [];
function ResearchApplication() {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(true);
    const [apps, setApps] = useState(data);
    const [apps2,setApps2] = useState(data);

    const [activeTabIndex, setActiveTabIndex] = useState(0);

    const tabs = [
        { label: 'Time', content: 'Applications are being displayed based on Time of the conference.' },
        { label: 'Entry No.', content: 'Applications are being displayed based on Entry No of the conference.' },
        { label: 'Name', content: 'Applications are being displayed based on Name of the conference.' },
    ];
    function handleTabClick(index) {
        setActiveTabIndex(index);
        if (index === 0) {
            apps.sort((a, b) => a.conferenceStarts.localeCompare(b.conferenceStarts));
        }
        else if (index === 1) {
            apps.sort((a, b) => a.email.localeCompare(b.email));
        }
        else if (index === 2) {
            apps.sort((a, b) => a.venueOfConference.localeCompare(b.venueOfConference));
        }
        console.log(apps)
    }

    const getAppInfo = async (req, res) => {
        try {
            const resp = await fetch(`${BASE_URL}/viewAllApplication`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await resp.json();
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAppInfo().then((resp) => {
            setApps(resp.data);
            setApps2(resp.slice(0,1)) 

            delay(100).then(() => {
                //good
                setIsLoading(false);
            }).catch((error) => {
                console.log(error);
            })

        }).catch((e) => {
            console.log(e.message)
        });
    }, []);

    const getStatus = (code) => {
        if (code === "0")
            return "Pending Faculty Approval";
        else if (code === "1")
            return "Pending Hod Section Approval";
        else if (code === "2")
            return "Pending Research Section Approval";
        else if (code === "3")
            return "Pending Account Section Approval";
        else
            return "Application Approved";
    }

    const getDays = (subDate) => {
        const today = new Date();
        const submitDate = new Date(subDate);

        const days = Math.floor((today - submitDate) / (1000 * 3600 * 24));

        if (days < 1)
            return "Submitted Recently";
        else if (days === 1)
            return ("1 Day Ago");
        else
            return (days + " Days ago");

    }

    const getFinances = (finance) => {
        var totalAmount = 0;

        finance.forEach(element => {
            totalAmount = totalAmount + Number(element.amount);
        });
        return totalAmount;
    }

    const createAppToken = async (id) => {
        try {
            const aisehi = "abcd";
            const resp = await fetch(`${BASE_URL}/createApplicationToken`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ id, aisehi })
            });
            const data = await resp.json();
            const appToken = data.appToken;
            setAppToken(appToken);

        } catch (error) {
            console.log(error);
        }
    }

    const viewSpecficApplication = async (e) => {
        e.preventDefault();
        const { name } = e.target;
        removeAppToken();
        try {
            await createAppToken(name);
            navigate('/researchLogin/studentApplication');

        } catch (error) {
            console.log(error);
        }

    }

    const renderApps = apps2.map((item, index) =>
        <>
            <div key={index}>
                <section class="bg-white dark:bg-gray-900">
                    <div class="">
                        <h2 class="mb-2 text-xl font-semibold leading-none text-gray-900 md:text-2xl dark:text-white">{item.nameOfConference}</h2>
                        <p class="mb-4 text-xl font-extrabold leading-none text-gray-900 md:text-2xl dark:text-white"></p>
                        <dl>
                            <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">{getStatus(item.status)}</dt>
                            <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">Venue: {item.venueOfConference}</dd>
                            <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">Amount Needed: {getFinances(item.finances)} Rs</dd>
                        </dl>
                        <dl class="flex items-center space-x-6">
                            <div>
                                <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Submission status</dt>
                                <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">{getDays(item.createdAt)}</dd>
                            </div>
                            <div>
                                <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Category</dt>
                                <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">India</dd>
                            </div>
                        </dl>
                        <div class="pb-4 flex items-center space-x-4">
                            <button type="button" class="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                <svg aria-hidden="true" class="mr-1 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>
                                Edit
                            </button>
                            <button type="button" name={item._id}
                                onClick={viewSpecficApplication} class="inline-flex items-center text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900">
                                <FaPaperPlane style={{ marginRight: '0.5rem' }} />
                                View Full Application
                            </button>
                        </div>
                    </div>
                </section>

            </div>

            <br />
        </>
    );

    return (
        <>
            <br />
            {isLoading ?
                <Container>
                    <LoaderCard />
                </Container>
                :
                <Container>
                    <div class="my-3 flex flex-wrap justify-center gap-4">
                        {apps && renderApps}
                    </div>
                </Container>
            }
        </>
    )
}

export default ResearchApplication