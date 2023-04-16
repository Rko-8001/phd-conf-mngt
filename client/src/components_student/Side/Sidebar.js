import React, { useState, useEffect } from 'react'
import img1 from './assets/logo.png';
import img2 from './assets/control.png'
import Chart_fill from './assets/Chart_fill.png'
import Chat from './assets/Chart.png';
import Calendar from './assets/Calendar.png';
import Search from './assets/Search.png';
import Chart from './assets/Chart.png';
import Folder from './assets/Folder.png';
import User from './assets/User.png';
import { getUserToken, removeAppToken, removeUserToken } from '../../components_login/Tokens';
import { useNavigate, Link} from 'react-router-dom';

const App = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: Chart_fill,link: "/researchLogin"},
    { title: "TBD", src: Chat,link:'/' },
    { title: "Applications", src: User, gap: true,link:"/researchLogin/application" },
    { title: "Students ", src: Calendar,link:"/researchLogin/student" },
    { title: "Faculty", src: Search,link:"/researchLogin/faculty" },
    { title: "User Guide", src: Chart,link:"/researchLogin" },
    { title: "Logout ", src: Folder, gap: true,link:"/researchLogout" },
  ];
  const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const logout = (e) => {
        e.preventDefault();
        removeAppToken();
        removeUserToken();
        navigate("/");
    }
    
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
    <div className="flex h-full">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } text-black bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src={img2}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src={img1}
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            PHDmgmt
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
    
            <Link to={Menu.link} className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
            <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-white text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <img src={Menu.src} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
            </Link>
          ))}
        </ul>
      </div>
      {/* <div className="w-100">
        <Newcomp/>
      </div> */}
      
    </div>
  );
};
export default App;