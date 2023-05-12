import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import PersonalDetails from './Tabs/PersonalDetails';
import FinanceDetails from './Tabs/FinanceDetails';
import ConferenceDetailsIndia from './Tabs/ConferenceDetailsIndia';
import FacultyDetails from './Tabs/FacultyDetails'
import ResearchSection from './Tabs/ResearchSection';
import AccountSection from './Tabs/AccountSection';
import DeanDetails from './Tabs/DeanDetails';
import DeanAction from './Actions/DeanAction';

import ResearchAction from './Actions/ResearchAction';
import FacultyAction from './Actions/FacultyAction';
import AccountAction from './Actions/AccountAction';
import HodAction from './Actions/HodAction';

function ApplicationData({ data, user, role, links }) {
    const [value, setValue] = useState("personal details");


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const showClass = (status, needed) => {
        if (status === needed)
            return true;
        else
            return false;
    }


    return (
        <>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="wrapped label tabs">
                            <Tab value="personal details" label="Personal Details" />
                            <Tab value="conference details" label="Conference Details" />
                            <Tab value="finance details" label="Finance Details" />

                            {(showClass(data.status, "0") && role === "1") &&
                                <Tab value="faculty approval" label="Take Action" />
                            }
                            {(showClass(data.status, "1") || showClass(data.status, "2") || showClass(data.status, "3") || showClass(data.status, "4") || showClass(data.status, "5")) &&
                                <Tab value="faculty approved" label="Faculty" />
                            }
                            {(showClass(data.status, "1") && role === "2") &&
                                <Tab value="HOD section approval" label="Take Action" />
                            }

                            {(showClass(data.status, "2") && role === "3") &&
                                <Tab value="research section approval" label="Take Action" />
                            }
                            {(showClass(data.status, "3") || showClass(data.status, "4") || showClass(data.status, "5")) &&
                                <Tab value="research section approved" label="Research Section" />
                            }
                            {(showClass(data.status, "3") && role === "4") &&
                                <Tab value="account section approval" label="Take Action" />
                            }
                            {(showClass(data.status, "4") || showClass(data.status, "5")) &&
                                <Tab value="account section approved" label="Account Section" />
                            }
                            {(showClass(data.status, "4") && role === "5") &&
                                <Tab value="Dean approval" label="Take Action" />
                            }
                            {(showClass(data.status, "5") || showClass(data.status, "6")) &&
                                <Tab value="Dean approved" label="Dean" />
                            }

                        </TabList>
                    </Box>

                    <TabPanel value="personal details">
                        <PersonalDetails user={user} data={data} />
                    </TabPanel>

                    <TabPanel value="conference details">
                        {
                            data.type === 1
                                ?
                                <>
                                    Hello
                                </>
                                :
                                <ConferenceDetailsIndia user={user} data={data} links={links} />
                        }
                    </TabPanel>

                    <TabPanel value="finance details">
                        <FinanceDetails user={user} data={data} />
                    </TabPanel>

                    <TabPanel value="faculty approval">
                        <FacultyAction user={user} data={data} />
                    </TabPanel>
                    <TabPanel value="faculty approved">
                        <FacultyDetails data={data} user={user} />
                    </TabPanel>
                    <TabPanel value="HOD section approval">
                        <HodAction user={user} data={data} />
                    </TabPanel>



                    <TabPanel value="research section approval">
                        <ResearchAction user={user} data={data} />
                    </TabPanel>

                    <TabPanel value="research section approved">
                        <ResearchSection data={data} />
                    </TabPanel>

                    <TabPanel value="account section approval">
                        <AccountAction data={data} user={user} />
                    </TabPanel>

                    <TabPanel value="account section approved">
                        <AccountSection data={data} />
                    </TabPanel>

                    <TabPanel value="Dean approval">
                        <DeanAction data={data} user={user} />
                    </TabPanel>

                    <TabPanel value="Dean approved">
                        <DeanDetails data={data} />
                    </TabPanel>
                </TabContext >
            </Box >

        </>
    )
}

export default ApplicationData