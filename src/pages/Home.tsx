import React from 'react'
import CategoryButton from '../components/CategoryButton'
import NavBar from '../components/NavBar'
import MyComponent from '../components/Mycomponent'
import { useState,useEffect } from 'react'
import Footer from '../components/Footer'
import '/src/Home.css'
import { fetchData,Course } from '../api';
import Carousel from '../components/Carousel'
import YourCourese from '../components/YourCourese'



const Home = () => {
  const [data, setData] = useState<Course[]>([]);
  const token = localStorage.getItem('accessToken');
  const enrolledCourseIds = localStorage.getItem('enrolledCourseIds');


    useEffect(() => {
        const getData = async () => {
        const result = await fetchData();
        setData(result);
        };
        getData();
    }, []);

  console.log(data)
  return (
    <>
      <header><NavBar /></header>
      
      <div>
        <Carousel />
      </div>
      {enrolledCourseIds ? (
        <>
          <div className='header-yourcourse'>
            <div className='line'></div>
            <br></br>
            <h1>Your Courses</h1>
            <p>Registered Courses.</p>
            <br></br>
            <div className='line'></div>

            
          </div>
          <div><YourCourese></YourCourese></div>
        </>
      ):(
        <>
        </>
      )
      }

      <div className='container-getstart'>
        <div className='getstart-header'>
          <div className='line'></div>
          <br></br>
          <h1>Recommended Courses</h1>
          <br></br>
          <div className='line'></div> 
           

        </div>
        

        <div>
          <br></br>
          {token ? (
                              <></>

                          ) : (
                            <a className='getstart-btn' href='/login'>Get Started</a>

                          )}
        </div>
        <br></br>
        <div>
          <div className='container-getstart-course'>
            {data.map(course => (
                      <a href={`ID${course.id}`}>
                      <div key={course.id} className='course'>
                          

                        <div className='head-course'>

                          <h3 >{course.name}</h3>
                        </div>
                        <div className='description'>
                          <p>{course.description}</p>
                        </div>
                        <br></br>

                        <div className='course-logo'>
                          <img src={`/src/images/course${course.id}.webp`} alt={`Course ${course.id}`} />


                        </div>
                        <br></br>

                        <button className='new-btn'>New</button>

                          
                      </div></a>                       ))}
            
          </div>
        </div>

      </div>
      <Footer></Footer>

    </>

    
  )
}

export default Home