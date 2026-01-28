import React, { useState, useRef } from 'react'

const App = ()=>{

// StopWatch
  const [timer,setTimer] = useState(0);

  // when re-render the app then again it's value is null , I Want to hold the previous value of intervalId 
  // This work is useRef do
  // let intervalId = null;

  //Under the hood create an obj {current : null} --> it is only create once , After re-render not again create but we can change the value of current
  const intervalIdRef = useRef(null);

  function handleStart(){
    if(intervalIdRef.current != null){  //Old one is not null then continue it 
      // clearInterval(intervalIdRef.current); // Delete the previous one and new one start
      return;
    }
    intervalIdRef.current = setInterval(()=>{
      setTimer(timer=>timer+1); //here timer value is 0 because of closure concept , function lock the value of global varaible , i want latest value
      // console.log(timer);
    },1000)
  }

  function handleStop(){
    clearInterval(intervalIdRef.current);
    intervalIdRef.current = null;
  }

  function handleReset(){
    clearInterval(intervalIdRef.current);
    intervalIdRef.current = null;
    setTimer(0);
  }

  return (
    <div>
        <h2>StopWatch: {timer}</h2>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Pause</button>
        <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default App;