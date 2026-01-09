import React, { useState } from 'react'


const App = () => {
  const [num,setNum] = useState(0); //first num read only , setNum write only value

  const [king,setKing] = useState("Varun");
  const [queen,setQueen] = useState("shraddha");

  const changeKing = ()=>{
    console.log(king);
    setKing("Akshay"); //async --> pending state, Js interpreter spider monkey
    console.log(king);
  }

  const changeQueen = ()=>{
    setQueen("Katrina");
  }

  
  // const btnClicked = () =>{
  //   console.log("btnClicked");
  //   setNum("1");
  // }

  return(
    <div>
      <h1>{king}</h1>
      <h1>{queen}</h1>
      <h1>{num}</h1>
      <button 
        onClick={()=>{
          setNum(num+1)
        }}
        >
          Increase
        </button>
        <button
          onClick={()=>{
            setNum(num-1)
          }}
          >
            Decrease
          </button>
          <button onClick={()=>{
            setNum(num +2)
          }}
          >
            Jump By 2
          </button>
      <button onClick={changeKing}>Change king</button>
      <button onClick={changeQueen}>Change king</button>
    </div>
  )
}

export default App