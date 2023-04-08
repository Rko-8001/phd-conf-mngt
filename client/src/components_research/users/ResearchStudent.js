import React, { useState, useEffect } from 'react'
import ResearchNav from '../researchNav/ResearchNav'
import LoaderContent from '../../components/loading/LoaderContent';
import StudentUser from './StudentUser';
import FacultyUser from './FacultyUser';

export default function ResearchStudent() {
    const [student, setStudent] = useState();

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
            setStudent(resp.studentUser);
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
                    <StudentUser users={student} />
                </>
            }
        </>
    )
}
