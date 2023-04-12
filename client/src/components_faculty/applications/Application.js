import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { removeAppToken, setAppToken } from '../../components_login/Tokens';
import LoaderCard from '../../components/loading/LoaderCard';
import { Container } from '@mui/material';
import { delay } from '../../components/loading/Delay';

const data = [];
export function FacultyApplications() {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(true);
    const [apps, setApps] = useState(data);

    const getAppInfo = async (req, res) => {
        try {
            const resp = await fetch("/viewFacultyApplications", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "authorization": `Bearer ${token}`
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

            delay(500).then(() => {
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
            return "Pending Research Section Approval";
        else if (code === "2")
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
            const resp = await fetch("/createApplicationToken", {
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
            navigate('');

        } catch (error) {
            console.log(error);
        }

    }

    const renderApps = apps.map((item, index) =>
        <>
            <div key={index}>
                <div className="block max-w-md  rounded-lg  bg-white text-center shadow-lg dark:bg-neutral-700">
                    <div className="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
                        {getStatus(item.status)}
                    </div>
                    <div className="p-4">
                        <h5
                            className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                            {item.nameOfConference}
                        </h5>
                        <p className="mb-1 text-base text-neutral-600 dark:text-neutral-200">
                            Amount Needed: {getFinances(item.finances)} Rs
                        </p>
                        <p className="mb-1 text-base text-neutral-600 dark:text-neutral-200">
                            Submitted By: {item.email}
                        </p>
                    </div>
                    <button
                        name={item._id}
                        onClick={viewSpecficApplication}
                        className="rounded-md bg-indigo-600 px-3 py-2 mb-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Vew Full Application
                    </button>
                    <div
                        className="border-t-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
                        {getDays(item.createdAt)}
                    </div>
                </div>

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
                    <div class="flex flex-wrap justify-center gap-4">
                        {apps && renderApps}
                    </div>
                </Container>
            }
        </>
    )
}

