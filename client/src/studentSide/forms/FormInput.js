import React, { useState, useEffect } from 'react';
import { Container, Tab, Tabs } from 'react-bootstrap';


// importing Components
import NavBar from '../NavBar';
import FormInputGenData from './FormInputData';
import FormPrintIn from './FormPrintIn';


function FormInput(props) {

    const [key, setKey] = useState('genInfo');
    const [generalInfo, setGeneralInfo] = useState({
        name: "",
        mobileNo: "",
        dept: "",
        email: "",
        entryNo: "",
        bankAccNo: "",
        doj: "",
        fellowshipCat: "",
        aos: "",
        supervisor: ""
    });
    const [conferenceInfo, setConferenceInfo] = useState({
        nameOfConference: "",
        venueOfConference: "",
        periodOfConference: "",
        paperInConference: "",
    });

    const getConferenceInfo = ( (e) => {
        
        const { name, value } = e.target;
        // console.log(name + " " + value);
        setConferenceInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    })

    const getGeneralInfo = ((e) => {
        const { name, value } = e.target;
        // console.log(name + " " + value);
        setGeneralInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    });

    const setFetchData = ((name, value) => {
        setGeneralInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    })
    const getBasicInfo = async (req, res) => {
        try {

            const resp = await fetch("/studentInfo", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            //   console.log(resp);
            return resp.json();
            // console.log(resp);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getBasicInfo()
            .then((resp) => {
                console.log(resp);
                setFetchData("name", resp.name);
                setFetchData("entryNo", resp.entryNo);
                setFetchData("dept", resp.department);
                setFetchData("doj", resp.dateOfJoining);
                setFetchData("fellowshipCat", resp.fellowshipCategory);
                setFetchData("aos", resp.areaOfSpecialisation);
                setFetchData("supervisor", resp.nameOfSupervisor);
                setFetchData("email", resp.email);
            }).catch((e) => {
                console.log(e.message)
            });
    }, []);

    return (
        <>
            <NavBar emailNav={props.studentEmail} />
            <Container style={{ "fontSize": "24px" }}>
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-3"
                >
                    <Tab eventKey="genInfo" title="General Data">
                        <FormInputGenData getGeneralInfo={getGeneralInfo} getConferenceInfo={getConferenceInfo} />
                    </Tab>

                    <Tab eventKey="showForm" title="View Form" style={{ "justifyContent": "center" }}>
                        <FormPrintIn partA={generalInfo} partB={conferenceInfo} />
                    </Tab>
                </Tabs>
            </Container>
        </>
    )
}

export default FormInput;