import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../style/MainPage.scss';

export const MainPage = ({outLogin, time, desktopClock}) => {
  const [timeCount, setTimeCount] = useState(0);
  useEffect(() => {
    let count = time;
    let timer = setInterval(() => {
      console.log('sec');
      timerStep(count++)
    }, 1000);

    return() => {
      clearInterval(timer);
    }
  }, []);

  const timerStep = (count) => {
    setTimeCount(count);
}
  const hour = Math.floor(timeCount / 3600);
  const minute = Math.floor(timeCount / 60 % 60);
  const second = (timeCount % 60);

  return (
    <>
      <input
        type='button'
        className="MainPage__button"
        value = "Log out"
        onClick={() => {
        outLogin(timeCount);
        }}
      />
      <div className="MainPage">
        <div className="MainPage__clock-wrapper">
          <h2 className="MainPage__title">Desktop</h2>
          <div className="MainPage__clock">
            <div className="MainPage__clock-image" />
          </div>
          {desktopClock
          ? (
            <div className="MainPage__timer">
              {`${Math.floor(hour / 10)}${(hour % 10)}:`}
              {`${Math.floor(minute / 10)}${(minute % 10)}:`}
              {`${Math.floor(second / 10)}${(second % 10)}` }
            </div>
          ) : (
            <div className="MainPage__timer">
              00:00:00
            </div>
          )}
        </div>
        
        <div className="MainPage__clock-wrapper">
          <h2 className="MainPage__title">Mobile</h2>
          <div className="MainPage__clock">
            <div className="MainPage__clock-image" />
          </div>
          {!desktopClock
          ? (
            <div className="MainPage__timer">
              {`${Math.floor(hour / 10)}${(hour % 10)}:`}
              {`${Math.floor(minute / 10)}${(minute % 10)}:`}
              {`${Math.floor(second / 10)}${(second % 10)}` }
            </div>
          ) : (
            <div className="MainPage__timer">
              00:00:00
            </div>
          )}
        </div>
      </div>
    </>
  );
};

MainPage.propTypes = {
  outLogin: PropTypes.func.isRequired,
  desktopClock: PropTypes.bool.isRequired,
  time: PropTypes.number.isRequired,
};
