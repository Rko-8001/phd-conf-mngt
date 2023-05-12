import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Switch } from '@headlessui/react'
import { Alert, AlertTitle, Container } from '@mui/material'
import { BsAsterisk } from 'react-icons/bs';
import React, { useState } from 'react';
import TextField from '../inputFields/TextField';
import InputOption from '../inputFields/InputOption';
import TextArea from '../inputFields/TextArea';
import Enclosures from '../inputFields/Enclosures';
import TextAreaSpecfic from '../inputFields/TextAreaSpecfic';

export default function InputData(props) {

  const [alert, setAlert] = useState(true);

  const expenses = (title, name, onChangeFunction, value) =>
    <tr key={name} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th scope='row' className='px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
        {title}
      </th>
      <td className='px-6 py-2'>
        <input
          type='text'
          name={name}
          value={value}
          className=''
          onChange={onChangeFunction}
        />
      </td>
    </tr>

  const flights = (serialNo, destinationName, arrivalName, onChangeFunction, destinationValue, arrivalValue) =>
    <tr key={serialNo}>
      <th scope="col" className="px-6 py-3">
        {serialNo}
      </th>
      <th scope="col" className="px-6 py-3 ">
        <input
          type='text'
          name={destinationName}
          value={destinationValue}
          className=''
          onChange={onChangeFunction}
        />
      </th>
      <th scope="col" className="px-6 py-3">
        <input
          type='text'
          name={arrivalName}
          value={arrivalValue}
          className=''
          onChange={onChangeFunction}
        />
      </th>
    </tr>

  return (
    <Container>
      <form>
        <br />

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
        <br />

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>

          <div className="mt-8 grid  grid-cols-3 gap-x-6  sm:grid-cols-6">
            <TextField name="mobileNo" title="Mobile Number" onChangeFunction={props.getGeneralInfo} value={props.generalInfo?.mobileNo} type="text" />
          </div>

          <div className="mt-8 grid grid-cols-3 gap-x-6 gap-y-6 sm:grid-cols-6">
            <TextField name="accountNo" title="Account Number" onChangeFunction={props.getGeneralInfo} value='' type="text" />
            <TextField name="ifsc" title="IFSC Code" onChangeFunction={props.getGeneralInfo} value='' type="text" />
          </div>

        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Conference Details</h2>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

            <TextField
              name="nameOfConference"
              title="Title of the conference / symposium:"
              onChangeFunction={props.getConferenceInfo}
              value=''
              type="text"
            />

            <TextField
              name="venueOfConference"
              title="Venue"
              onChangeFunction={props.getConferenceInfo}
              value=''
              type="text"
            />
          </div>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

            <TextField
              name="nameOfSociety"
              title="Name of Society organizing the conference"
              onChangeFunction={props.getConferenceInfo}
              value=''
              type="text"
            />

            <InputOption
              name="societyRecognized"
              title="Is the conference organized by recognized scientific society"
              onChangeFunction={props.getConferenceInfo}
            />

          </div>

          <br />

          {/* Event Period  */}
          <div >
            <p className="py-4">Period of Event</p>
            <div className='flex flex-span-2'>

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="From"
                  name="dateStarts"
                  value={props.dateStarts}
                  onChange={(newvalue) => {
                    props.setDateStarts(newvalue);
                  }}

                />
                <div className='p-4 font-bold'>:</div>
                <DatePicker
                  label="To"
                  name="dateEnds"
                  value={props.dateEnds}
                  onChange={(newvalue) => {
                    props.setDateEnds(newvalue);
                  }}

                />
              </LocalizationProvider>
            </div>
          </div>

          <br />
          <TextArea
            name="reasonToAttend"
            title="Why would you like to attend this conference and what is its relevance with your PhD thesis"
            onChangeFunction={props.getConferenceInfo}
            value=''
            type="text"
          />

          <br />
          {/* Flight Details */}
          <div >
            <p className="block text-sm font-medium leading-6 text-gray-900">Itinerary/ Flight Details (arrival & Departure to the place of Conference)</p>
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Serial No.
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Departure
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Arrival
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {flights(1, "destination1", "arrival1", props.getFlightParts, props.destination1, props.arrival1)}
                  {flights(2, "destination2", "arrival2", props.getFlightParts, props.destination2, props.arrival2)}
                </tbody>
              </table>
            </div>
          </div>

          <br />
          <TextArea
            name="paperInConference"
            title="Write all paper(s)/ poster(s) to be present in the conference."
            onChangeFunction={props.getConferenceInfo}
            value=''
            type="text"
          />

          <br />
          <TextArea
            name="fundingSources"
            title="Whether applied to DST/DBT/INSA/other funding sources?"
            onChangeFunction={props.getConferenceInfo}
            value=''
            type="text"
          />

          <br />
          {/* 3 particular text areas */}
          <div >
            <p className="block text-sm font-medium leading-6 text-gray-900">Particular of any additional visit(s)</p>

            <div className="mt-1 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

              <TextAreaSpecfic
                title="Purpose of Visit"
                name="purposeOfVisit"
                onChangeFunction={props.getConferenceInfo}
                spanType={2}
              />

              <TextAreaSpecfic
                title="Justification"
                name="justification"
                onChangeFunction={props.getConferenceInfo}
                spanType={2}
              />

              <TextAreaSpecfic
                title="Sponsorship"
                name="sponsorship"
                onChangeFunction={props.getConferenceInfo}
                spanType={2}
              />

            </div>
          </div>
        </div>


        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Financial Information</h2>

          <br />
          <TextArea
            name="financialSupport"
            title="Financial Support"
            onChangeFunction={props.getConferenceInfo}
            value=''
            type="text"
            subtitle="Any type of financial support from institute fund/ project/ any other source."
          />


          <br />
          {/* advance yes or no  */}
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
          {/* expenses */}
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Particulars
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Amount (Rs)
                  </th>
                </tr>
              </thead>
              <tbody>
                {expenses("Travel", "travel", props.getFixedParts, props.travel)}
                {expenses("Visa Charges", "visaCharges", props.getFixedParts, props.visaCharges)}
                {expenses("Registration Fee", "registrationFee", props.getFixedParts, props.registrationFee)}
                {expenses("Food", "food", props.getFixedParts, props.food)}
                {expenses("Stay", "stay", props.getFixedParts, props.stay)}
                {expenses("Medical Insurance", "medicalInsurance", props.getFixedParts, props.medicalInsurance)}
                {expenses("Others", "others", props.getFixedParts, props.others)}

              </tbody>

            </table>
          </div>


          <br /> <br />
          {/* Duty Leave  */}
          <div >
            <h3 className="text-base font-semibold leading-7 text-gray-900">Duty Leave</h3>
            <br />
            <div className="flex flex-span-2">

              <LocalizationProvider dateAdapter={AdapterDayjs}>

                <DatePicker
                  label="From"
                  value={props.leaveStarts}
                  onChange={(newValue) => props.setLeaveStarts(newValue)}
                />
                <div className='p-4 font-bold'>:</div>

                <DatePicker
                  label="To"
                  value={props.leaveEnds}
                  onChange={(newValue) => props.setLeaveEnds(newValue)}
                />

              </LocalizationProvider>

            </div>
          </div>
        </div>

        <div className="mt-10 space-y-10">
          <fieldset>
            <legend className="text-sm font-semibold leading-6 text-gray-900">Supporting Documents</legend>
            <div className="mt-6 space-y-6">
              <Enclosures
                title="Letter of Invitation"
                name="letterOfInvitation"
                onChangeFunction={props.fileFunction}
                type="file"
                acceptType="application/pdf"
              />

              <Enclosures
                title="Copy of Abstract"
                name="copyOfAbstract"
                onChangeFunction={props.fileFunction}
                type="file"
                acceptType="application/pdf"
              />

              <Enclosures
                title="Conference brochure with registraton fee detail"
                name="conferenceBrochure"
                onChangeFunction={props.fileFunction}
                type="file"
                acceptType="application/pdf"
              />

              <Enclosures
                title="Acceptance of Paper"
                name="acceptanceOfPaper"
                onChangeFunction={props.fileFunction}
                type="file"
                acceptType="application/pdf"
              />

              <Enclosures
                title="Accomodation Cost/details"
                name="accomodationCost"
                onChangeFunction={props.fileFunction}
                type="file"
                acceptType="application/pdf"
              />

              <Enclosures
                title="Invitation Letter(s) e-mails [for additonal visit(s)]"
                name="invitationLetter"
                onChangeFunction={props.fileFunction}
                type="file"
                acceptType="application/pdf"
              />

            </div>
          </fieldset>

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
      <br /> -
    </Container >
  )
}
