import React from 'react'

const App = ()=>{
  
  let count = 0;

  function incrementNumber(){
    count++;
    console.log(`Increment is clicked, Count is : ${count}`);
  }

  function decrementNumber(){
    count--;
    console.log(`Decrement is clicked, Count is : ${count}`);
  }
  

  
  return (
    <div className="parent">
      <h2>Count is : {count}</h2>
      {/* Pass the function reference not call it incrementNumber() otherwise it call it */}
      <button id="btnInc" onClick={incrementNumber}>Increment</button>
      <button id="btnDesc" onClick={decrementNumber}>Decrement</button>
    </div>
  )
}

export default App;