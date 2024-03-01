import React, { useState, useEffect } from 'react';
import { fetchData,Course } from '../api';

const MyComponent: React.FC = () => {
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
    <div>
      <h1>รายชื่อคอร์ส</h1>
      <ul>
        {data.map(course => (
          <li key={course.id}>
            <li>{course.name}</li>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;
