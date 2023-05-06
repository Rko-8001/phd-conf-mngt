import React, { useEffect, useState } from 'react'
import logo from './assets/logo.png';
import arrow from './assets/control.png'

import { getroleToken, removeAppToken, removeUserToken, removeroleToken } from '../../components_login/Tokens';
import { useNavigate } from 'react-router-dom';
import { AccountSideBar, FacultySideBar, ResarchSideBar, StudentSideBar } from './SideBarRoutes';


const App = () => {
  const [open, setOpen] = useState(true);
  const [menu, setMenu] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const role = getroleToken();
    if (role === "0")
      setMenu(StudentSideBar);
    else if (role === "1")
      setMenu(FacultySideBar);
    else if (role === "2")
      setMenu(ResarchSideBar);
    else if (role === "3")
      setMenu(AccountSideBar);

  }, [])

  function nameType() {
    const role = getroleToken();
    console.log(role);
    if (role === "0")
      return "Student";
    else if (role === "1")
      return "Supervisor";
    else if (role === "2")
      return "Research Section";
    else if (role === "3")
      return "Account Section";
    else {
    }

  }
  const handleClick = (link) => {
    if (link === "logout") {
      removeroleToken();
      removeAppToken();
      removeUserToken();
      navigate("/");
    }
    else {
      navigate(link);
    }
  }


  return (
    <div className="flex">
      <div
        className={` ${open ? "w-72" : "w-20 "
          } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src={arrow}
          alt='..'
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src={logo}
            alt='..'
            className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"
              }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"
              }`}
          >
            {nameType()}
          </h1>
        </div>
        <ul className="pt-6">
          {menu.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} `}
              onClick={(e) => {
                e.preventDefault();
                handleClick(Menu.link);
              }}
            >
              <img src={`${Menu.src}`} alt="." />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div >
  );


};
export default App;