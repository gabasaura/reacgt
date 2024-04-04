import React, { useState, useEffect } from 'react';

const Counter = ({ valor = 0 }) => {
    const [counter, setCounter] = useState(valor);

    useEffect(() => {
        let intervalId = setInterval(() => {
            setCounter(counter => counter + 1);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div>
            <span className='title-num'>COUNTER:</span> 
            <span className='num'>{Math.floor(counter / 1000 % 10)}</span> :
            <span className='num'>{Math.floor(counter / 100 % 10)}</span> :
            <span className='num'>{Math.floor(counter / 10 % 10)}</span> :
            <span className='num'>{Math.floor(counter / 1 % 10)}</span>
        </div>
    );
};

export default Counter;
