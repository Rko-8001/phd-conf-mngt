import { Container } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Switch } from '@headlessui/react'
import { AiOutlineEllipsis } from 'react-icons/ai';


export default function InputData(props) {

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


  return (
    <Container>

      <form>
        <br />
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Travelling Allowance Reimbursement/Settlement Form:</h2>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="mobileNo" name='mobileNo' className="block text-sm font-medium leading-6 text-gray-900">
                Name
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
          <h2 className="text-base font-semibold leading-7 text-gray-900">Department details</h2>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="nameOfConference" className="block text-sm font-medium leading-6 text-gray-900">
                Department:
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
                Designation
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

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
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
            <label htmlFor="society" className="block text-sm font-medium leading-6 text-gray-900">
              Do you have any period of time for which you want to claim DA
            </label>
            <div className="">
              <input id="societyRecognized" type="radio"
                onChange={props.getConferenceInfo} value="Yes" name="societyRecognized" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="societyRecognized" className=" px-4 text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>
              <input id="societyRecognized" type="radio"
                onChange={props.getConferenceInfo} value="No" name="societyRecognized" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="societyRecognized" className=" px-4 text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
            </div>
          </div>

          <br />
          <p className="py-4">Period of Event for which claimant doesn't want to claim DA:</p>
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
          </LocalizationProvider>

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
          <h2 className="text-base font-semibold leading-7 text-gray-900">Financial Information</h2>

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
                    Lodging
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
                  <div className="sm:col-span-3">
                    <div className="relative flex gap-x-3">
                      <div className="text-sm leading-6">
                        {/* <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Attach File to Support</label> */}
                        <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />
                        <p className="text-gray-500"></p>
                      </div>
                    </div>
                  </div>

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
                  <div className="sm:col-span-3">
                    <div className="relative flex gap-x-3">
                      <div className="text-sm leading-6">
                        {/* <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Attach File to Support</label> */}
                        <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />
                        <p className="text-gray-500"></p>
                      </div>
                    </div>
                  </div>

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
                  <div className="sm:col-span-3">
                    <div className="relative flex gap-x-3">
                      <div className="text-sm leading-6">
                        {/* <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Attach File to Support</label> */}
                        <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />
                        <p className="text-gray-500"></p>
                      </div>
                    </div>
                  </div>
                </tr>
                {tableRows}
              </tbody>
            </table>
          </div>

          <br />
          <br />
          <b>Certified that</b>
          <br />
          <br />

          <li>All claims mentioned in this form correspond to actual expenditure incurred by me for which no reimbursement have been made from any other source (Govt/Pvt/Others) </li>
          <li>I was not provided with any free boarding/lodging/conveyence/registration fee waiver/travel coupons for which claim has been made.</li>
          <br />
          <br />
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Your Signature</label>
          <div className="sm:col-span-3">
            <div className="relative flex gap-x-3">
              <div className="text-sm leading-6">
                {/* <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Attach File to Support</label> */}
                <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />
                <p className="text-gray-500"></p>
              </div>
            </div>
          </div>


        </div>


        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            onClick={props.requestGrant}
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
