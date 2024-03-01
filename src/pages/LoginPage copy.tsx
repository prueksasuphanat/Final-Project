import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import LogoWeb from '../components/LogoWeb';
import NavBar from '../components/NavBar';
import './LoginPage.css';

const LoginPage = () => {
    const [inputs, setInputs] = useState<{ username: string; password: string }>({ username: '', password: '' });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
        
    }
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
        "username": inputs.username,
        "password": inputs.password,
        "expiresIn": 60000
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            
        };

        fetch("https://www.melivecode.com/api/login", requestOptions)
        .then((response) => response.json())
        .then((result) => {
            console.log(result)
        })
        .catch((error) => console.error(error));
                console.log(inputs);
            }
            

    return (
        <>
            <header><NavBar/></header>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,300,0,-25" />
            <form onSubmit={handleSubmit}>
                <div className='wrap'>
                    <div className='container'>
                        <LogoWeb />
                        <div className='input-box '>
                            <input required placeholder='username' type="text" name="username" value={inputs.username || ""} onChange={handleChange}/>
                            <span className="icon person material-symbols-outlined">person</span>
                        </div>
                        <div className='input-box'>
                            <input required placeholder='password' type="password" name="password" value={inputs.password || ""} onChange={handleChange} />
                            <span className="icon material-symbols-outlined">lock</span>
                        </div>
                        <div className='login-btn'>
                            <button type="submit" className='SignIn-btn'>Sign in</button>
                            <button type="button" className='SignUp-btn'>Sign up</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default LoginPage;
