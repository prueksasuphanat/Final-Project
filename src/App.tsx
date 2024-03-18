import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Nav-bar.css'

import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Form from './pages/Form';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage'
import Profile from './pages/Profile'
import PT from './pages/PT'
import ID1 from './pages/courses/ID1'
import ID2 from './pages/courses/ID2'
import ID3 from './pages/courses/ID3'
import ID4 from './pages/courses/ID4'
import AllCourse from './pages/AllCourse'
import Contact from './pages/Contact'






function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/form" element={<Form/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/contact' element={<Contact/>}/>


        /* Courses */
        <Route path = '/Courses' element={<AllCourse/>}/>
        <Route path='/ID1' element={<ID1/>}/>
        <Route path='/ID2' element={<ID2/>}/>
        <Route path='/ID3' element={<ID3/>}/>
        <Route path='/ID4' element={<ID4/>}/>




      </Routes>
      
    


    </>
  )
}

export default App
