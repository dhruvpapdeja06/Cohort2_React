
import React, { useState } from 'react';


// Primitive vs Non-primitve pass in hook
const App = ()=>{
  const [count,setCount] = useState([10,20]);
  console.log("App");

  function handleChange(){

    // primitive data type --> compare based on the value  not change then no manipulation on DOM.
    // count.push(88);
    // setCount(count);
    // console.log(count);

    // Non-primitive
    console.log(count);
    setCount([55,...count]);
    // console.log(count);
  }

  return(
    <div className="parent">
      <h1>This is a Counter App in React</h1>
      <h2>Counter : {count}</h2>
      <button onClick={handleChange}>Increment</button>
    </div>
  )
}

export default App;