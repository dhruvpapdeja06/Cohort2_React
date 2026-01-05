
// Create Element and give id and class to it (Here not class , className)

// Here code read-ability is not good when we initally write the code in React. 
const h1 = React.createElement('h1',{id:"h1", className:"heading",style:{backgroundColor: "blue",color: "white",fontSize: "3rem"}},"What is Bundler and Why we use it?");

// Before React 17 we render the DOM like this.
// ReactDOM.render(h1,document.querySelector(".root"));


// what is bundler
const h2 = React.createElement('h2',{style:{color:"green"}},"A bundler is a tool that takes your application various files like HTML,CSS,JS,etc and combines them into a single bundle. This helps to reduce the no of HTTP requests and also imporve the performance")

// Select the root container
const root = ReactDOM.createRoot(document.querySelector(".root"));


// If i render element one by one then first one not render why? --> It renders but when we render the next element  then the previous one vanish

// root.render(h1);
// root.render(h2);


// Problem statement

{/* <div> --> parent
    <div>  -- child
        <div>
            <h1></h1>
            <h2></h2>
        </div>
    </div>
</div> */}

// To solve and write this code is complex 

// various bundler --> create react app (present in it )
const h3 = React.createElement('h3',{style:{color: "red",fontSize: "2rem"}},"Webpack,vite,parcel");

// Or pass in div --> pass childeren as array because at one time only child pass
// In which we have to create the element first that we have to pass in it.
const div = React.createElement('div',{},[h1,h2,h3]);


// child create
let child = React.createElement('div',{},div);

// parent container
let container = React.createElement('div',{style:{backgroundColor:"lightblue"}},child);


// Solution --> Inside JS we can write the HTML code that can easy our work. That concept is known as JSX. 

// This in not the part the React we added this external functionality with the help of Bable. (JSX)

// JavaScript XML

// The code that i have wrote that is not production ready. 
// can i host it --> No, Not a write apporach becuase this code is not optimized. React CDN takes code by network call 
// I i include this code in my code file then it heavy the size of file beacuse of that speed will slow.
// In java we put the code in byte format, so server can execute fast.

// Optimize code 
// 1.Remove the space, comment ,img , videos so i want that my file will be compressed so that size will reduced.
// Ex - 100mb size game VS 1GB game , 100mb game will execute fast.
// 2.Some code of React , ReactDOM that is not require remove it , that functionality we don't use it , SO how i do it? --> Bundlers can do that part

// We have lots of dependencies that my React code is used that is handle by bundler that is used in it and packed it one file.

// We are using parcel --> other bunder format will change , bundling time some algo will written , like react , reactdom which functionality they use.

// npm --> public registry/open source (packgage/library) code are there for community so that anyone can use it. like parcel,typescript compiler, React,ReactDOM available.(Lots of things related to JS that help in dev are there.)

// npm init --> Any packet take from here all the info present in it.

// when we install the parcel they install the node_modules ok that parcel present in it but why other modules come --> beacuase of dependencies.
// Who write the parcel module that are not written form scratch that can use other module.

// Example --> I created a digital clock --> some one add calender --> Task Scheduler --> Fitness Measurement (All the code come inside the node module ) --> host on npm registry

// "^19.2.2" --> ^ symbol carrot (minor or patch accept) (~ patches update) (Major --> you have to told it)
// first --> Major
// second --> minor (Functionality added)
// third --> patch (bug like security solve in it)


// Example --> Minor (v18)
function sum(a,b){
    return a + b; // type of int , not add string 
}

function sub(a,b){
    return a - b;
}

// Major Update (v19)--> Use latest --> then previous code bug it 
function sum(a,b,c){
    return a + b + c;
}

// package-lock.json --> contain all the dependencies with there versions.
// (node-module is not recommended to push on github because there size is heavy)
// cmd --> npm install (all the depedencies come from this package-lock.json comes here) --> if package-lock.json(Exact version) is deleted then in this case how to install it

// Then project check which dependency install if not given package-lock then minor update also install 

root.render(container);