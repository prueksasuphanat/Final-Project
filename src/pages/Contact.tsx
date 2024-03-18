import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import { SocialIcon } from 'react-social-icons'



const Contact = () => {
  return (
    <>
      
      <header><NavBar /></header>
      <div className='contact-container'>
        <div className='content'>

          <h1 className='head'>Suphanat Panyakom👋🏻</h1>
          <b><p className='description'>Master degree of industrial engineering</p></b>

          <br></br>
          <p className="">I live in Chiang Mai province and I'm interested in front-end developer jobs.</p>

          <div className='LinkIcon'>
            <SocialIcon url="www.facebook.com" />
            <SocialIcon url="https://www.linkedin.com/in/suphanat-panyakom-1483522bb" />
            <SocialIcon url="www.instagram.com" />

          </div>






        </div>
        <div className='contact-img'></div>
        
        
      </div>
      <Footer></Footer>

    </>


  )
}

export default Contact