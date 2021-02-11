import React, { useMemo, useState } from 'react';
import './App.scss';
import firebase from 'firebase';
import { LoginForm } from './Login/LoginForm';
import { MainPage } from './MainPage/MainPage';
import { RegisterForm } from './Register/RegisterForm'



function App() {
  const [loginIn, setLoginIn] = useState(false);
  const [beforLogin, setBeforeLogin] = useState(true);
  const [time, setTime] = useState({});

  const isDesktop = useMemo(() => {
    return window.innerWidth > 1024;
  }, [loginIn]);

  const createAccount = (mail, pass, firstName, lastName) => {
    firebase.auth().createUserWithEmailAndPassword(mail, pass)
      .then((userCredential) => {
        setBeforeLogin(true)
        const user = userCredential.user;
        const db = firebase.database();
        db.ref(user.uid + '/firstName').set({'firstName': firstName});
        db.ref(user.uid + '/lastName').set({'lastName': lastName});
        db.ref(user.uid + '/DesktopTime').set({'count': 0})
        db.ref(user.uid + '/MobileTime').set({'count': 0})
      })
      .catch(error => console.log(error));
  };

  const loginToAccount = (mail, pass) => {
    firebase.auth().signInWithEmailAndPassword(mail, pass)
      .then(() => {
        const user = firebase.auth().currentUser;
        const db = isDesktop
          ? firebase.database().ref(user.uid + '/DesktopTime')
          : firebase.database().ref(user.uid + '/MobileTime');
        db.on('value', (response) => {
          setTime(response.val());
        setLoginIn(true);
        setBeforeLogin(false);
        })
      })
      .catch(error => {
        setLoginIn(false);
        setBeforeLogin(false);
        console.log(error)
      });
  };

  const logsOut = (second) => {
    const user = firebase.auth().currentUser;
    const db = firebase.database();
    db.ref(user.uid + (isDesktop ? '/DesktopTime' : '/MobileTime'))
      .set({'count': second});

    firebase.auth().signOut()
    .then(function() {
      console.log("Logged out!")
   }, function(error) {
      console.log(error.code);
      console.log(error.message);
   }).then(() => {
    setLoginIn(false);
    setBeforeLogin(true);
   });
  }

  const linkToRegistation = () => {
    setLoginIn(false);
    setBeforeLogin(false);
  }

  return (
    <>
      {beforLogin &&
        (<LoginForm
          getLoginDate={loginToAccount}
          onLink={linkToRegistation}
         />
        )
      }
      {!loginIn && !beforLogin ? (
        <RegisterForm getRegisterDate={createAccount} />
      ) : (
        loginIn && <MainPage
          time={time.count}
          outLogin={logsOut}
          desktopClock={isDesktop}
        />
      )}
    </>
  );
}

export default App;
