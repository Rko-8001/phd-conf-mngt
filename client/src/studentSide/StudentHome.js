import React from 'react'
import NavBar from './NavBar'

function Home(props) {

    return (
        <>
            <NavBar emailNav={props.studentEmail}/>
            <h1>Welcome to Phd Confernce Management Website by Team-12</h1>
        </>
    )
}

export default Home