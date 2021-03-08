import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import firebase from 'firebase';
import App from './App';

const firebaseConfig = {
  apiKey: 'AIzaSyDibq8V-pulg4xQTv4IW4peD8DFCg_zZEI',
  authDomain: 'fire-base-new08.firebaseapp.com',
  databaseURL: 'https://fire-base-new08-default-rtdb.firebaseio.com',
  projectId: 'fire-base-new08',
  storageBucket: 'fire-base-new08.appspot.com',
  messagingSenderId: '949037149013',
  appId: '1:949037149013:web:9ec20ba2b1b0a5768cdddc',
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
