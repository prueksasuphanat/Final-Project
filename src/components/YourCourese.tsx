import React, { useState, useEffect } from 'react';
import { fetchData, Course } from '../api';

const YourCourses = () => {
  const [data, setData] = useState<Course[]>([]);
  const enrolledCourseIds = localStorage.getItem('enrolledCourseIds');
  const enrolledCourseIdsArray = enrolledCourseIds ? JSON.parse(enrolledCourseIds) : [];
  const completeCourseIds = localStorage.getItem('completeCourseIds');
  const completeCourseIdsArray = completeCourseIds ? JSON.parse(completeCourseIds) : [];

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData();
      setData(result);
    };
    getData();
  }, []);

  const filteredCourses = data.filter(course => enrolledCourseIdsArray.includes(course.id));

  return (
    <>
      <div className='YourCourses-container'>
        <div className='card-wrapped'>
          
          {filteredCourses.map((course) => (
            <div className={`card id${course.id}`} key={course.id} data-user-card-container>

          {completeCourseIdsArray.includes(course.id) && (
                <p className={`complete id${course.id}`}><span className="material-symbols-outlined">check_circle</span>Complete</p>
              )}


              <div className={`card id${course.id}`}>
                <div className="image-content">
                  <img src="/src/images/bg1.jpg" alt="Course Background"></img>
                </div>
                <div className="card-content">
                  <div>
                    <h2 className="name">{course.name}</h2>
                  </div>
                  <p className="description">{course.description}</p>
                  <p className='category'>Category: {course.category}</p>
                  <div>
                    <a href={`ID${course.id}`} className="view-btn">
                      View more <span className="material-symbols-outlined">start</span>
                    </a>
                  </div>
                </div>
                
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default YourCourses;
