import { Alert, AlertTitle, Container } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Switch } from '@headlessui/react'

import TextField from '../inputFields/TextField';
import TextArea from '../inputFields/TextArea';
import Particulars from '../inputFields/Particulars';
import Enclosures from '../inputFields/Enclosures';
import { BsAsterisk } from 'react-icons/bs';
import { useState } from 'react';

export default function InputData(props) {

  const [alert, setAlert] = useState(true);
  function fileFunction() {
    console.log("hi");
  }

  return (
    <Container>

      <form>
        <br />
        <div className="border-b border-gray-900/10 pb-12">
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

          <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Details</h2>

          <div className="mt-8 grid  grid-cols-3 gap-x-6  sm:grid-cols-6">
            <TextField name="mobileNo" title="Mobile Number" onChangeFunction={props.getGeneralInfo} value={props.generalInfo.mobileNo} type="text" />
          </div>

          <div className="mt-8 grid grid-cols-3 gap-x-6 gap-y-6 sm:grid-cols-6">
            <TextField name="accountNo" title="Account Number" onChangeFunction={props.getGeneralInfo} value='' type="text" />
            <TextField name="ifsc" title="IFSC Code" onChangeFunction={props.getGeneralInfo} value='' type="text" />
          </div>

        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Conference Details</h2>


          <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <TextField name="nameOfConference" title="Name of Conference" onChangeFunction={props.getConferenceInfo} type="text" />
            <TextField name="venueOfConference" title="Venue of Conference" onChangeFunction={props.getConferenceInfo} type="text" />
          </div>

          <br />
          <TextArea name="paperInConference"
            title="Papers / Posters"
            subtitle="Write all paper(s)/ poster(s) to be present in the conference."
            onChangeFunction={props.getConferenceInfo}
            rows={3}
          />



          <br />
          <p className='m-3 flex'>
            Period of Conference
            <BsAsterisk className='text-[#FF0000] h-2' />

          </p>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="From"
              name="periodOfConferenceStarts"
              value={props.dateStarts}
              onChange={(newvalue) => {
                props.setDateStarts(newvalue);
              }}

            />
            <span>    </span>
            <DatePicker
              label="To"
              name="periodOfConferenceEnds"
              value={props.dateEnds}
              onChange={(newvalue) => {
                props.setDateEnds(newvalue);
              }}

            />
          </LocalizationProvider>

        </div>


        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Financial Information</h2>
          <br />

          <TextArea
            name="financialSupport"
            title="Financial Support"
            subtitle="Any type of financial support from institute fund/ project/ any other source."
            onChangeFunction={props.getConferenceInfo}
            rows={2}
          />


          <br />
          <div className="col-span-full">

            <label htmlFor="advance" className="block text-sm font-medium leading-6 text-gray-900">
              Advance Required
            </label>
            <Switch
              id="advance"
              checked={props.advance}
              onChange={props.getAdvance}
              className={`${props.advance ? 'bg-blue-600' : 'bg-gray-200'
                } relative inline-flex h-6 w-11 items-center rounded-full`}
            >
              <span className="sr-only">Advance Section</span>
              <span
                className={`${props.advance ? 'translate-x-6' : 'translate-x-1'
                  } inline-block h-4 w-4 transform rounded-full bg-white transition`}
              />
            </Switch>
          </div>

          <br />
          <Particulars
            rowData={props.rowData}
            getFixedParts={props.getFixedParts}
            travel={props.travel}
            food={props.food}
            stay={props.stay}
            registrationFee={props.registrationFee}
            tableData={props.tableData}
          />

          <div className="mt-10 space-y-10">
            <fieldset>
              <legend className="text-sm flex font-semibold leading-6 text-gray-900">
                Enclosures Attached
                <BsAsterisk className='text-[#FF0000] h-2' />
              </legend>
              <div className="mt-6 space-y-6">
                <Enclosures
                  title="Copy of Acceptance"
                  onChangeFunction={fileFunction}
                />
                <Enclosures
                  title="Copy of Conference Brochure"
                  onChangeFunction={fileFunction}
                />
                <Enclosures
                  title="Copy of Abstract"
                  onChangeFunction={fileFunction}
                />

              </div>
            </fieldset>

          </div>

          <br /> <br />
          <h3 className="flex text-base font-semibold leading-7 text-gray-900">
            Duty Leave
            <BsAsterisk className='text-[#FF0000] h-2' />
          </h3>
          <br />

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="From"
              value={props.leaveStarts}
              onChange={(newValue) => props.setLeaveStarts(newValue)}
            />
            <span>      </span>
            <DatePicker
              label="To"
              value={props.leaveEnds}
              onChange={(newValue) => props.setLeaveEnds(newValue)}
            />
          </LocalizationProvider>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="numberOfDays" className=" flex block text-sm font-medium leading-6 text-gray-900">
                Number of Days
                <BsAsterisk className='text-[#FF0000] h-2' />
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="numberOfDays"
                  id="numberOfDays"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

          </div>

        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">

          <button
            onClick={props.requestGrant}
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Request Grant
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
