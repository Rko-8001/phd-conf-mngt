import React, { useState, useEffect } from 'react'
import { getUserToken } from '../../components_login/Tokens';
import LoaderContent from '../../components/loading/LoaderContent';
import { delay } from '../../components/loading/Delay';
import { BASE_URL } from '../../components/requests/URL';
import Heading from '../../components/navBars/Heading';
import img from './research.png';

export default function ResearchHome() {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getUserInfo = async (req, res) => {
    try {
      const token = getUserToken();
      const resp = await fetch(`${BASE_URL}/infoLoading`, {
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

  useEffect(() => {
    getUserInfo().then((resp) => {
      setUser(resp);

      delay(500).then(() => {
        setIsLoading(false);
      }).catch((error) => {
        console.log(error);
      })


    }).catch((error) => {
      console.log(error);
    })
  }, []);

  return (
    <>
      {isLoading
        ?
        <LoaderContent />
        :
        // <LoaderContent />
        <>
          <div className='display-flex justify-center'>
            <Heading />
            <div className='ml-10 pl-10 h-1/4 w-3/4 display-flex items-center'>
              <img src={img} />
              

            </div>
          </div>

        </>
      }
    </>
  )
}


