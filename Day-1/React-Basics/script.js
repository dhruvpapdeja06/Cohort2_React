
// Creating first element
const h1 = document.createElement("h1");
h1.innerText = "Today is the first Class of React";
h1.style.backgroundColor = "blue";
h1.style.color = "white";
h1.style.fontSize = "3rem";


// Creating second element
const h2 = document.createElement("h2");
h2.innerText = "Creating our own React to better understanding of React";

h2.style.color = "green";
h2.style.backgroundColor = "gold";
h2.style.fontSize = "2rem";


//Problem Statement -->  Now i want to create 3 more element but it is tedious for to write same code again and again 

// To solve that we can create a method inside obj / function 

// styles = {fontSize: "1.4rem", color:"red", backgroundColor: "gray"};


// Element Creation --> make code more clean

// Case handle --> Nested , classs or ID handle 

const React = {
    createElement: function(tag,styles,children){
        const element = document.createElement(tag);


        if(typeof children === "object"){
            for(let val of children){
                element.append(val);
            }
        }else element.innerText = children;
 

        for(let key in styles){
            // so here key is JS variable we can't acess with dot otherwise it will give me undefined.
            element.style[key] = styles[key];
        }

        return element;
    }
}

const h3 = React.createElement('h3',{fontSize: "1.4rem", color:"red", backgroundColor: "gray"}," Create method to avoid the repetition of code");

const p = React.createElement('p',{fontSize:"1.2rem",color:"orange"},"Creating function for rendering");


// Rendering --> DOM manupulation (Changes on tree/HTML)

// make code more cleaner (Here React and ReactDOM is obj)

const ReactDOM = {
    render : function(element,root){
        root.append(element);
    }
}

ReactDOM.render(h1,document.querySelector('.root'));
ReactDOM.render(h2,document.querySelector('.root'));
ReactDOM.render(h3,document.querySelector('.root'));
ReactDOM.render(p,document.querySelector('.root'));


// how unordered list will be created to make more complex
// HTML CSS JS React

const li1 = React.createElement('li',{},"HTML");
const li2 = React.createElement('li',{},"CSS");
const li3 = React.createElement('li',{},"JS");
const ul = React.createElement('ul',{},[li1,li2,li3]);


ReactDOM.render(ul,document.querySelector('.root'));




/*
const root = document.querySelector(".root");

root.append(h1,h2,h3,p);

*/