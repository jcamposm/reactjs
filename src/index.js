import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBVamhzEtTLyTVOLC0MqFxmUKxlAj1EXD4",
  authDomain: "coder-turbo-gamer.firebaseapp.com",
  projectId: "coder-turbo-gamer",
  storageBucket: "coder-turbo-gamer.appspot.com",
  messagingSenderId: "270658306393",
  appId: "1:270658306393:web:a9039bf08fa5cdf8ca8c48"
};

const app =initializeApp(firebaseConfig);
const db= getFirestore(app)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

reportWebVitals();
