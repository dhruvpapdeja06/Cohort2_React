
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


                                // React                Render 
// React.createElement --> react element(JS Object) ==> HTML element

const root = ReactDOM.createRoot(document.getElementById("root"));


                                        
// JSX --> JavaScript XML : HTML code direct write iniside the JS.
// JSX --> HTML like syntax 

// Bable convert this JSX code(Transpiler/Compiler) --> React element(object) 

// I want to put muliple element inside it because it only expect single element.

// It's also allow JSX expression inside it

const fName = "Developer";
const user = {
    age: 22,
    salary: 32000
}

const element = (
    <>
        <h3>Understanding Babel and JSX</h3>
        <h4 id="h4" className="heading">This is JSX (HTML code inside the JavaScript to easy developer life)</h4>
        <h5>This make code more readiable put it inside the div or empty tag</h5>
        {/* We can pass Js Expression but don't pass statement and obj */}
        <p>You are a {fName} and Your salary is {user.salary}</p>

    </>
)
// convert like this React.createElement('h4',{},children);

console.log(element);


// root.render(container);
root.render([container,element]);

