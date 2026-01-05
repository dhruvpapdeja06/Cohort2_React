
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
// 1.Remove the space, comment 
// 2.Some code of React , ReactDOM that is not require remove it , that functionality we don't use it , SO how i do it? --> Bundlers can do that part

// We have lots of dependencies that my React code is used that is handle by bundler.

root.render(container);