import React, { useEffect, useState } from 'react'
import { getAppToken } from '../../components_login/Tokens';

function ViewApplication() {
  const [data, setData] = useState();
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
    }).catch((e) => {
      console.log(e.message)
    });
  }, []);

  return (
    <>

    </>
  )
}

export default ViewApplication