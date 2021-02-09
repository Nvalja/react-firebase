import React, { useState, useEffect } from 'react';

export const MainPage = ({outLogin}) => {
  const [second, setSecond] = useState(0);


  useEffect(() => {
    let count = 0;
    let timer = setInterval(() => {
      console.log('sec');
      timerStep(count++)
    }, 1000);

    return() => {
      clearInterval(timer);
    }
  }, []);

const timerStep = (count) => {
  setSecond(count);
}
  return (
    <div>
      <button onClick={outLogin}>fff</button>
      <div className="timer">
        {`${Math.floor(second / 3600)}:`}
        {`${Math.floor(second / 60 % 60)}:`}
        {`${(second % 60)}` }
      </div>
    </div>
    
  );
};