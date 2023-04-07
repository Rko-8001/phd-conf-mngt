import React, { useState, useEffect } from 'react'
import { getUserToken } from '../../components_login/Tokens';
import LoaderContent from '../../components/loading/LoaderContent';
import { Container } from '@mui/material';
import ResearchNav from '../researchNav/ResearchNav';

export default function ResearchHome() {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getUserInfo = async (req, res) => {
    try {
      const token = getUserToken();
      const resp = await fetch("/infoLoading", {
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
      setIsLoading(false);
    }).catch((error) => {
      console.log(error);
    })
  }, [])
  return (
    <>
      <ResearchNav/>
      {isLoading ?
        <>
          <Container>
            <LoaderContent />
          </Container>
        </>
        :
        <> </>}
    </>
  )
}


