import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import img from './images/iitrpr.jpeg';
import { setUserToken, setroleToken } from './Tokens';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../components/requests/URL';
import { delay } from '../components/loading/Delay';
import Alert from '../components/alerts/Alert';

function Login() {

    const navigate = useNavigate();


    //                      States Maintained
    const [emailId, setEmailId] = useState("");
    const [otpLogin, setOtp] = useState("");

    const [optButtonMssg, setOtpButtonMssg] = useState("Request Otp");
    const [optButton, setOtpButton] = useState(false);
    const [otpMssg, setOtpMssg] = useState("");
    const [alertType, setAlertType] = useState("");

    const [loginButtonMssg, setLoginButtonMssg] = useState("Log In.");
    const [loginButton, setLoginButton] = useState(false);

    //                       Updating States Function
    const getEmailId = e => {
        setEmailId(e.target.value);
    }
    const getOtp = e => {
        setOtp(e.target.value);
    }

    //                      Post Function Maintained
    // request OTP
    const requestOtp = async (e) => {
        e.preventDefault();
        const mssg = "otp";
        const otp = otpLogin;
        const email = emailId;
        setOtpButtonMssg("Sending Otp...");
        const res = await fetch(`${BASE_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, mssg, otp })
        });

        if (res.status === 422 || res.status === 423) {
            setOtpMssg("Try Again..")
            setAlertType("danger");
            setOtpButton(true);

            delay(1000).then(() => {
                setEmailId("");
                setOtpButton(false);
                setOtpButtonMssg("Request Otp");

            }).catch((error) => {
                console.log(error);
            })
        }
        else {
            setOtpMssg("Otp Sent");
            setAlertType("success");
            setOtpButton(true);
        }
    }

    // login logic
    const requestLogIn = async (e) => {
        e.preventDefault();
        const mssg = "login";
        const email = emailId;
        const otp = otpLogin;

        setLoginButtonMssg("Logging In...")
        const res = await fetch(`${BASE_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, mssg, otp })
        });

        if (res.status === 422) {
            window.alert("Wrong OTP Entered!! Try Again..");
        }
        else if (res.status === 423) {
            window.alert("Invalid Creds");
            setEmailId("");
            setOtp("");
        }
        else {
            const data = await res.json();
            const role = data.role;
            const token = data.token;
            setUserToken(token);
            setroleToken(role);
            if (role === "0") {
                navigate('/studentLogin');
            }
            else if (role === "1") {
                navigate('/facultyLogin');
            }
            else if (role === "2") {
                navigate('/hodLogin');
            }
            else if (role === "3") {
                navigate('/researchLogin');
            }
            else if (role === "4") {
                navigate('/accountLogin');
            }
            else if (role === "5") {
                navigate('/deanLogin');
            }
            else {
            }
        }
        setLoginButtonMssg("Log In.")
    }



    return (
        <>

            <nav className="bg-gray-800 text-white flex justify-between items-center py-3 px-5">
                <h1 className="text-xl font-bold">PhDCGM :: PhD Conference Grant Management Portal</h1>
                <div className="flex items-center space-x-5 text-xs">
                    <ul className="flex space-x-10 text-gray-300">
                        <li key={2}>
                            <Link to="/">Home</Link>
                        </li>
                        <li key={1}>
                            <Link to="/meetTheTeam">Team</Link>
                        </li>
                        <li key={4}>
                            <Link to="/userGuide">User Guide </Link>
                        </li>
                        <li key={3}>
                            <Link to="/contactUs">Contact Us</Link>
                        </li>
                    </ul>
                    <div className="space-x-5">
                        <button onClick={(e) => {
                            e.preventDefault();
                            navigate('/login');
                        }} className="border px-5 py-2 rounded font-bold">Login</button>
                    </div>
                </div>
            </nav>


            <section className="bg-gray-50 min-h-screen flex items-center justify-center">
                <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
                    <div className="md:w-1/2 px-8 md:px-16">
                        <h2 className="font-bold text-2xl text-[#002D74]">Login with PhDCGM credentials</h2>
                        <p className="text-xs mt-4 text-[#002D74]">Please enter your email and OTP to Log In</p>

                        <form action="" className="flex flex-col gap-4">
                            <input className="p-2 mt-8 rounded-xl border" type="email" name="email" placeholder="Email" onChange={getEmailId} />
                            {optButton
                                ?
                                <Alert mssg={otpMssg} type={alertType} />
                                :
                                <button className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300 " onClick={requestOtp}>{optButtonMssg}</button>
                            }

                            <div className="relative">
                                <input className="p-2 rounded-xl border w-full" name="password" placeholder="OTP" onChange={getOtp} />
                            </div>
                            <button className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300" onClick={requestLogIn}>{loginButtonMssg}</button>
                        </form>

                        {/* <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
                            <hr className="border-gray-400" />
                            <p className="text-center text-sm">OR</p>
                            <hr className="border-gray-400" />
                        </div> */}

                        {/* <button
                            onClick={async (e) => {
                                e.preventDefault();
                                const res = await fetch(`${BASE_URL}/auth`, {
                                    method: "GET",
                                    headers: {
                                        'Accept': 'application/json',
                                        'Access-Control-Allow-Origin': '*',
                                        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
                                        'Access-Control-Request-Method': 'GET'
                                    }
                                });
                                console.log(res);
                            }}
                            className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]"
                        >
                            <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="25px">
                                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                                <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                                <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                            </svg>
                            Login With Google
                        </button> */}

                        {/* <div className="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]">
        <a href="#">Forgot your password?</a>
      </div> */}

                        {/* <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
        <p>Don't have an account?</p>
        <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">Register</button>
      </div> */}
                    </div>

                    {/* <!-- image --> */}
                    <div className="md:block hidden w-1/2">
                        <img className="rounded-2xl" src={img} alt='iitrpr pic' />
                    </div>
                </div>
            </section>
        </>
    )

}

export default Login