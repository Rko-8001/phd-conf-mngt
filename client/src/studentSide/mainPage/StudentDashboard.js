import React, {useState, useEffect} from 'react';
import { Container, Row, Col, Card, ListGroup, ProgressBar } from 'react-bootstrap';

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
                body: JSON.stringify({email, role})
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

  return (
    <Container>
        {/* <br/> */}
        {/* <Bar /> */}
          <Card>
            <Card.Header style={{"fontSize": "24px"}}>Student Details</Card.Header>
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
        
    </Container>
  );
};

export default StudentDashboard;