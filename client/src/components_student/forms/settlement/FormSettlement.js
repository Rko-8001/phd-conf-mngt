import React, { useState, useEffect } from 'react'
import { Alert, AlertTitle } from '@mui/material'
import { BsAsterisk } from 'react-icons/bs';
import { Container } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Switch } from '@headlessui/react'
import { AiOutlineEllipsis } from 'react-icons/ai';
import { getUserToken, setAppToken } from '../../../components_login/Tokens';
import { BASE_URL } from '../../../components/requests/URL';
import Particulars from '../inputFields/Particulars';
import Enclosures from '../inputFields/Enclosures';
import ParticularsTravel from '../inputFields/ParticularsTravel';


const data = [];
// const options = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];
const options = [];
export default function InputData(props) {

  const [apps, setApps] = useState(data);
  const [options, setOptions] = useState([]);

  const getBasicInfo = async (req, res) => {
    try {
      const token = getUserToken();
      const resp = await fetch(`${BASE_URL}/studentApplicationView`, {
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
    getBasicInfo().then((resp) => {

      setApps(resp.map(resp => resp.nameOfConference));
      // console.log(resp.nameOfConference);
      // console.log(resp.map(resp => resp.nameOfConference))
      // options = apps.map(apps => apps.nameOfConference);

    }).catch((e) => {
      console.log(e.message)
    });
  }, []);

  const tableRows = props.tableData.map((info) => {
    return (
      <tr key={info.particular} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">{info.particular}</th>
        <th className="px-6 py-2">{info.amount}</th>
      </tr>
    );
  })
  const anotherTableRows = props.tableData.map((info) => {
    return (
      <tr key={info.particular} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">{info.particular}</th>
        <th className="px-6 py-2">{info.amount}</th>
      </tr>
    );
  })
  // const options = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];
  const [selectedOption, setSelectedOption] = useState();

  const handleChange = (event) => {
    const option = event.target.value;
    setSelectedOption(option);
  };
  const [alert, setAlert] = useState(true);

  return (
    <Container>
      {alert &&
        <Alert
          severity="warning"
          onClose={() => {
            setAlert(false);
          }}
        >
          <AlertTitle>Important</AlertTitle>
          <div className="flex">
            Fields with <BsAsterisk className='text-[#FF0000] mx-2 h-2' />  are Required.
          </div>
        </Alert>
      }

      <form>
        <br />
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Travelling Allowance Reimbursement/Settlement Form:</h2>
          <br />
          <br />
          <label htmlFor="applicatonRe" className="block text-sm font-medium leading-6 text-gray-900">
            Select the application for Settlement
          </label>
          <br />
          <select className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' value={selectedOption} onChange={handleChange}>
            {console.log(apps)}
            {apps.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          {/* <h2 className="text-base font-semibold leading-7 text-gray-900">Select the application for Settlement</h2> */}


          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="mobile" name='phone' className="block text-sm font-medium leading-6 text-gray-900">
                Mobile Number
              </label>
              <div className="mt-2">
                <input
                  type="tel"
                  name="mobile"
                  id="mobile"
                  onChange={props.getGeneralInfo}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="empCode" className="block text-sm font-medium leading-6 text-gray-900">
                Emp. Code
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="empCode"
                  id="empCode"
                  onChange={props.getGeneralInfo}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="department" className="block text-sm font-medium leading-6 text-gray-900">
                Department
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="department"
                  id="department"
                  onChange={props.getGeneralInfo}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="designation" className="block text-sm font-medium leading-6 text-gray-900">
                Designation
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="designation"
                  id="designation"
                  onChange={props.getGeneralInfo}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="Bpay" className="block text-sm font-medium leading-6 text-gray-900">
                Basic Pay with Grade Pay
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="Bpay"
                  id="Bpay"
                  onChange={props.getGeneralInfo}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="budgetHead" className="block text-sm font-medium leading-6 text-gray-900">
                Budget Head
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="budgetHead"
                  id="budgetHead"
                  onChange={props.getGeneralInfo}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="bankAccNo" className="block text-sm font-medium leading-6 text-gray-900">
                Advance drawn Rs.
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="advanceDrawn"
                  id="advanceDrawn"
                  onChange={props.getGeneralInfo}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="Date" className="block text-sm font-medium leading-6 text-gray-900">
                Date
              </label>
              <div className="mt-2">
                <input
                  type="date"
                  name="Date"
                  id="Date"
                  onChange={props.getGeneralInfo}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="bankAccNo" className="block text-sm font-medium leading-6 text-gray-900">
                Bank Account No.
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="bankAccNo"
                  id="bankAccNo"
                  onChange={props.getGeneralInfo}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

          </div>
        </div>



        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Travel between Cities/Countries including local to and fro Airport/Railway station etc.</h2>

          <ParticularsTravel
            rowDataTravel={props.rowDataTravel}
            travel={props.travel}
            tableDataTravel={props.tableDataTravel}
            addRowDataTravel={props.addRowDataTravel}
            getRowDataTravel={props.getRowDataTravel}
          />
        </div>








        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Any other expenses</h2>
          {/* <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="department" className="block text-sm font-medium leading-6 text-gray-900">
                Department:
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="department"
                  id="department"
                  onChange={props.getConferenceInfo}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="designation" className="block text-sm font-medium leading-6 text-gray-900">
                Designation
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="designation"
                  id="designation"
                  onChange={props.getConferenceInfo}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div> */}



          <Particulars
            rowData={props.rowData}
            getFixedParts={props.getFixedParts}
            travel={props.travel}
            food={props.food}
            stay={props.stay}
            registrationFee={props.registrationFee}
            tableData={props.tableData}
            addRowData={props.addRowData}
            getRowData={props.getRowData}
          />

          {/* <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="nameOfSociety" className="block text-sm font-medium leading-6 text-gray-900">
                Name of Society organizing the conference
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="nameOfSociety"
                  id="nameOfSociety"
                  onChange={props.getConferenceInfo}

                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <br />
          <div className="sm:col-span-3">
            <label htmlFor="societyRecognized" className="block text-sm font-medium leading-6 text-gray-900">
              Do you have any period of time for which you want to claim DA
            </label>
            <div className="">
              <input id="societyRecognized" type="radio"
                onChange={props.getConferenceInfo} value="Yes" name="societyRecognized" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="societyRecognized" className=" px-4 text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>
              <input id="societyRecognized" type="radio"
                onChange={props.getConferenceInfo} value="No" name="societyRecognized" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="societyRecognized" className=" px-4 text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
            </div>
          </div> */}

          <br />
          {/*<p className="py-4">Period of Event for which claimant doesn't want to claim DA:</p>
           <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="From"
              name="EventStarts"
              value={props.eventStarts}
              onChange={(newvalue) => {
                props.setEventStarts(newvalue);
              }}

            />
            <span>      </span>
            <DatePicker
              label="To"
              name="EventEnds"
              value={props.eventEnds}
              onChange={(newvalue) => {
                props.setEventEnds(newvalue);
              }}

            />
          </LocalizationProvider> */}

          <br /> <br />

          <div className="col-span-full">
            <label htmlFor="about1" className="block text-sm font-medium leading-6 text-gray-900">
              Any addtional Info regarding Conference/Finances.
            </label>
            <div className="mt-2">
              <textarea
                id="about1"
                name="reasonToAttend"
                rows={3}
                onChange={props.getConferenceInfo}
                className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>

          <br />


        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <br />
          <br />
          <b>Certified that</b>
          <br />
          <br />

          <li>All claims mentioned in this form correspond to actual expenditure incurred by me for which no reimbursement/claims have been
made from any other source (Govt./Private/Others)</li>
          <li>I was not provided with any free boarding/lodging/conveyance/registration fee waiver/travel coupons for which claim has been
made.</li>
          <br />
          <br />
          {/* <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Your Signature</label>
          <div className="sm:col-span-3">
            <div className="relative flex gap-x-3">
              <div className="text-sm leading-6">
                <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />
                <p className="text-gray-500"></p>
              </div>
            </div>
          </div> */}

<div className="mt-10 space-y-10">
            <fieldset>
              <legend className="text-sm flex font-semibold leading-6 text-gray-900">
                Enclosures Attached
                <BsAsterisk className='text-[#FF0000] h-2' />
              </legend>
              <div className="mt-6 space-y-6">

                <Enclosures
                  title="Signature"
                  onChangeFunction={props.fileFunction}
                  name="copyOfApprovedTour"
                  type="file"
                  acceptType="application/pdf"
                />
                <Enclosures
                  title="Enclosure 1"
                  onChangeFunction={props.fileFunction}
                  name="copyOfConferenceBrochure"
                  type="file"
                  acceptType="application/pdf"
                />
                <Enclosures
                  title="Enclosure 2"
                  name="copyOfAbstract"
                  onChangeFunction={props.fileFunction}
                  type="file"
                  acceptType="application/pdf"
                />
                <Enclosures
                  title="Enclosure 3"
                  name="yoursignature"
                  onChangeFunction={props.fileFunction}
                  type="file"
                  acceptType="application/pdf"
                />
              </div>
            </fieldset>

          </div>


        </div>


        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            onClick={props.submitSettlement}
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Submit Form
          </button>
        </div>
      </form>

      <br />
      <br />
      <br />
      <br />
    </Container >
  )
}
