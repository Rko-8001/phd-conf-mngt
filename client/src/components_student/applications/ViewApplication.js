import React from 'react'
import { removeAppToken } from '../../components_login/Tokens';
import { useNavigate } from 'react-router-dom';
import ApplicationMainPage from '../../components/applicationStudent/ApplicationMainPage';



export default function ViewApplicationStudent() {

  const navigate = useNavigate();
  const goBack = e => {
    e.preventDefault();
    removeAppToken();
    navigate('/studentLogin/application');
  }

  return (
    <>
      <ApplicationMainPage role="0" goBack={goBack} />
    </>
  )
}
