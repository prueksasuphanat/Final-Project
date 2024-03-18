import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';
import { fetchData, Course } from '../api';
import '/src/pages/courses/course.css';

function AllCourse() {
  const [data, setData] = useState<Course[]>([]);
  const [search, setSearch] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value.toLowerCase());

  };

  const onChangeCategory = (category: string) => {
    setSelectedCategory(category.toLowerCase());
    
  };

  const clearFilter = () => {
    setSelectedCategory('');
    setSearch('')
  };

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData();
      setData(result);
    };

    getData();
  }, []);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(search);
  };

  return (
    <>
      <header>
        <NavBar />
      </header>

      <div className="course-header-container">
        <div>
          <h2>Course List</h2>
          <p>4 Course available</p>
        </div>
        <div className="search">
          <form className='search-bar' onSubmit={onSubmit}>
            <input className='search-input' onChange={onChangeSearch}></input>
            
          </form>
          <div className='searchIcon'>
            <span className="material-symbols-outlined">search</span>
          </div>
        </div>




        <div className="category-container">
          <p>Category :</p>
          <div className='category-btn-container'>
            {data.map((course) => (
              <button
                
                key={course.id}
                className={`'category-btn' selectedCategory === course.category.toLowerCase() ? 'active' : ''`}
                onClick={() => onChangeCategory(course.category)}
              >
                {course.category}
              </button>
            ))}

          </div>
          
          
        </div>
        <div className='course-search'>
        <h3>Course search :"{selectedCategory !== '' && search !== '' ? selectedCategory : (selectedCategory !== '' ? selectedCategory : search)}"</h3>

        {selectedCategory && (
          <div className='clear-btn'>
            <span className="material-symbols-outlined">close</span>

            <button onClick={clearFilter} className="clear-filter">
              Clear Filter
            </button>
          </div>
            
            
          )}
        </div>
        
      </div>

      <div className="card-wrapper">
        {data.map((course) => {
          if (course.name.toLowerCase().includes(search) && (selectedCategory === '' || course.category.toLowerCase() === selectedCategory)) {
            return (
              <div className="card" key={course.id} data-user-card-container>
                <div className="image-content">
                  <img src="/src/images/bg1.jpg" alt="Course Background"></img>
                </div>
                <div className="card-content">
                  <div>
                    <h2 className="name">{course.name}</h2>
                  </div>
                  <p className="description">{course.description}</p>
                  <p className='category'>Category : {course.category}</p>
                  <div>
                    <a href={`ID${course.id}`} className="view-btn">
                      View more
                      <span className="material-symbols-outlined">start</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          } 
        })}
      </div>

      <Footer />
    </>
  );
}

export default AllCourse;
