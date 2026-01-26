import React,{ useState } from 'react'

const Counter = () => {
    const [count,setCount] = useState(0);
    console.log("Counter");
   
    return (
    <div>
        <h1>Counter Application of React</h1>
        <h2>Counter Value is : {count}</h2>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
    </div>


)
}
export default Counter;
