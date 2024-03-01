import React from 'react'
import NavBar from '../../components/NavBar'
import { useState,useEffect } from 'react'
import { fetchData,Course } from '../../api';
import '/src/pages/courses/course.css'
import Footer from '../../components/Footer';
import { Rating } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';










const ID3 = () => {
  const [data, setData] = useState<Course[]>([]);
  const [videoUrl, setVideoUrl] = useState('');


    useEffect(() => {
        const getData = async () => {
        const result = await fetchData();
        setData(result);
        };
        getData();
    }, []);
    
  return (
    <>
    

      <header>
        <NavBar></NavBar>
      </header>

      <div className='course-container'>
        
        {data.filter(course => course.id === 3).map(course => ( 
          <>
            <div className='Headercourse'>
              <h2 >{course.name}</h2>
              <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
              <div className='lesson'>
                  
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        <b>Lesson 01</b>
                      </Typography>
                      <Typography>Introduction</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <a href='#' onClick={() => setVideoUrl('https://www.youtube-nocookie.com/embed/kqtD5dpn9C8?si=EwJXiaSLLb6cZiRi')}>Video</a><br></br>
                      <a href='#'>Quiz</a>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2-content"
                      id="panel2-header"
                    >
                      <b>Lesson 02</b>
                    </AccordionSummary>
                    <AccordionDetails>
                      <a href='#'>Video</a><br></br>
                      <a href='#'>Quiz</a>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel3-content"
                      id="panel3-header"
                    >
                      <b>Lesson 03</b>
                    </AccordionSummary>
                    <AccordionDetails>
                      <a href='#'>Video</a><br></br>
                      <a href='#'>Quiz</a>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel4-content"
                      id="panel4-header"
                    >
                      <b>Lesson 04</b>
                    </AccordionSummary>
                    <AccordionDetails>
                      <a href='#'>Video</a><br></br>
                      <a href='#'>Quiz</a>
                    </AccordionDetails>
                  </Accordion>
                  
                  <Accordion >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel5-content"
                      id="panel5-header"
                    >
                      <Typography sx={{ width: '33%', flexShrink: 0 }}>
                      <b>Lesson 05</b>
                      </Typography>
                      <Typography>Final</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <a href='#'>Video</a><br></br>
                      <a href='#'>Quiz</a>
                    </AccordionDetails>
                    
                  </Accordion>

              </div>
            </div>
            
              
            
                
                
                
            <div className='course-description'>
                  <button className='Enroll-btn'>Enroll</button>
                  <br></br>

                  <div>
                    <p>{course.description}</p>
                  </div>
                  <br></br>
                  <p><b>Catagories : </b>{course.category}</p>
                  <p><b>Software : </b></p>
                  <div className='software-container'>
                    <img src='/src/images/vscodelogo.webp'></img>
                    <p><b>VS code</b></p>
                  </div>
                  
            </div>

          </>  

        ))}
      </div>
      <div className='lesson-video'>
        {videoUrl && <iframe width="560" height="315" 
        src={videoUrl}></iframe>}
        <button className='CompleteLesson-btn' ><b>Click here to complete this lesson.</b></button>
      </div>
     
      <Footer></Footer>

    </>
  )
}

export default ID3