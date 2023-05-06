import { Container } from '@mui/material'
import { useState, useEffect } from 'react';
import { getUserToken } from '../../components_login/Tokens';
import LoaderContent from '../../components/loading/LoaderContent';
import { delay } from '../../components/loading/Delay';
import { BASE_URL } from '../../components/requests/URL';

export default function Profile() {

  const [isLoading, setIsLoading] = useState(true);

  const [profileInfo, setProfileInfo] = useState({});

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

  useEffect(() => {
    getBasicInfo().then((data) => {

      setProfileInfo(data);
      // delay of 2 seconds
      delay(50).then(() => {
        setIsLoading(false);
      }).catch((error) => {
        console.log(error);
      })


    }).catch((e) => {
      console.log(e.message)
    });
  }, []);

  return (
    <>
      {isLoading ?
        <LoaderContent />
        :

        <Container>
          <div className="overflow-hidden bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-base font-semibold leading-6 text-gray-900">Personal Information</h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">Please inform if any discrepancy</p>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Full name</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{profileInfo.name}</dd>
                </div>
                <div className="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Entry Number</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{profileInfo.entryNo}</dd>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Email</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{profileInfo.email}</dd>
                </div>
                <div className="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Department</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{profileInfo.department}</dd>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Date of Joining</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{profileInfo.dateOfJoining}</dd>
                </div>
                <div className="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Fellowship Category</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{profileInfo.fellowshipCategory}</dd>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Area of Specialisation</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{profileInfo.areaOfSpecialisation}</dd>
                </div>
                <div className="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Name of Supervisor</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{profileInfo.nameOfSupervisor} ({profileInfo.emailOfSupervisor})</dd>
                </div>
                <div className="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Mobile Number</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{profileInfo.mobileNo}</dd>
                </div>
              </dl>
            </div>
          </div>
        </Container>
      }

    </>
  )
}
