import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';


const Profile = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if (!token) {
            navigate('/login');
        } 
        
    }, [navigate]);

    return (
        <>
            <header><NavBar></NavBar></header>
            
            <div className='container'>
                <h1>Profile</h1>
                

            </div>

            

            
        </>
            
      
    );
};

export default Profile;
