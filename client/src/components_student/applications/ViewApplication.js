import React, { useEffect, useState } from 'react'
import { getAppToken, removeAppToken } from '../../components_login/Tokens';
import { Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LoaderContent from '../../components/loading/LoaderContent';
import { delay } from '../../components/loading/Delay';

function ViewApplication() {

  const navigate = useNavigate();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const goBack = e => {
    console.log(data);
    e.preventDefault();
    removeAppToken();
    navigate('/studentLogin/application');
  }

  const getBasicInfo = async (req, res) => {
    try {
      const token = getAppToken();
      const resp = await fetch("/viewAnApplication", {
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
      setData(resp);

      // delay of 0.5 seconds
      delay(500).then(() => {
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
        <>
          < Container style={{ "marginTop": "2rem" }}>
            <div className="lg:flex lg:items-center lg:justify-between">

              <div className="min-w-0 flex-1">
                <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">{data.nameOfConference}</h2>
                <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <svg className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z" clip-rule="evenodd" />
                    </svg>
                    Submitted On {data.createdAt.substr(0, 10)}
                  </div>
                </div>
              </div>

              <div className="mt-5 flex lg:ml-4 lg:mt-0">
                <span className="ml-3 hidden sm:block">
                  <button type="button" className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    <svg className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z" />
                      <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z" />
                    </svg>
                    Download
                  </button>
                </span>
                <span className="sm:ml-3">
                  <button type="button" onClick={goBack} className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Go Back
                  </button>
                </span>
              </div>

            </div>
            <LoaderContent />
          </Container>
        </>}
    </>
  )
}

export default ViewApplication