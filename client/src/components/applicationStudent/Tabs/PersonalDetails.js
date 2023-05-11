import React from 'react'

function PersonalDetails({ user, data }) {
  return (
    <>
      <div className="overflow-hidden mt-5 bg-white shadow sm:rounded-lg">
        <div className="px-4 py-2 sm:px-6">
          <h3 className="text-base font-semibold leading-6 text-gray-900">Applicant Information</h3>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Name of PhD Scholar</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{user.name}</dd>
            </div>

            <div className="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Email / Entry No</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{user.email} / {user.entryNo}</dd>
            </div>

            <div className="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Department</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{user.department}</dd>
            </div>

            <div className="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Date of Joining </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{user.dateOfJoining}</dd>
            </div>

            <div className="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Supervisor </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{user.nameOfSupervisor} ({user.emailOfSupervisor})</dd>
            </div>


            <div className="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Area Of Specialisation </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{user.areaOfSpecialisation}</dd>
            </div>

            <div className="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Fellowship Category </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{user.fellowshipCategory}</dd>
            </div>

            <div className="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Mobile No</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{data.mobileNo}</dd>
            </div>

            <div className="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Bank Account No</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{data.bankAccountNo}</dd>
            </div>

            <div className="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">IFSC Code</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{data?.ifscCode}</dd>
            </div>

          </dl>
        </div>
      </div>
    </>
  )
}

export default PersonalDetails