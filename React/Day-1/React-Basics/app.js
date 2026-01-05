
// Why React and ReactDOM code written seperately , why not write it one single file
// (ReactDOM) --> indexedDB.html 

// (React --> UI same use as web or mobile) but runtime is different for rendering


// 1.Code will be heavy
// 2.Run time different

// Mobile App --> React Native (Same work as Web Dev)
// (Runtime Env is differ from Web Dev)


const h1 = React.createElement("h1",{},"Use React CDN");

// legacy to react17

// Why this code deprecated --> Before React 18 you click mulitple nav tag until movie not load you don't click on other nav element that's ditinguish the user experience.
// (Because we know that Js is single threaded lang , at render time other button not works)
// ReactDOM.render(h1,document.querySelector(".root"));


// Display the 100 cards that time loop running one task executed.
// we don't have control in React 17

//  Root container root is placed, React 18 gives control that i can break between it, EventListener --> webAPi 


// CDN --> content Delivery Network

//   Laptop    --->  Youtube Server(Data) --> one Server or DB (US)

// All country rqst goes to that server not able to handle all the rqst latency high to far rqst.


const root = ReactDOM.createRoot(document.querySelector(".root"));

root.render(h1);