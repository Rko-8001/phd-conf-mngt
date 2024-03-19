import React, { useState, useEffect } from 'react';


// importing Components
import FormInputGenData from './FormSettlement';
import dayjs from 'dayjs';

import { getUserToken } from '../../../components_login/Tokens';
import { checkConfDetails, checkConferenceTime, checkFinances, checkLeaveTime } from '../checkFunctions';
import { BASE_URL } from '../../../components/requests/URL';
import { generateUtilityClass } from '@mui/material';

export default function FormSettlementData() {


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
        supervisor: "",
        mobile: "",
        empCode: "",
        department: "",
        designation: "",
        Bpay: "",
        budgetHead: "",
        advanceDrawn: "",
        date: "",
        status: "0",
        applicationID: ""
    });
    const [conferenceInfo, setConferenceInfo] = useState({
        nameOfConference: "",
        venueOfConference: "",
        paperInConference: "",
        financialSupport: "",
        nameOfSociety: "",
        societyRecognized: "",
        reasonToAttend: "",
        fundingSources: "",
        purpose: "",
        justification: "",
        sponsorship: "",

    });

    const [eventStarts, setEventStarts] = useState(dayjs('2023-01-01'));
    const [eventEnds, setEventEnds] = useState(dayjs('2023-01-01'));
    const [dateStarts, setDateStarts] = useState(dayjs('2023-01-01'));
    const [dateEnds, setDateEnds] = useState(dayjs('2023-01-01'));
    const [leaveStarts, setLeaveStarts] = useState(dayjs('2023-01-01'));
    const [leaveEnds, setLeaveEnds] = useState(dayjs('2023-01-01'));


    const [advance, setAdvance] = useState(false);
    const dataInTable = [];
    const dataInTableTravel = [];
    const [tableData, setTableData] = useState(dataInTable);
    const [tableDataTravel, setTableDataTravel] = useState(dataInTableTravel);
    const [travel, setTravel] = useState(0);
    const [food, setFood] = useState(0);
    const [stay, setStay] = useState(0);
    const [visaCharges, setVisaCharges] = useState(0);
    const [registrationFee, setRegistrationFee] = useState(0);

    const [rowData, setRowData] = useState({
        particular: "",
        amount: ""
    });

    const [rowDataTravel, setRowDataTravel] = useState({
        deptdate: "",
        depttime: "",
        deptplace: "",
        arrivaldate: "",
        arrivaltime: "",
        arrivalplace: "",
        mode: "",
        KM: "",
        fare: "",
        TicketNo: "",
        remarks: ""
    });


    const getFixedParts = ((e) => {
        const { name, value } = e.target;

        if (name === "travel") {
            setTravel(value);
        }
        else if (name === "stay") {
            setStay(value);
        }
        else if (name === "visaCharges") {
            setVisaCharges(value);
        }
        else if (name === "registrationFee") {
            setRegistrationFee(value)
        }
        else {
            setFood(value);
        }
    })

    const getGeneralInfo = ((e) => {
        const { name, value } = e.target;

        console.log(name + " " + value + " " + e.target);
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

    const addRowDataTravel = (e) => {
        e.preventDefault();
        if (!rowDataTravel.deptdate || !rowDataTravel.depttime || !rowDataTravel.deptplace || !rowDataTravel.arrivaldate || !rowDataTravel.arrivaltime || !rowDataTravel.arrivalplace || !rowDataTravel.mode || !rowDataTravel.KM || !rowDataTravel.fare || !rowDataTravel.TicketNo) {
            window.alert("Fill all the fields! The field name is " + Object.keys(rowDataTravel).find(key => rowDataTravel[key] === ""));
            return;
        }
        const newTableDataTravel = [...tableDataTravel]
        newTableDataTravel.push(rowDataTravel);
        setTableDataTravel(newTableDataTravel);
        setRowDataTravel({ deptdate: "", depttime: "", deptplace: "", arrivaldate: "", arrivaltime: "", arrivalplace: "", mode: "", KM: "", fare: "", TicketNo: "", remarks: "" });
    }

    const getRowData = (e) => {
        const { name, value } = e.target;
        // console.log(name + " " + value);
        setRowData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const getRowDataTravel = (e) => {
        const { name, value } = e.target;
        // console.log(name + " " + value);
        setRowDataTravel(prevState => ({
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

    const checkData = () => {
        // if (!checkConfDetails(conferenceInfo)) {
        //     window.alert('Please fill conference Details properly.');
        //     return false;
        // }
        // const fin = checkFinances(travel, food, stay, tableData);
        // if (fin === "0") {
        //     window.alert("Your Expenses Sum is zero. please review the form.");
        //     return false;
        // }
        // return true;
    }

    const submitSettlement = async (e) => {
        e.preventDefault();
        console.log(generalInfo);
        // alert("Settlement Form Submitted");

        // save all data

        const applicationID = generalInfo.applicationID;
        console.log("ApplicationID:", applicationID);
        if (applicationID == "")
        {
            console.log("NOPE");
            return;
        }
        const mobileNo = generalInfo.mobile;
        const empCode = generalInfo.empCode;
        const department = generalInfo.department;
        const designation = generalInfo.designation;
        const Bpay = generalInfo.Bpay;
        const budgetHead = generalInfo.budgetHead;
        const advanceDrawn = generalInfo.advanceDrawn;
        const Date = dayjs(generalInfo.date).format('DD/MM/YYYY');
        const bankAccNo = generalInfo.bankAccNo;

        const status = "0";

        const finances = [...tableData];
        const travels = [...tableDataTravel];

        const formData = new FormData();

        formData.append("parentId", applicationID);
        formData.append("mobileNo", mobileNo);
        formData.append("empCode", empCode);
        formData.append("department", department);
        formData.append("designation", designation);
        formData.append("Bpay", Bpay);
        formData.append("budgetHead", budgetHead);
        formData.append("advanceDrawn", advanceDrawn);
        formData.append("Date", Date);
        formData.append("bankAccNo", bankAccNo);
        formData.append("status", status);
        formData.append("type", 3);
        
        formData.append("finances", JSON.stringify(finances));
        formData.append("travels", JSON.stringify(travels));

        console.log("Sumitting");

        const res = await fetch(`${BASE_URL}/studentSettlementSubmit`, {
            method: "POST",
            body: formData
        });

        if (res.status === 422) {
            // setMessage("Error Occurred! Please Try Again.");
            // setFormSuccess(false);
            console.log("Error Occurred! Please Try Again.");
        }
        else {
            // setFormSuccess(true);
            // setMessage("Application Submitted Successfully!");
            console.log("Application Submitted Successfully!");
        }
        // setFreezeButton(false);
        // setShowModal(true);


        // console.log(email);
        // const status = "0";
        // const mobileNo = generalInfo.mobileNo;
        // const bankAccountNo = generalInfo.bankAccNo;
        // const nameOfConference = conferenceInfo.nameOfConference;
        // const venueOfConference = conferenceInfo.venueOfConference;
        // const paperInConference = conferenceInfo.paperInConference;
        // const conferenceStarts = dayjs(dateStarts).format('DD/MM/YYYY')
        // const conferenceEnds = dayjs(dateEnds).format('DD/MM/YYYY')

        // const studentLeaveStarts = dayjs(leaveStarts).format('DD/MM/YYYY')
        // const studentLeaveEnds = dayjs(leaveEnds).format('DD/MM/YYYY')

        // const financialSupport = conferenceInfo.financialSupport;
        // const advances = advance;
        // const finances = [...tableData];
        // finances.push({
        //     "particular": "travel",
        //     "amount": travel
        // });
        // finances.push({
        //     "particular": "food",
        //     "amount": food
        // });
        // finances.push({
        //     "particular": "stay",
        //     "amount": stay
        // });

        // const formData = new FormData();
        // formData.append("name", generalInfo.name);
        // formData.append("status", status);
        // formData.append("mobileNo", mobileNo);
        // formData.append("bankAccountNo", bankAccountNo);
        // formData.append("nameOfConference", nameOfConference);
        // formData.append("venueOfConference", venueOfConference);
        // formData.append("paperInConference", paperInConference);
        // formData.append("conferenceStarts", conferenceStarts);
        // formData.append("conferenceEnds", conferenceEnds);
        // formData.append("studentLeaveStarts", studentLeaveStarts);
        // formData.append("studentLeaveEnds", studentLeaveEnds);
        // formData.append("financialSupport", financialSupport);
        // formData.append("advances", advances);


        // if (!checkData() || !checkConferenceTime(conferenceStarts, conferenceEnds) || !checkLeaveTime(leaveStarts, leaveEnds)) {
        //     return;
        // }


    }

    const getBasicInfo = async (req, res) => {
        try {
            const token = getUserToken();
            // console.log(token);
            const resp = await fetch(`${BASE_URL}/studentInfoLoading`, {
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

    // useEffect(() => {
    //     getBasicInfo().then((resp) => {
    //         console.log(resp);
    //         setFetchData("name", resp.name);
    //         setFetchData("entryNo", resp.entryNo);
    //         setFetchData("dept", resp.department);
    //         setFetchData("doj", resp.dateOfJoining);
    //         setFetchData("fellowshipCat", resp.fellowshipCategory);
    //         setFetchData("aos", resp.areaOfSpecialisation);
    //         setFetchData("supervisor", resp.nameOfSupervisor);
    //         setFetchData("email", resp.email);
    //     }).catch((e) => {
    //         // console.log(e.message)
    //     });
    // }, []);

    return (
        <>

            <div style={{ "marginTop": "5rem", "marginLeft": "30rem" }} id="successModal" tabindex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-10 right-0 left-10 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full">
                <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                    <div className="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                        <button type="button" className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="successModal">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 p-2 flex items-center justify-center mx-auto mb-3.5">
                            <svg aria-hidden="true" className="w-8 h-8 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                            <span className="sr-only">Success</span>
                        </div>
                        <p className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Successfully removed product.</p>
                    </div>
                </div>
            </div>
            <FormInputGenData
                getGeneralInfo={getGeneralInfo}
                getConferenceInfo={getConferenceInfo}
                eventStarts={dateStarts} setEventStarts={setDateStarts}
                eventEnds={dateEnds} setEventEnds={setDateEnds}
                dateStarts={dateStarts} setDateStarts={setDateStarts}
                dateEnds={dateEnds} setDateEnds={setDateEnds}
                advance={advance} getAdvance={getAdvance}
                leaveStarts={leaveStarts} setLeaveStarts={setLeaveStarts}
                leaveEnds={leaveEnds} setLeaveEnds={setLeaveEnds}
                addRowData={addRowData} tableData={tableData} getRowData={getRowData} rowData={rowData}
                addRowDataTravel={addRowDataTravel} tableDataTravel={tableDataTravel} getRowDataTravel={getRowDataTravel} rowDataTravel={rowDataTravel}
                getFixedParts={getFixedParts}
                food={food} travel={travel} stay={stay} visaCharges={visaCharges} registrationFee={registrationFee}
                submitSettlement={submitSettlement}
            />
        </>
    )
}
