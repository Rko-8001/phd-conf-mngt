import React, { useState, useEffect } from 'react'
import { getUserToken, setAppToken } from '../../components_login/Tokens';
import { Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LoaderCard from '../../components/loading/LoaderCard';
import { delay } from '../../components/loading/Delay';
import { BASE_URL } from '../../components/requests/URL';
import { FaSort } from 'react-icons/fa';

const data = [];

function Application() {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const [apps, setApps] = useState(data);
  const [apps2, setApps2] = useState(data);
  const [st, setSt] = useState(1);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  // const filteredData = Object.keys(data1).reduce((acc, key) => {
  //   if (data1[key].name.toLowerCase().includes(searchQuery.toLowerCase())) {
  //     acc[key] = data1[key];
  //   }
  //   return acc;
  // }, {});

  function handleSearchInputChange(event) {
    setSearchQuery(event.target.value);
  }

  const tabs = [
    { label: 'Time', content: 'Applications are being displayed based on Time of the conference.' },
    { label: 'Name', content: 'Applications are being displayed based on Name of the conference.' },
    { label: 'Place', content: 'Applications are being displayed based on Place of the conference.' },
  ];
  function handleTabClick(index) {
    setActiveTabIndex(index);
    if (index === 0) {
      apps.sort((a, b) => a.conferenceStarts.localeCompare(b.conferenceStarts));
    }
    else if (index === 1) {
      apps.sort((a, b) => a.nameOfConference.localeCompare(b.nameOfConference));
    }
    else if (index === 2) {
      apps.sort((a, b) => a.venueOfConference.localeCompare(b.venueOfConference));
    }
  }
  // unsorted
  const handleChange = () => {
    console.log("clicked")
    if (st === 1) {
      // sorted
      setSt(2);
    }
    else {
      setSt(1);
    }
    console.log(apps);
    apps.sort((a, b) => a.nameOfConference.localeCompare(b.nameOfConference));
    console.log(apps);
  }

  const getBasicInfo = async (req, res) => {
    try {
      const token = getUserToken();
      const resp = await fetch(`${BASE_URL}/studentApplicationView`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "authorization": `Bearer ${token}`
        },
      });
      const data = await resp.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getBasicInfo().then((resp) => {
      setApps(resp);
      setApps2(resp);
      apps2.sort((a, b) => a.nameOfConference.localeCompare(b.nameOfConference));


      setIsLoading(false);



    }).catch((e) => {
      console.log(e.message)
    });
  }, []);

  const getStatus = (code) => {
    if (code === "0")
      return "Pending Faculty Approval";
    else if (code === "1")
      return "Pending Hod Section Approval";
    else if (code === "2")
      return "Pending Research Section Approval";
    else if (code === "3")
      return "Pending Account Section Approval";
    else if (code === "4")
      return "Pending Dean Approval";
    else
      return "Application Approved";
  }

  const getDays = (subDate) => {
    const today = new Date();
    const submitDate = new Date(subDate);

    const days = Math.floor((today - submitDate) / (1000 * 3600 * 24));

    if (days < 1)
      return "Submitted Recently";
    else if (days === 1)
      return ("1 Day Ago");
    else
      return (days + " Days ago");

  }

  const getFinances = (finance) => {
    var totalAmount = 0;

    finance.forEach(element => {
      totalAmount = totalAmount + Number(element.amount);
    });
    return totalAmount;
  }

  const createAppToken = async (id) => {
    try {
      const aisehi = "abcd";
      const resp = await fetch(`${BASE_URL}/createApplicationToken`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ id, aisehi })
      });
      const data = await resp.json();
      const appToken = data.appToken;
      setAppToken(appToken);

    } catch (error) {
      console.log(error);
    }
  }

  const viewSpecficApplication = async (e) => {
    e.preventDefault();
    const { name } = e.target;
    try {
      await createAppToken(name);
      navigate('/studentLogin/viewApplication');

    } catch (error) {
      console.log(error);
    }

  }

  const renderApps1 = apps.map((item, index) =>
    <>
      <div key={index}>
        <div className="block max-w-md  rounded-lg  bg-white text-center shadow-lg dark:bg-neutral-700">
          <div className="border-b-2 border-neutral-100 px-6 py-3 dark:border-gray-600 dark:text-neutral-50">
            {getStatus(item.status)}
          </div>
          <div className="p-4">
            <h5
              className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              {item.nameOfConference}
            </h5>


            <p className="mb-1 text-base text-neutral-600 dark:text-neutral-200">
              Amount Needed: {getFinances(item.finances)} Rs
            </p>
            <p className="mb-1 text-base text-neutral-600 dark:text-neutral-200">
              Venue: {item.venueOfConference}
            </p>
          </div>
          <button
            name={item._id}
            onClick={viewSpecficApplication}
            className="rounded-md bg-indigo-600 px-3 py-2 mb-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            View Full Application
          </button>
          <div
            className="border-t-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
            {getDays(item.createdAt)} ({item.type === 0 ? "National" : "International"})
          </div>
        </div>

      </div>

      <br />
    </>
  );
  const renderApps2 = apps2.map((item, index) =>
    <>
      <div key={index}>
        <div className="block max-w-md  rounded-lg  bg-white text-center shadow-lg dark:bg-neutral-700">
          <div className="border-b-2 border-neutral-100 px-6 py-3 dark:border-gray-600 dark:text-neutral-50">
            {getStatus(item.status)}
          </div>
          <div className="p-4">
            <h5
              className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              {item.nameOfConference}
            </h5>
            <p className="mb-1 text-base text-neutral-600 dark:text-neutral-200">
              Amount Needed: {getFinances(item.finances)} Rs
            </p>
            <p className="mb-1 text-base text-neutral-600 dark:text-neutral-200">
              Venue: {item.venueOfConference}
            </p>
          </div>
          <button
            name={item._id}
            onClick={viewSpecficApplication}
            className="rounded-md bg-indigo-600 px-3 py-2 mb-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Vew Full Application
          </button>
          <div
            className="border-t-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
            {getDays(item.createdAt)}
          </div>
        </div>

      </div>

      <br />
    </>
  );

  return (

    <>
      <br />
      {isLoading ?
        <Container>
          <LoaderCard />
        </Container>
        :
        <Container>
          <div className="my-5  bg-white rounded-lg shadow-md overflow-hidden">
            <div className="flex items-center justify-between bg-gray-100 px-4 py-2">
              <span style={{ display: 'flex', alignItems: 'center' }}>
                <FaSort color="red" style={{ marginRight: '0.5rem' }} />
                <span className='text-lg font-medium'>Sort Applications on the basis of: </span>
              </span>
              <div className="flex">
                {tabs.map((tab, index) => (
                  <button
                    key={tab.label}
                    className={`mx-2 py-1 px-4 rounded-lg font-medium ${index === activeTabIndex ? 'bg-gray-400 text-white' : 'bg-gray-200 text-gray-600'
                      }`}
                    onClick={() => handleTabClick(index)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="p-2">
            </div>
          </div>
          <div class="my-3 flex flex-wrap justify-center gap-4">
            {apps && renderApps1}

          </div>
        </Container>
      }


    </>
  )
}

export default Application