import React, { useState, useEffect } from 'react';
import { fetchData,Course } from '../api';
import LogoWeb from './LogoWeb';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FacebookIcon from '@mui/icons-material/Facebook';
import './Footer.css';


const Footer = () => {
    const [data, setData] = useState<Course[]>([]);

    useEffect(() => {
        const getData = async () => {
        const result = await fetchData();
        setData(result);
        };
        getData();
    }, []);
  return (
    <footer>
        <div className='container-footer'>
            <div>
                <LogoWeb></LogoWeb>
                
            </div>
            <div>
                <h3>Courese</h3>
                <ul>
                    {data.map(course => (
                    <li key={course.id}>
                        <a href={`ID${course.id}`}>{course.name}</a>
                    </li>                        ))}
                </ul>
            </div>
            <div>
                <h3>Contact Us</h3>
                <div className='phone'>
                    <LocalPhoneIcon></LocalPhoneIcon>
                    <p>098-669-9033</p>
                </div>
                <div className='facebook'>
                    <FacebookIcon></FacebookIcon>
                    <p>Suphanat Panyakom</p>
                </div>
                
                <p>(Mon - Fri : 09.00 - 18.30 )</p>
            </div>
            
        </div>
    </footer>
  )
}

export default Footer