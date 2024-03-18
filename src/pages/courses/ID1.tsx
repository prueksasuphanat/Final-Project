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


const ID1 = () => {
  const [data, setData] = useState<Course[]>([]);
  const [videoUrl, setVideoUrl] = useState('');
  const token = localStorage.getItem('accessToken');
  const [enrolledCourses, setEnrolledCourses] = useState<number[]>([]);
  const [CompleteCourses, setCompleteCourses] = useState<number[]>([]);

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData();
      setData(result);
    };

    const enrolledCourseIds = localStorage.getItem('enrolledCourseIds');
    const enrolledCourseIdsArray = enrolledCourseIds ? JSON.parse(enrolledCourseIds) : [];
    setEnrolledCourses(enrolledCourseIdsArray);

    const completeCourseIds = localStorage.getItem('completeCourseIds');
    const completeCourseIdsArray = completeCourseIds ? JSON.parse(completeCourseIds) : [];
    setCompleteCourses(completeCourseIdsArray);
  
    getData();
  }, []);

  const enrollCourse = (courseId: number) => {
    const enrolledCourseIds = localStorage.getItem('enrolledCourseIds');
    const enrolledCourseIdsArray = enrolledCourseIds ? JSON.parse(enrolledCourseIds) : [];
    if (!enrolledCourseIdsArray.includes(courseId)) {
      console.log("Enroll course id:", courseId);
      setEnrolledCourses(prevCourses => [...prevCourses, courseId]);
      const updatedEnrolledCourseIds = [...enrolledCourseIdsArray, courseId];
      localStorage.setItem('enrolledCourseIds', JSON.stringify(updatedEnrolledCourseIds));
      console.log(updatedEnrolledCourseIds);
    }
  };

  const completeCourse = (courseId: number) =>{
    const completeCourseIds = localStorage.getItem('completeCourseIds');
    const completeCourseIdsArray = completeCourseIds ? JSON.parse(completeCourseIds) : [];
    if (!completeCourseIdsArray.includes(courseId)) {
      console.log("Complete course id:", courseId);
      setCompleteCourses(prevCourses => [...prevCourses, courseId]);
      const updatedcompleteCourseIds = [...completeCourseIdsArray, courseId];
      localStorage.setItem('completeCourseIds', JSON.stringify(updatedcompleteCourseIds));
      console.log(updatedcompleteCourseIds);
    }
  };



  


  const AlertEnroll = () => {
    alert("please enroll this course")

  }


  return (
    <>
    

      <header>
        <NavBar></NavBar>
      </header>

      <div className='course-container'>
        
        {data.filter(course => course.id === 1).map(course => ( 
          <>
            <div className='Headercourse'>
              <div className='Headercourse-text'>
                <h2>{course.name}</h2>
                {CompleteCourses.includes(course.id) ?(
                  <>
                    <div className='completecheck'>
                      <span className="material-symbols-outlined">check_circle</span>

                    </div>

                  </>
                ):(
                  <>
                  </>
                )
                  
                }
              </div>
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
                    {token ? (
                      <>
                        {enrolledCourses.includes(course.id) ? (
                          <div>
                            <a href='#' onClick={() => setVideoUrl('https://www.youtube-nocookie.com/embed/kqtD5dpn9C8?si=EwJXiaSLLb6cZiRi')}>Video</a><br></br>
                            <a href='#'>Quiz</a>
                          </div>
                        ) :(
                          <div>
                            <a href='#' onClick={AlertEnroll} >Video</a><br></br>
                            <a href='#' onClick={AlertEnroll} >Quiz</a><br></br>
                          </div>
                        )
                        }
                      </>
                          ) : (
                            <>
                              <div>
                                <a href='/login'>Video</a><br></br>
                                <a href='/login'>Quiz</a>
                              </div>
                            </>
                          )}
                    
                      
                      
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
            {token ? (
              <>
                {enrolledCourses.includes(course.id) ? null : (
                  <button className="Enroll-btn" onClick={() => enrollCourse(course.id)}>
                    Enroll
                  </button>
                )}
                    </>
                  ) : (
                    <>
                   
                    </>

                  )}

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
                  <div>
                  {token ? (
                      <>
                        {enrolledCourses.includes(course.id)  ?  (
                          <div>
                            {CompleteCourses.includes(course.id) ?(
                              <>
                              </>
                            ):(
                              <>
                                <button className='CompleteLesson-btn' onClick={() => completeCourse(course.id)}>
                                  <b>Click here to complete this lesson.</b>
                                </button>
                              </>
                            )
                            
                            }
                            
                          </div>
                        ) :(
                          
                          <b>(Please enroll for learn this course.)</b>
                        )
                        }
                      </>
                          ) : (
                            <>
                              <b>(Please login and enroll for learn this course.)</b>

                            </>
                          )}
                    
        

                  </div>
                  
            </div>

          </>  

        ))}
      </div>
      
      

      
      <div className='lesson-video'>
  
        {videoUrl && <iframe width="560" height="315" 
        src={videoUrl}></iframe>}
        
      </div>
     
      <Footer></Footer>

    </>
  )
}

export default ID1