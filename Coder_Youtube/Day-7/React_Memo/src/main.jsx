// import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import Counter from './Counter.jsx'

// All Property --> copy

// const h3 = document.createElement('h3');
// console.dir(h3);

// Limited property -- copy
// console.log(<h1>Hello Buddy</h1>); 

createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>,
)
