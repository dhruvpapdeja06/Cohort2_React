
// import and export statement is part of latest JS , then told the browser that type of JS is module
// This is not a normal Js , this is module type
import React from 'react'

// before ReactDOM is present in 'react-dom'
import ReactDOM from 'react-dom/client'

// In production ready put in the dist folder in which map file remove it becuase from that we can acess the business logic

const h1 = React.createElement('h1',{style:{color:"red"}},"What is Deployment");
const p1 = React.createElement('p',{style:{color: 'blue'}},"The proces of making web Application available for users to access , typically by moving coder from local to a live production server.");

const h2 = React.createElement('h2',{style:{color:"red"}},"Goal");
const p2 = React.createElement('p',{style:{color:"green"}},"To deliver features and updates reliably and securely, allowing end-users to interact with the final product");

const h3 = React.createElement('h3',{style:{color:"red"}},"Different way to deploy the project");

const li1 = React.createElement('li',{key:"first",style:{color:"orange"}},"Github Page");
const li2 = React.createElement('li',{key:"second",style:{color:"blue"}},"Vercel");
const li3 = React.createElement('li',{key:"third",style:{color:"green"}},"Netlify");
const ol = React.createElement('ol',{},li1,li2,li3)

// Create container to pass all the elements at once
const container = React.createElement("div",{},[h1,p1,h2,p2,h3,ol]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);