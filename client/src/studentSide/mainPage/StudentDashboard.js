import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, ListGroup, ProgressBar } from 'react-bootstrap';
import Carousel from './Carousal';
import "./Home.css";
const StudentDashboard = (props) => {
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
      const email = props.studentEmail;
      console.log(email);
      const role = 0;
      const resp = await fetch("/studentInfoLoading", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, role })
      });
      return resp.json();
      // console.log(resp);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getBasicInfo().then((resp) => {
      console.log(resp);
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
  const here = () => {
    alert("here");
    
  };

  return (
    <div className="student-dashboard">
      <Carousel />
      <Container>
        {/* <br/> */}
        {/* <Bar /> */}
        <Row>
          <Col xs={12} md={6}>

            <Card>
              <Card.Header style={{ "fontSize": "24px" }}>Student Details</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <strong>Name:</strong> {generalInfo.name}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Email:</strong> {props.studentEmail}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Entry No:</strong> {generalInfo.entryNo}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Department:</strong> {generalInfo.dept}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Date of Joining:</strong> {generalInfo.doj}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Fellowship Category:</strong> {generalInfo.fellowshipCat}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Area Of Specialisation:</strong> {generalInfo.aos}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Name Of Supervisor:</strong> {generalInfo.supervisor}
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card>
            <div className="items-center justify-center flex flex-col space-y-6 w-full py-2 px-2">
      <div className="flex w-full items-center justify-between">
        <h1 className="font-bold text-3xl"> Your previous bills </h1>
        <div className="py-2 px-2 bg-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 cursor-pointer rotate-[-45deg]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </div>
      </div>
      <div className="gap-x-4 items-center justify-center grid grid-cols-3 w-full">
        {/* {Data_bills.map(({ color, id, title, price, icon }) => (
          <div
            className={`${color} pb-6 pt-6 rounded-md px-3 w-full flex flex-col items-start justify-start`}
          >
            <div
              className={`pt-2 ${
                title === "Tinder Gold"
                  ? "bg-gray-100 rounded-full pb-2 px-2 mb-2"
                  : ""
              } `}
            >
              {icon}
            </div>
            <h1
              className={` text-md pb-6 pt-2 ${
                id === 2 ? "text-gray-100" : "text-black"
              } `}
            >
              {" "}
              {title}{" "}
            </h1>
            <h1
              className={`font-bold text-xl ${
                id === 2 ? "text-gray-100" : "text-black"
              } `}
            >
              {" "}
              {price} ${" "}
            </h1>
            <p
              className={` text-sm ${
                id === 2 ? "text-gray-100/50" : "text-gray-600"
              } `}
            >
              /Month
            </p>
          </div>
        ))} */}
      </div>

      <div className="flex w-full bg-gray-100 rounded-md px-3 py-4 items-start justify-start space-x-6">
        <div className="bg-black rounded-full py-2 px-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 fill-gray-100"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z"
            />
          </svg>
        </div>
        <div className="flex flex-col items-start space-y-4 justify-start w-full">
          <h1>You have 5,250 $ remaining funds over the next 15 days</h1>
          <p>Please check the complete info here</p>
          <div className="flex items-start text-[#3C45A0] font-medium space-x-4 w-full justify-start">

            <button onClick={here}> View Details </button>
            <h1> {">"}</h1>
          </div>
        </div>
      </div>
    </div>
            </Card>
          </Col>
        </Row>
      </Container>

      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default StudentDashboard;