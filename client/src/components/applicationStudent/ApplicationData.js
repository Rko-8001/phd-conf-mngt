import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import PersonalDetails from './Tabs/PersonalDetails';
import ConferenceDetails from './Tabs/ConferenceDetails';
import FacultyDetails from './Tabs/FacultyDetails'
import ResearchSection from './Tabs/ResearchSection';
import FinanceDetails from './Tabs/FinanceDetails';
import ResearchAction from './Actions/ResearchAction';
import FacultyAction from './Actions/FacultyAction';
<<<<<<< HEAD
import FacultyDetails from './Tabs/FacultyDetails';

function ApplicationData({ data, user, role }) {
    const [value, setValue] = useState("personal details");

=======


function ApplicationData({ data, user, role }) {
    const [value, setValue] = useState('personal details');
>>>>>>> master

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const showClass = (status, needed) => {
        if (status == needed)
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
                            {(showClass(data.status, "1") || showClass(data.status, "2") || showClass(data.status, "3")) &&
                                <Tab value="faculty approved" label="Supervisor" />
                            }
<<<<<<< HEAD
=======

>>>>>>> master
                            {(showClass(data.status, "1") && role === "2") &&
                                <Tab value="research section approval" label="Take Action" />
                            }
                            {(showClass(data.status, "2") || showClass(data.status, "3")) &&
                                <Tab value="research section approved" label="Research Section" />
                            }

                        </TabList>
                    </Box>

                    <TabPanel value="personal details">
                        <PersonalDetails user={user} data={data} />
                    </TabPanel>

                    <TabPanel value="conference details">
                        <ConferenceDetails user={user} data={data} />
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

                    <TabPanel value="research section approval">
                        <ResearchAction user={user} data={data} />
                    </TabPanel>

                    <TabPanel value="research section approved">
                        <ResearchSection data={data} />
                    </TabPanel>
                </TabContext >
            </Box >

        </>
    )
}

export default ApplicationData