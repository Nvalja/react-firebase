import React, { useEffect, useState } from 'react';
import './App.scss';
import firebase from 'firebase';
import { LoginForm } from './Login/LoginForm';
import { MainPage } from './MainPage/MainPage';
import { RegisterForm } from './Register/RegisterForm'

function App() {
  const [pageOpen, setPageOpen] = useState(false);
  const [loginIn, setLoginIn] = useState(false);
  const [beforLogin, setBeforeLogin] = useState(true);
  // const [people, setPeople] = useState({});

  useEffect(() => {
    const dataBase = firebase.database();

    console.log(dataBase)
  }, []);


  const createAccount = (mail, pass) => {
    firebase.auth().createUserWithEmailAndPassword(mail, pass)
      .then(response => {setBeforeLogin(true)})
      .catch(error => console.log(error));
  };
  
  const loginToAccount = (mail, pass) => {
    firebase.auth().signInWithEmailAndPassword(mail, pass)
      .then(response => {
        setLoginIn(true);
        setBeforeLogin(false);
      })
      .catch(error => {
        setLoginIn(false);
        setBeforeLogin(false);
        console.log(error)
      });
  }

  const logsOut = () => {
    firebase.auth().signOut()
    .then(function() {
      console.log("Logged out!")
   }, function(error) {
      console.log(error.code);
      console.log(error.message);
   }).then(response => {
    setLoginIn(false);
    setBeforeLogin(true);
   });
  }

  return (
    <>
     {beforLogin && <LoginForm getLoginDate={loginToAccount}/>}
      {!loginIn && !beforLogin ? (
        <RegisterForm getRegisterDate={createAccount} />
      ) : (
        loginIn && <MainPage outLogin={logsOut}/>
      )}
    </>
  );
}

export default App;
