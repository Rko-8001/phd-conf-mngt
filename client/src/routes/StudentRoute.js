import React, { useEffect } from 'react'
import { getUserToken } from '../components_login/Tokens';
import { useNavigate } from 'react-router-dom';

function StudentRoute({ Component }) {

    const navigate = useNavigate();
    useEffect(() => {
        const token = getUserToken();
        if (!token)
            navigate('/error');
    }, []);

    return (
        <>
            {Component}
        </>
    )
}

export default StudentRoute