import { Container } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Switch } from '@headlessui/react'
import { useState } from 'react';


export default function InputData(props) {

  const tableRows = props.tableData.map((info) => {
    return (
      <tr key={info.particular} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">{info.particular}</th>
        <th className="px-6 py-2">{info.amount}</th>
      </tr>
    );
  });
  // const [image,setImage] = useState("");

  // function convertToBase64(e) {
  //   console.log(e)
  //   var reader = new FileReader();
  //   reader.readAsDataURL(e.target.files[0]);
  //   reader.onload = () => {
  //     console.log("The value of image:")
  //     console.log(reader.result);
  //     setImage(reader.result)
  //   };
  //   reader.onerror = error => {
  //     console.log("Error: ", error);
  //   };
  // }


  return (
    <Container>

      <form>
        <br />
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="mobileNo" name='mobileNo' className="block text-sm font-medium leading-6 text-gray-900">
                Mobile No
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="mobileNo"
                  id="mobileNo"
                  onChange={props.getGeneralInfo}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="accountNo" className="block text-sm font-medium leading-6 text-gray-900">
                Bank Account Number
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="accountNo"
                  id="accountNo"
                  onChange={props.getGeneralInfo}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Conference Details</h2>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="nameOfConference" className="block text-sm font-medium leading-6 text-gray-900">
                Name of Conference
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="nameOfConference"
                  id="nameOfConference"
                  onChange={props.getConferenceInfo}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="venueOfConference" className="block text-sm font-medium leading-6 text-gray-900">
                Venue of Conference
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="venueOfConference"
                  id="venueOfConference"
                  onChange={props.getConferenceInfo}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>



          <div className="col-span-full">
            <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
              Papers/ Posters
            </label>
            <div className="mt-2">
              <textarea
                id="about"
                name="paperInConference"
                onChange={props.getConferenceInfo}
                rows={3}
                className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
            <p className="mt-3 text-sm leading-6 text-gray-600">Write all paper(s)/ poster(s) to be present in the conference.</p>
          </div>


          <br />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="From"
              name="periodOfConferenceStarts"
              value={props.dateStarts}
              onChange={(newvalue) => {
                props.setDateStarts(newvalue);
              }}

            />
            <span>      </span>
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
          <div className="col-span-full">
            <label htmlFor="financialSupport" className="block text-sm font-medium leading-6 text-gray-900">
              Financial Support
            </label>
            <div className="mt-2">
              <textarea
                id="financialSupport"
                name="financialSupport"
                rows={2}
                className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                defaultValue={''}
                onChange={props.getConferenceInfo}
              />
            </div>
            <p className="mt-3 text-sm leading-6 text-gray-600"> Any type of financial support from institute fund/ project/ any other source.</p>
          </div>
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

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="mobileNo" name='mobileNo' className="block text-sm font-medium leading-6 text-gray-900">
                Particulars
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="particular"
                  id="abcd"
                  value={props.rowData.particular}
                  onChange={props.getRowData}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="accountNo" className="block text-sm font-medium leading-6 text-gray-900">
                Amount
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="amount"
                  id="amount"
                  value={props.rowData.amount}
                  onChange={props.getRowData}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              onClick={props.addRowData}
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              ADD
            </button>
          </div>



          <br />
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
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Travel
                  </th>
                  <td className="px-6 py-2">
                    <input
                      type="text"
                      name="travel"
                      value={props.travel}
                      className=""
                      onChange={props.getFixedParts}
                    />
                  </td>

                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Registration Fee
                  </th>
                  <td className="px-6 py-2">
                    <input
                      type="text"
                      name="registrationFee"
                      value={props.registrationFee}
                      className=""
                      onChange={props.getFixedParts}
                    />
                  </td>

                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Food
                  </th>
                  <td className="px-6 py-2">
                    <input
                      type="text"
                      name="food"
                      value={props.food}
                      className=""
                      onChange={props.getFixedParts}
                    />
                  </td>

                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Stay
                  </th>
                  <td className="px-6 py-2">
                    <input
                      type="text"
                      name="stay"
                      value={props.stay}
                      className=""
                      onChange={props.getFixedParts}
                    />
                  </td>
                </tr>
                {tableRows}
              </tbody>
            </table>
          </div>



          <div className="mt-10 space-y-10">
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">Enclosures Attached</legend>
              <div className="mt-6 space-y-6">


                <div className="relative flex gap-x-3">
                  <div className="text-sm leading-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Copy of Acceptance</label>
                    <input value={props.image} onChange={props.setimage} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />
                    <p className="text-gray-500"></p>
                  </div>
                </div>
                
                {/* <div className='auth-wrapper'>
                  <div className='auth-inner' style={{width: "auto"}}>
                    upload..
                    <input
                      accept='image/*'
                      type='file'
                      onChange={props.convertToBase64}
                    />
                  </div>
                </div> */}

                {props.img==""||props.img==null?"":<img width={100} height={100} src={props.img}/>}

                <div className="relative flex gap-x-3">

                  <div className="text-sm leading-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Copy of Conference Brochure</label>
                    <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />
                  </div>
                </div>

                <div className="relative flex gap-x-3">
                  <div className="text-sm leading-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Copy of Abstract</label>
                    <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />
                    <p className="text-gray-500"></p>
                  </div>
                </div>

              </div>
            </fieldset>

          </div>

          <br /> <br />
          <h3 className="text-base font-semibold leading-7 text-gray-900">Duty Leave</h3>
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
              <label htmlFor="numberOfDays" className="block text-sm font-medium leading-6 text-gray-900">
                Number of Days
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
    </Container>
  )
}
