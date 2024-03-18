import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import YourCourses from '../components/YourCourese';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Avatar,TextField } from '@mui/material';






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
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" ></script>

            
            <div className='profile-container'>
                <div className='menubar-profile'>
                    <br></br>
                    <div className='avatar-profile'>
                        <Avatar>M</Avatar>
                        <br></br>
                        <p><b>Suphanat Panyakom</b></p>
                        <br></br>
                    </div>
                    <div className='choose'>

                            <List >
                                <Divider component="li" />
                                <ListItem className='menu'>
                                    <a >Profile</a>
                                </ListItem>
                                <Divider component="li" />
                                <ListItem className='menu'>

                                    <a>Registered Courses</a>
                                </ListItem>
                                <Divider component="li" />
                                <ListItem className='menu'>

                                    <a>Personal Information</a>
                                </ListItem>
                                <Divider component="li" />

                            </List>

                    </div>

                    
                </div>
                <div className='menu-content'>
                    <div className='profile'>
                        <h3>Profile</h3>
                        <TextField
                        disabled
                        id="email"
                        label="Email"
                        defaultValue="suphanat.pruek@gmail.com"
                        />
                    </div>
                    <div className='ProfileYourCourese'>
                        <h3>Registered Courses</h3>
                        <YourCourses></YourCourses>
                    </div>
                    <div className='prosonalInformation'>
                        <div className='head'>
                            <h3>Prosonal Information</h3>
                        </div>
                        <div className='prosonalInformation-content'>


                            <TextField
                            disabled
                            id="email"
                            label="Name"
                            defaultValue="Suphanat Panyakom"
                            />
                            <TextField
                            disabled
                            id="email"
                            label="Phone number"
                            defaultValue="0986699033"
                            />
                            <TextField
                            disabled
                            id="birthdate"
                            label="Birthdate"
                            defaultValue="1997-05-09"
                            />
                        </div>


                                                

   
                        
                    </div>


                    </div>
            </div>
                    

                

            

            
        </>
            
      
    );
};

export default Profile;
