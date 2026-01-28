// import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Login from "./Login"
import Video from './Video'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    // <App />
    // <Login />
    <Video />
)
