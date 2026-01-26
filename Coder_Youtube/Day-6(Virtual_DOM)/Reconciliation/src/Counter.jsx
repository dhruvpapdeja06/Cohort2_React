import React, {useState} from 'react'


const Counter = ()=>{

    const [count,setCount] = useState(0);
    console.log("Counter");


    return (
        <div>
            <h1>This is Counter Application</h1>
            <h2>Counter Value is : {count}</h2>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(count-1)}>Descrement</button>

        </div>
    )
}

export default Counter;