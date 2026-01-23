
import React,{ useState, useEffect } from "react"

// Js give function to webApi (that browser handle)

// Code execution setInterval goes to webApi , take time to execute 1.set , 2.set (2 time execute)

// useEffect kuch na return or return call back function 

const Clock = ()=>{
    const [time,setTime] = useState(new Date().toLocaleTimeString());
    const [show,setShow] = useState(true);
    useEffect(()=>{
        
        if(!show) return;
    // Without useEffect mulitple setInterval goes to WebApi and it will hang up the screen and consume high memory
    const intervalId = setInterval(()=>{
        setTime(new Date().toLocaleTimeString());
        console.log("hy"); //Re-render , screen will be hanged , webApi has lots of setInterval , i don't want to sent multiple setInterval
    },1000)

    
    return ()=>{
        clearInterval(intervalId);
    }

    // when dependecy value is change become false before clearInterval call 
    },[show])

    
    return (
        <div>
            
            <button onClick={()=>{
                setShow(!show) //value of show change
            }}>{show?"hide":"show"}</button>
            {
                show && <h1>Current Time : {time} </h1>
            }
        </div>
    )
}

export default Clock;