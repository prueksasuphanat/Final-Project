import React, { useState, useEffect } from 'react';
import '/src/components/Banner.css';

const Banner1 = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % 3);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='container-banner'>
            <img className="Banner-pic" src='/src/images/banner1.jpg' alt='Banner'></img>
            <div className='text-banner'>
                {['Unlock', 'Start', 'Unleash'].map((title, i) => (
                    <div key={i} className={`quote ${index === i ? 'active' : ''}`}>
                        <h1>{title}</h1>
                        <h2>
                            {index === 0 ? 'Your Potential with Programming Languages!' :
                                index === 1 ? 'Your Coding Journey Today.' :
                                    'Your Creativity with Coding.'}
                        </h2>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Banner1;
