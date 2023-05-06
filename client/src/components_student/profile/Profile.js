import { Container } from '@mui/material'
import { useState, useEffect } from 'react';
import { getUserToken } from '../../components_login/Tokens';
import LoaderContent from '../../components/loading/LoaderContent';
import { delay } from '../../components/loading/Delay';
import { BASE_URL } from '../../components/requests/URL';
import userPhoto from './User.png'
import iitRopar from './backgroundClg.jpg';
import ProfilePersonalInfo from './ProfilePersonalInfo';
import UpdateInfoModal from './UpdateInfoModal';
export default function Profile() {

  const [isLoading, setIsLoading] = useState(true);
  const [profileInfo, setProfileInfo] = useState({});
  const [modalClass, setModalClass] = useState("hidden ");

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
          <div className="h-full w-full bg-white p-5">

            <div className="bg-gray-50 rounded-lg shadow-xl pb-8">

              <div className="w-full h-[200px]">
                <img
                  src={iitRopar}
                  className="w-full h-full object-cover overflow-y-hidden rounded-tl-lg rounded-tr-lg"
                  alt=""
                />
              </div>

              <div className="flex flex-col items-center -mt-20">
                <img src={userPhoto}
                  className="w-40 border-4 border-white rounded-full"
                  alt=""
                />
                <div className="flex items-center space-x-2 mt-2 flex-col">
                  <p className="text-xl">{profileInfo.name}</p>
                  <p className="text">{profileInfo.email}</p>
                </div>

              </div>
              <div className="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
                <div className="flex items-center space-x-4 mt-2">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setModalClass("");
                    }}
                    className="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                    </svg>
                    <span>Update Info</span>
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setModalClass("hidden");
                    }}
                    className="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
                    Request Change Fellowship Category
                  </button>
                </div>
              </div>
            </div>
            <div className={`${modalClass}`}>
            <UpdateInfoModal  setModalClass={setModalClass} mobileNo={profileInfo.mobileNo}/>
            </div>
            <ProfilePersonalInfo profileInfo={profileInfo} />

          </div >

        </Container>
      }

    </>
  )
}
