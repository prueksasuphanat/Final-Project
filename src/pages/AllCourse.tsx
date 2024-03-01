import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { useState,useEffect } from 'react'
import { fetchData,Course } from '../api';
import '/src/pages/courses/course.css'


function AllCourse() {
  const [data, setData] = useState<Course[]>([]);

    useEffect(() => {
        const getData = async () => {
        const result = await fetchData();
        setData(result);
        };
        getData();
    }, []);

  return (
    <>
      <header><NavBar></NavBar></header>
      <div>
        Search
      </div>
      <div>
        Course List
      </div>
      <div className='card-wrapper'>
        {data.map(course => ( 
          
            
          <div className='card'>
            <div className='image-content'>
              <img src='/src/images/bg1.jpg'></img>
              
              
            </div>
            <div className='card-content'>
              <div><h2 className='name'>{course.name}</h2></div>
              
              <p className='description'>{course.description}</p>
              
              <div><a href={`ID${course.id}`} className='view-btn'>View more<span className="material-symbols-outlined">start</span></a></div>
              
            </div>
            

          </div>

        ))}
        
      </div>
      
      <Footer></Footer>

    </>
  )
}

export default AllCourse