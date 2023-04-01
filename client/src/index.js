import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import Check from './Check';
import NavBar1 from "./studentSide/NavBar1";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
    {/* <Check/> */}
    {/* <NavBar1/> */}
  </BrowserRouter>
);
