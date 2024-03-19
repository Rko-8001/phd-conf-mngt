import React, { useState, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';

// importing Components
import FormInputGenData from './FormInputData';
import dayjs from 'dayjs';
import { toast } from 'react-toastify';
import { getUserToken } from '../../../components_login/Tokens';
import { checkConfDetails, checkConferenceTime, checkFinances, checkLeaveTime } from '../checkFunctions';
import { BASE_URL } from '../../../components/requests/URL';

export default function FormInputAbroad() {


    const [freezeButton, setFreezeButton] = useState(false);

    const [generalInfo, setGeneralInfo] = useState({});
    const [conferenceInfo, setConferenceInfo] = useState({});


    const [dateStarts, setDateStarts] = useState(dayjs('2023-01-01'));
    const [dateEnds, setDateEnds] = useState(dayjs('2023-01-01'));
    const [leaveStarts, setLeaveStarts] = useState(dayjs('2023-01-01'));
    const [leaveEnds, setLeaveEnds] = useState(dayjs('2023-01-01'));



    const [advance, setAdvance] = useState(false);
    const [travel, setTravel] = useState(0);
    const [food, setFood] = useState(0);
    const [stay, setStay] = useState(0);
    const [visaCharges, setVisaCharges] = useState(0);
    const [registrationFee, setRegistrationFee] = useState(0);
    const [medicalInsurance, setMedicalInsurance] = useState(0);
    const [others, setOthers] = useState(0);


    const [arrival1, setArrival1] = useState("");
    const [destination1, setDestination1] = useState("");
    const [arrival2, setArrival2] = useState("");
    const [destination2, setDestination2] = useState("");

    const [enclosures, setEnclosures] = useState([]);

    function getFlightParts(e) {
        const { name, value } = e.target;
        if (name === "arrival1") {
            setArrival1(value);
        }
        else if (name === "destination1") {
            setDestination1(value);
        }
        else if (name === "arrival2") {
            setArrival2(value);
        }
        else {
            setDestination2(value);
        }
    }

    const fileFunction = (e) => {
        e.preventDefault();

        const { name } = e.target;
        setEnclosures(prevState => ({
            ...prevState,
            [name]: e.target.files[0]
        }));
    }

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
        else if (name === "food") {
            setFood(value);
        }
        else if (name === "medicalInsurance") {
            setMedicalInsurance(value);
        }
        else {
            setOthers(value);
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

        setConferenceInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    });

    const getAdvance = e => {
        setAdvance(!advance);
    }

    function setFinances() {
        const finances = [];
        finances.push({
            "particular": "Travel",
            "amount": travel
        });
        finances.push({
            "particular": "Visa Charges",
            "amount": visaCharges
        });
        finances.push({
            "particular": "Registration Fee",
            "amount": registrationFee
        });
        finances.push({
            "particular": "Food",
            "amount": food
        });
        finances.push({
            "particular": "Stay",
            "amount": stay
        });
        finances.push({
            "particular": "Medical Insurance",
            "amount": medicalInsurance
        });
        finances.push({
            "particular": "Others",
            "amount": others
        });
        return finances;

    }

    function setFlightDetails() {
        const flightDetails = [];
        flightDetails.push({
            "serialNo": "1",
            "arrival": arrival1,
            "destination": destination1
        });
        flightDetails.push({
            "serialNo": "2",
            "arrival": arrival2,
            "destination": destination2
        });
        return flightDetails;
    }
    const showErrorToast = (message) => {
        toast.error(message, {
            position: toast.POSITION.TOP_CENTER
        });
    };
    const requestGrant = async (e) => {
        e.preventDefault();
        if (freezeButton === true)
            return;

        setFreezeButton(true);

        if (!generalInfo.email || !generalInfo.email.includes('@') || !generalInfo.email.includes('.')) {
            showErrorToast('Please enter a valid email');
            return;
        }


        if (!generalInfo.entryNo) {
            showErrorToast('Please enter an entry number');
            return;
        }


        const mobileRegex = /^[0-9]{10}$/;
        if (!generalInfo.mobileNo || !mobileRegex.test(generalInfo.mobileNo)) {
            showErrorToast('Please enter a valid 10-digit mobile number');
            return;
        }


        const ifscRegex = /^[A-Za-z]{4}[a-zA-Z0-9]{7}$/;
        if (!generalInfo.ifsc || !ifscRegex.test(generalInfo.ifsc)) {
            showErrorToast('Please enter a valid IFSC code');
            return;
        }


        const accountNoRegex = /^[0-9]{9,18}$/;
        if (!generalInfo.accountNo || !accountNoRegex.test(generalInfo.accountNo)) {
            showErrorToast('Please enter a valid bank account number (9-18 digits)');
            return;
        }


        if (!conferenceInfo.nameOfConference) {
            showErrorToast('Please enter the name of the conference');
            return;
        }

        if (!conferenceInfo.venueOfConference) {
            showErrorToast('Please enter the venue of the conference');
            return;
        }

        if (!conferenceInfo.nameOfSociety) {
            showErrorToast('Please enter the name of the society');
            return;
        }

        if (!conferenceInfo.societyRecognized) {
            showErrorToast('Please specify if the society is recognized');
            return;
        }

        if (!conferenceInfo.reasonToAttend) {
            showErrorToast('Please provide a reason to attend the conference');
            return;
        }

        if (!conferenceInfo.paperInConference) {
            showErrorToast('Please specify if you have a paper in the conference');
            return;
        }

        if (!conferenceInfo.fundingSources) {
            showErrorToast('Please specify your funding sources');
            return;
        }

        if (!conferenceInfo.purposeOfVisit) {
            showErrorToast('Please specify the purpose of your visit');
            return;
        }

        if (!conferenceInfo.justification) {
            showErrorToast('Please provide justification');
            return;
        }

        if (!conferenceInfo.sponsorship) {
            showErrorToast('Please specify if you have sponsorship');
            return;
        }

        if (!conferenceInfo.financialSupport) {
            showErrorToast('Please specify if you have financial support');
            return;
        }

        if (dayjs(dateStarts).isAfter(dayjs(dateEnds))) {
            showErrorToast('Conference start date should be before or same as the end date');
            return;
        }

        if (dayjs(leaveStarts).isAfter(dayjs(leaveEnds))) {
            showErrorToast('Student leave start date should be before or same as the end date');
            return;
        }
        const formData = new FormData();

        formData.append("email", generalInfo.email);
        formData.append("entryNo", generalInfo.entryNo);

        formData.append("status", "0");
        formData.append("type", "1");

        formData.append("mobileNo", generalInfo.mobileNo);
        formData.append("ifscCode", generalInfo.ifsc);
        formData.append("bankAccountNo", generalInfo.accountNo);

        formData.append("nameOfConference", conferenceInfo.nameOfConference);
        formData.append("venueOfConference", conferenceInfo.venueOfConference);
        formData.append("nameOfSociety", conferenceInfo.nameOfSociety);
        formData.append("societyRecognized", conferenceInfo.societyRecognized);
        formData.append("reasonToAttend", conferenceInfo.reasonToAttend);
        formData.append("paperInConference", conferenceInfo.paperInConference);
        formData.append("fundingSources", conferenceInfo.fundingSources);
        formData.append("purposeOfVisit", conferenceInfo.purposeOfVisit);
        formData.append("justification", conferenceInfo.justification);
        formData.append("sponsorship", conferenceInfo.sponsorship);
        formData.append("financialSupport", conferenceInfo.financialSupport);
        formData.append("advances", advance);


        formData.append("conferenceStarts", dayjs(dateStarts).format('DD/MM/YYYY'));
        formData.append("conferenceEnds", dayjs(dateEnds).format('DD/MM/YYYY'));

        formData.append("studentLeaveStarts", dayjs(leaveStarts).format('DD/MM/YYYY'));
        formData.append("studentLeaveEnds", dayjs(leaveEnds).format('DD/MM/YYYY'));

        const flightDetails = setFlightDetails();
        const finances = setFinances();
        formData.append("flightDetails", JSON.stringify(flightDetails));
        formData.append("finances", JSON.stringify(finances));

        formData.append("letterOfInvitation", enclosures.letterOfInvitation);
        formData.append("copyOfAbstract", enclosures.copyOfAbstract);
        formData.append("conferenceBrochure", enclosures.conferenceBrochure);
        formData.append("acceptanceOfPaper", enclosures.acceptanceOfPaper);
        formData.append("accomodationCost", enclosures.accomodationCost);
        formData.append("invitationLetterAdditional", enclosures.invitationLetter);

        const token = getUserToken();

        const resp = await fetch(`${BASE_URL}/studentApplicationSubmitAbroad`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`
            },
            body: formData
        });

        if (resp.status === 200) {
            console.log("Success");
            setFreezeButton(false);
        }
        else {
            window.alert("Error");
        }

    }

    const getBasicInfo = async (req, res) => {
        try {
            const token = getUserToken();
            const resp = await fetch(`${BASE_URL}/studentInfoLoading`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "authorization": `Bearer ${token}`
                },
            });
            return resp.json();
        } catch (error) {
            console.log(error);
        }
    }

    function getTodayDate() {
        const date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate() + 1;

        const ymd = `${year}-${month}-${day}`;
        setDateStarts(dayjs(ymd));
        setDateEnds(dayjs(ymd));
        setLeaveStarts(dayjs(ymd));
        setLeaveEnds(dayjs(ymd));
    }

    useEffect(() => {
        getTodayDate();
        getBasicInfo().then((resp) => {
            setGeneralInfo(resp);
        }).catch((e) => {
            window.alert("Error Occured! Please Refresh the Page!");
        });
    }, []);

    return (
        <>

            <div style={{ "marginTop": "5rem", "marginLeft": "30rem" }} id="successModal" tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-10 right-0 left-10 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full">
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
                generalInfo={generalInfo} getGeneralInfo={getGeneralInfo}

                getConferenceInfo={getConferenceInfo}

                dateStarts={dateStarts} setDateStarts={setDateStarts}
                dateEnds={dateEnds} setDateEnds={setDateEnds}

                advance={advance} getAdvance={getAdvance}

                leaveStarts={leaveStarts} setLeaveStarts={setLeaveStarts}
                leaveEnds={leaveEnds} setLeaveEnds={setLeaveEnds}

                getFixedParts={getFixedParts}
                food={food} travel={travel} stay={stay}
                visaCharges={visaCharges} registrationFee={registrationFee}
                medicalInsurance={medicalInsurance} others={others}

                arrival1={arrival1} destination1={destination1}
                arrival2={arrival2} destination2={destination2}
                getFlightParts={getFlightParts}

                fileFunction={fileFunction}

                freezeButton={freezeButton}

                requestGrant={requestGrant}
            />
        </>
    )
}
