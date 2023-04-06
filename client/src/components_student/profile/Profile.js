import { Container } from '@mui/material'
import NavBar from '../studentNav/NavBar';
import { useState, useEffect} from 'react';
import { getUserToken } from '../../components_login/Tokens';

export default function Profile() {

    const [generalInfo, setGeneralInfo] = useState({
        name: "",
        dept: "",
        email: "",
        entryNo: "",
        doj: "",
        fellowshipCat: "",
        aos: "",
        supervisor: ""
      });
      const getGeneralInfo = ((e) => {
        const { name, value } = e.target;
        // console.log(name + " " + value);
        setGeneralInfo(prevState => ({
          ...prevState,
          [name]: value
        }));
      });
    
      const setFetchData = ((name, value) => {
        setGeneralInfo(prevState => ({
          ...prevState,
          [name]: value
        }));
      })
      const getBasicInfo = async (req, res) => {
        try {
          const token = getUserToken();
          // console.log(token);
          const resp = await fetch("/studentInfoLoading", {
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
          // console.log(resp);
          setFetchData("name", resp.name);
          setFetchData("entryNo", resp.entryNo);
          setFetchData("dept", resp.department);
          setFetchData("doj", resp.dateOfJoining);
          setFetchData("fellowshipCat", resp.fellowshipCategory);
          setFetchData("aos", resp.areaOfSpecialisation);
          setFetchData("supervisor", resp.nameOfSupervisor);
          setFetchData("email", resp.email);
        }).catch((e) => {
          console.log(e.message)
        });
      }, []);
    
    return (
        <>
            <NavBar/>
            <Container>
                <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-base font-semibold leading-6 text-gray-900">Personal Information</h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">Please inform if any discrepancy</p>
                    </div>
                    <div className="border-t border-gray-200">
                        <dl>
                            <div className="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Full name</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{generalInfo.name}</dd>
                            </div>
                            <div className="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Entry Number</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{generalInfo.entryNo}</dd>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Email</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{generalInfo.email}</dd>
                            </div>
                            <div className="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Department</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{generalInfo.dept}</dd>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Date of Joining</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{generalInfo.doj}</dd>
                            </div>
                            <div className="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Fellowship Category</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{generalInfo.fellowshipCat}</dd>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Area of Specialisation</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{generalInfo.aos}</dd>
                            </div>
                            <div className="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Name of Supervisor</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{generalInfo.supervisor}</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </Container>

        </>
    )
}
