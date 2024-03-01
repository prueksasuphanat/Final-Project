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
      <div><YourCourese></YourCourese></div>
      <div>All Courese</div>
      <div className='container-getstart'>
        <h2>Recommended Courses</h2>
        <br></br>
        <div><a className='getstart-btn' href='/login'>Get Started</a></div>
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