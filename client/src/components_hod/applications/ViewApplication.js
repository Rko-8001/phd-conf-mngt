import React from 'react'
import { removeAppToken } from '../../components_login/Tokens';
import { useNavigate } from 'react-router-dom';
import ApplicationMainPage from '../../components/applicationStudent/ApplicationMainPage';

export default function ViewApplicationHod() {

  const navigate = useNavigate();

  const goBack = e => {
    e.preventDefault();
    removeAppToken();
    navigate('/hodLogin/application');
  }

  return (
    <>
      <ApplicationMainPage role="2" goBack={goBack} />
    </>
  );
}

