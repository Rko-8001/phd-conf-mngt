import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

//                    Components Maintained
import Login from './Login';
import FormInput from './studentSide/forms/FormInput';
import Home from './studentSide/Home';



function App() {

  const [emailId, setEmailId] = useState("");

  const getEmailId = e => {
    setEmailId(e);
    // console.log(e);
  }
  return (
    <>
      <Routes>
        <Route path='/' element = {<Login getEmailIdLogin={getEmailId} />} />
        <Route path='/studentLogin' >
          <Route index           element={ <Home studentEmail={emailId}/>     }/>
          <Route path="formFill" element={ <FormInput studentEmail={emailId}/>}/>
        </Route>

        {/* <Route exact path='/studentLogin' element= { <Home/>     }/>
        <Route path='/studentLogin/:id'   element= { <FormInput/>}/> */}
      </Routes>
    </>
  );
}


export default App;
