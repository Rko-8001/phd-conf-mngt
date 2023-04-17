import React, { useState } from 'react'
import logo from './assets/logo.png';
import arrow from './assets/control.png'
import Chart_fill from './assets/Chart_fill.png'
import Chat from './assets/Chart.png';
import Calendar from './assets/Calendar.png';
import Folder from './assets/Folder.png';
import User from './assets/User.png';
import { removeAppToken, removeUserToken } from '../../components_login/Tokens';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: Chart_fill, link: "/studentLogin" },
    { title: "Profile", src: Chart_fill, link: "/studentLogin/Profile" },
    { title: "Settlement", src: Chat, link: '/studentLogin', gap: true },
    { title: "Applications", src: User, link: "/studentLogin/application" },
    { title: "Fill Form", src: Calendar, link: "/studentLogin/formFill" },
    { title: "Logout ", src: Folder, gap: true, link: "logout" },
  ];

  const navigate = useNavigate();

  const handleClick = (link) => {
    if (link === "logout") {

      removeAppToken();
      removeUserToken();
      navigate("/");
    }
    else {
      navigate(link);
    }
  }

  // const setNavStudent = () => {
  //   setMenus([
  //     { title: "Dashboard", src: Chart_fill, link: "/studentLogin" },
  //     { title: "TBD", src: Chat, link: '/studentLogin' },
  //     { title: "Applications", src: User, gap: true, link: "/studentLogin/application" },
  //     { title: "Fill Form", src: Calendar, link: "/studentLogin/formFill" },
  //     { title: "Logout ", src: Folder, gap: true, link: "logout" },
  //   ])
  // }

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
            Student
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} `}
              onClick={(e) => {
                e.preventDefault();
                handleClick(Menu.link);
              }}
            >
              <img src={`${Menu.src}`} />
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