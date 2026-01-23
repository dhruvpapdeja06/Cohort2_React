// What is hook, why we need it and what exactly the problem they solve.

// StrictMode use at development time

// Here value of counter is increased on console but not display on the UI, 

// Why we don't perform direct DOM Mainputlation by own.

// We have not perform the DOM Manipulation. In React we have useState for better Optimization.

// Hooks is nothing basically a powerful function.

// Check the internal implementation of useState

import React ,{ useState } from 'react'
// import React from 'react'

const App = ()=>{
  
  // For Not create varible like this
  // let count = 0;


  // useState Hook --> first arg , is hold the value of state , 2nd arg is function
  const [count,setCount] = useState(0); // return an array 


  // This will create source of bug(Cards component is same , change by props),manual update, Need this counter and increment 2 more.
  // Component --> Re usable use many times.
  // function incrementNumber(){
  //   count++;
  //   const h2 = document.querySelector("h2");
  //   h2.innerText = `Count is : ${count}`;
  //   console.log(`Increment is clicked, Count is : ${count}`);
  // }

  // function decrementNumber(){
  //   count--;
  //   const h2 = document.querySelector("h2");
  //   h2.innerText = `Count is : ${count}`;
  //   console.log(`Decrement is clicked, Count is : ${count}`);
  // }
  
  // In component Part when we re-use it changes the first one not second so it is bug or something else.
  // This is bug of JS (DOM Manipulation we do)

  function incrementNumber(){
    // count++;
    // count = count + 1;
    // setCount update the value of count and Re-render the App function
    setCount(count + 1);
  }

  function decrementNumber(){
    // count --;
    setCount(count - 1);
  }

  
  return (
    <div className="parent">
      <h2>Count is : {count}</h2>
      {/* Pass the function reference not call it incrementNumber() otherwise it call it */}
      {/* If i want to use the count variable multiple place for that i have to select the element and
      perform DOM manipulation on it. In this way there is high possibility of mistake(Here manual work increase) */}
      
      {/* when the value of count is changed , there is any way i give the signal to react and perform
      all the manipulation (Behind the scene React DOM do it but here i don't take the headache.) */}
      
      
      <button id="btnInc" onClick={incrementNumber}>Increment </button>
      <button id="btnDesc" onClick={decrementNumber}>Decrement</button>
    </div>
  )
}

export default App;