import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Children from 'react-children-utilities';
import { Avatar } from '@mui/material';
import PT from '../pages/PT';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { fetchData,Course } from '../api';




const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const token = localStorage.getItem('accessToken');
    const [data, setData] = useState<Course[]>([]);

    useEffect(() => {
        const getData = async () => {
        const result = await fetchData();
        setData(result);
        };
        getData();
    }, []);


    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        /*
        localStorage.removeItem('enrolledCourseIds');
        localStorage.removeItem('completeCourseIds');
         */



        navigate('/');
    };
    

    return (
        <>
            <div className='appbar'>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
                <div className='navbar'>
                    <div className='logo'>
                        <a href='/'>
                            <h1 id='logo'>DEV</h1>
                            <p id='text-logo'>SCHOOL</p>
                        </a>
                    </div>
                    <ul className='links'>
                        <li><a href='/profile'>Profile</a></li>
                        <li><a>Courses</a>
                            <ul className='links-sub'>
                                {data.map(course => (
                                    <li key={course.id}>
                                        <a href={`ID${course.id}`}>{course.name}</a>
                                    </li>                        
                                    ))}
                                <li><a href='/Courses'>All Course</a></li>
                                
                                
                            </ul>
                        </li>
                        <li><a href='/contact'>Contact</a></li>
                    </ul>
                    
                    {token ? (
                        <div className='avatar' >
                            <React.Fragment>
                                <Box >
                                
                                    <Tooltip title="Account settings">
                                    <IconButton
                                        onClick={handleClick}
                                        size="small"
                                        sx={{ ml: 2 }}
                                        aria-controls={open ? 'account-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                    >
                                        <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                                    </IconButton>
                                    </Tooltip>
                                </Box>
                                <Menu
                                    anchorEl={anchorEl}
                                    id="account-menu"
                                    open={open}
                                    onClose={handleClose}
                                    onClick={handleClose}
                                    PaperProps={{
                                    elevation: 0,
                                    sx: {
                                        overflow: 'visible',
                                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                        mt: 1.5,
                                        '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                        },
                                        '&::before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                        },
                                    },
                                    }}
                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                >
                                    <MenuItem onClick={handleClose}>
                                    <Avatar /> Profile
                                    </MenuItem>
                                    <Divider />
                                    
                                    
                                    <MenuItem onClick={handleClose}>
                                    <ListItemIcon>
                                        <Logout fontSize="small" />
                                    </ListItemIcon>
                                    <a onClick={handleLogout}>Logout</a>
                                    </MenuItem>
                                </Menu>
                            </React.Fragment>

                            
                        </div>
                    ) : (
                        <a className='SignIn-btn' href='/login'>Sign in</a>
                    )}

                    <div className='toggle-btn' onClick={toggleMenu}>
                        <span className="material-symbols-outlined">{`${menuOpen ? 'close' : 'menu'}`}</span>
                    </div>
                </div>

                <div className={`dropdown_menu ${menuOpen ? 'open' : ''}`}>
                    <ul className='links'>
                        <li>{token ? (
                            <Avatar>M</Avatar>

                        ) : (
                            <></>
                        )}</li>
                        <li><a href='/profile'>Profile</a></li>
                        <li><a href='/Courses'>Courses</a></li>
                        <li><a href='/contact'>Contact</a></li>
                        <li>{token ? (
                            <button className='Logout-btn' onClick={handleLogout}>Logout</button>
                            
                                
                            
                        ) : (
                            <a className='SignIn-btn' href='/login'>Sign in</a>
                        )}</li>
                        
                    </ul>
                </div>
            </div>
        </>
    );
};

export default NavBar;
