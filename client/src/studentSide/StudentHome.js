import React from 'react'
import StudentDashboard from './mainPage/StudentDashboard';
import NavBar from './NavBar';
import { Container} from 'react-bootstrap';
import Bar from "./mainPage/Bar";
function Home(props) {

    return (
        <>
            <NavBar emailNav={props.studentEmail} />
            <Container>
                <br/>
                <Bar studentEmail={props.studentEmail} />
            </Container>
        </>
    )
}

export default Home