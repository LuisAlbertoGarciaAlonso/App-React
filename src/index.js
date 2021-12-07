import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUwz1u8WWE-B8YpysAQHhb1Wgm--AssvE",
  authDomain: "luisgarciaappcoder.firebaseapp.com",
  projectId: "luisgarciaappcoder",
  storageBucket: "luisgarciaappcoder.appspot.com",
  messagingSenderId: "12969025099",
  appId: "1:12969025099:web:8e40c112ab059eea3bf7ce"
};

// Initialize Firebase
initializeApp(firebaseConfig)

//initializeApp(process.env.firebaseConfig); modo seguro

ReactDOM.render(
  <React.StrictMode>
    <App />
      </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();