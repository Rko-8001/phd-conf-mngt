import React, { useState, useEffect } from 'react'
import LoaderContent from '../../components/loading/LoaderContent';
import FacultyUser from './FacultyUser';


export default function ResearchFaculty() {
    
    const [faculty, setFaculty] = useState();
    const [isLoadingHome, setIsLoadingHome] = useState(true);

    const getUserInfo = async (req, res) => {
        try {
            const resp = await fetch("/viewUsers", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            return resp.json();
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getUserInfo().then((resp) => {
            setFaculty(resp.facultyUser);
            setIsLoadingHome(false);
        }).catch((error) => {
            console.log(error);
        })
    }, []);

    return (
        <>
            {isLoadingHome
                ?
                <LoaderContent />
                :
                <>
                    <FacultyUser users={faculty} />
                </>
            }
        </>
    )
}
