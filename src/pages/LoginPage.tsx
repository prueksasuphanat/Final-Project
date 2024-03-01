import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoWeb from '../components/LogoWeb';
import NavBar from '../components/NavBar';
import './LoginPage.css';
import { TextField } from '@mui/material';

const LoginPage = () => {
    const [inputs, setInputs] = useState<{ username: string; password: string }>({ username: '', password: '' });
    const [message, setMessage] = useState<string>('');
    const navigate = useNavigate();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setInputs(prevState => ({ ...prevState, [name]: value }));
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (inputs.username === 'user' && inputs.password === '1111') {
            const mockAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imthcm4ueW9uZ0BtZWxpdmVjb2RlLmNvbSIsImlhdCI6MTY0NDY3MDMwNCwiZXhwIjoxNjQ0NjcyMzA0fQ.qXAPsWtwBHrXtuNzX6nLy7vU5aOq-L90cVSHcVth3uA';
            setMessage('Logged in');
            navigate('/profile');
            localStorage.setItem('accessToken', mockAccessToken);
        } else {
            setMessage('Login failed');
            navigate('/login');
        }
    }

    return (
        <>
            <header><NavBar/></header>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,300,0,-25" />
            <form onSubmit={handleSubmit}>
                <div className='wrap'>
                    <div className='container'>
                        <LogoWeb />
                        <div className='input-box'>
                            <TextField id="outlined-basic" label="Username" variant="outlined" type="text" name="username" value={inputs.username} onChange={handleChange}  />
                            <TextField id="outlined-basic" label="Password" variant="outlined" type="password" name="password" value={inputs.password} onChange={handleChange} />

                        </div>

                        <div className='login-btn'>
                            <button type="submit" className='SignIn-btn'>Sign in</button>
                            <button type="button" className='SignUp-btn'>Sign up</button>
                        </div>
                        {message && <p className="message">{message}</p>}
                    </div>
                </div>
            </form>
        </>
    );
};

export default LoginPage;
