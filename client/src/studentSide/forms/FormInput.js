import React, { useState, useEffect } from 'react';
import { Container, Tab, Tabs } from 'react-bootstrap';


// importing Components
import NavBar from '../studentNav/NavBar';
import FormInputGenData from './FormInputData';
import dayjs from 'dayjs';

import { getToken } from '../../components_login/Tokens';


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
        paperInConference: "",
        financialSupport: "",
    });

    const [dateStarts, setDateStarts] = useState(dayjs('2023-01-01'));
    const [dateEnds, setDateEnds] = useState(dayjs('2023-01-01'));
    const [leaveStarts, setLeaveStarts] = useState(dayjs('2023-01-01'));
    const [leaveEnds, setLeaveEnds] = useState(dayjs('2023-01-01'));


    const [advance, setAdvance] = useState(false);
    const dataInTable = [];
    const [tableData, setTableData] = useState(dataInTable);
    const [travel, setTravel] = useState(0);
    const [food, setFood] = useState(0);
    const [stay, setStay] = useState(0);


    const [coa, setcoa] = useState(false);
    const [cocb, setcocb] = useState(false);
    const [coab, setcoab] = useState(false);


    const getCopyInfo = ((e) => {
        const { name, value } = e.target;

        if (name === "coa") {
            setcoa(!coa)
        }
        else if (name === "coab") {
            setcoab(!coab);
        }
        else {
            setcocb(!cocb);
        }
    })
    const [rowData, setRowData] = useState({
        particular: "",
        amount: ""
    });


    const getFixedParts = ((e) => {
        const { name, value } = e.target;

        if (name === "travel") {
            setTravel(value);
        }
        else if (name === "stay") {
            setStay(value);
        }
        else {
            setFood(value);
        }
    })
    const getGeneralInfo = ((e) => {
        const { name, value } = e.target;
        // console.log(name + " " + value);
        setGeneralInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    });
    const getConferenceInfo = ((e) => {

        const { name, value } = e.target;
        // console.log(name + " " + value);
        setConferenceInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    });

    const getAdvance = e => {
        console.log("aaya");
        setAdvance(!advance);
    }
    const addRowData = (e) => {
        e.preventDefault();
        if (!rowData.particular || !rowData.amount) {
            window.alert("Fill all the fields!");
            return;
        }
        const newTableData = [...tableData]
        newTableData.push(rowData);
        setTableData(newTableData);
        setRowData({ particular: "", amount: "" });
    }
    const getRowData = (e) => {
        const { name, value } = e.target;
        // console.log(name + " " + value);
        setRowData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }


    const setFetchData = ((name, value) => {
        setGeneralInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    })

    const requestGrant = async (e) => {
        e.preventDefault();


        // save all data
        const email = generalInfo.email;
        const status = "0";
        const mobileNo = generalInfo.mobileNo;
        const bankAccountNo = generalInfo.bankAccNo;
        const nameOfConference = conferenceInfo.nameOfConference;
        const venueOfConference = conferenceInfo.venueOfConference;
        const paperInConference = conferenceInfo.paperInConference;
        const conferenceStarts = dayjs(dateStarts).format('DD/MM/YYYY')
        const conferenceEnds = dayjs(dateEnds).format('DD/MM/YYYY')

        const studentLeaveStarts = dayjs(leaveStarts).format('DD/MM/YYYY')
        const studentLeaveEnds = dayjs(leaveEnds).format('DD/MM/YYYY')
        //                      To be Fixed.. 
        const financialSupport = conferenceInfo.financialSupport;
        const advances = advance;
        const finances = [...tableData];
        finances.push({ "travel": travel });
        finances.push({ "food": food });
        finances.push({ "stay": stay });

        console.log(finances);
        const coaa = coa;
        const coaba = coab;
        const cocba = cocb;

        const res = await fetch("/studentApplicationSubmit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, status,
                mobileNo, bankAccountNo,
                nameOfConference, venueOfConference, paperInConference,
                financialSupport,
                advances, finances,
                coaa, coaba, cocba,
                conferenceStarts, conferenceEnds,
                studentLeaveStarts, studentLeaveEnds,
            })
        });

        // logic
        const data = await res.json();

        if (res.status === 422) {
            window.alert("UnSubmitted..");
        }
        else {
            window.alert("Application Submitted");
        }
    }

    // const getBasicInfo = async (req, res) => {
    //     try {
    //         const data = "sending request";
    //         const token = getToken();
    //         console.log(token);
    //         const resp = await fetch("/studentInfoLoading", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 "authorization": `${token}`
    //             },
    //         });
    //         return resp.json();
    //         // console.log(resp);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    const getBasicInfo = async (req, res) => {
        try {
          const token = getToken();
          // console.log(token);
          const resp = await fetch("/studentInfoLoading", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "authorization": `Bearer ${token}`
            },
          });
          return resp.json();
          // console.log(resp);
        } catch (error) {
          console.log(error);
        }
      }
    useEffect(() => {
        getBasicInfo().then((resp) => {
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
            // console.log(e.message)
        });
    }, []);

    return (
        <>
            <NavBar />
            <FormInputGenData
                getGeneralInfo={getGeneralInfo}
                getConferenceInfo={getConferenceInfo}
                dateStarts={dateStarts} setDateStarts={setDateStarts}
                dateEnds={dateEnds} setDateEnds={setDateEnds}
                advance={advance} getAdvance={getAdvance}
                leaveStarts={leaveStarts} setLeaveStarts={setLeaveStarts}
                leaveEnds={leaveEnds} setLeaveEnds={setLeaveEnds}
                addRowData={addRowData} tableData={tableData} getRowData={getRowData} rowData={rowData}
                getFixedParts={getFixedParts}
                food={food} travel={travel} stay={stay}
                getCopyInfo={getCopyInfo}
                requestGrant={requestGrant}
            />
        </>
    )
}

export default FormInput;