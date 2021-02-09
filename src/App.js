import React, { useEffect, useState } from 'react';
import './App.scss';
import firebase from 'firebase';

function App() {
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
    <>
      <div className="App">
        { `${Math.floor(second / 3600)}:${Math.floor(second / 60 % 60)}:${second % 60}` }
      </div>

      <div className="Form">
        <h2 className="Form__titile">Login</h2>
        <form className="Form__inputs">
          <input type="text" className="Form__input" />
          <input type="password" className="Form__input" />
        </form>
        <input type="button" className="Form__button"/>
        <a className="Form__link">Don’t have an account yet?<span>Register</span></a>
      </div>

      <div className="Form">
        <h2 className="Form__titile">Login</h2>
        <form className="Form__inputs">
          <input type="text" className="Form__input" />
          <input type="password" className="Form__input" />
        </form>
        <input type="button" className="Form__button"/>
        <a className="Form__link">Don’t have an account yet?<span>Register</span></a>
      </div>
    </>
  );
}

export default App;


// useEffect(() => {
  //   const dataBase = firebase.database();

  //   // console.log(dataBase)
  // }, []);

  // const handleMail = ({ target }) => {
  //   setMail(target.value);
  // };

  // const handlePass = ({ target }) => {
  //   setPass(target.value);
  // };

  // const createAccount = () => {
  //   firebase.auth().createUserWithEmailAndPassword(mail, pass)
  //     .catch(error => console.log(error));


  //   firebase.auth().signInWithEmailAndPassword(mail, pass)
  //     .catch(error => console.log(error));
  // }
  





  

  // console.log(mail, pass);