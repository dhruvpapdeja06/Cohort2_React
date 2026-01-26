// import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import List from './List.jsx'
import Clock from './Clock.jsx'

// import Counter from './Counter.jsx'
// import Clock from './Clock'


// console.log(<h1>Hello buddy</h1>);

// const element = document.createElement('h1');
// element.textContent = "Hello Buddy ";

// console.dir(element);



createRoot(document.getElementById('root')).render(
  <>
    {/* <App /> */}
    {/* <List /> */}
    <Clock></Clock>
  </>
)
