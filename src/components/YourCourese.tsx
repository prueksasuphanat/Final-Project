import React from 'react'
import { fetchData,Course } from '../api';
import { useState,useEffect } from 'react';


const YourCourese = () => {
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
        <div className='YourCourses-container'>
            <h1>Your Courses</h1>


        </div>
    </>
  )
}

export default YourCourese