import React, { useState } from 'react'


const App = () => {
  const [num,setNum] = useState(0); //first num read only , setNum write only value

  const [king,setKing] = useState("Varun");
  const [queen,setQueen] = useState("shraddha");

  // Random number
  const [data,setData] = useState(0);

  // Get data from the array to display different name
  let array = ["Sarthak","Sheriyans","Coder","Ishan","Ambani","Harkirat"];

  const [arr,setArr] = useState(0);

  
  // let marks = [88,78,90,33,81,28];

  const [marks,setMarks] = useState([60,55,90,23,12])


  const graceStudent = ()=>{
    let mark = marks.map((elem)=>{
      if(elem > 90){
        return elem
      } else{
        return elem + 5
      }
    })
    setMarks(mark)
    console.log(mark);
   }

  const changeKing = ()=>{
    console.log(king);
    setKing("Akshay"); //async --> pending state, Js interpreter spider monkey
    console.log(king);
  }

  const changeQueen = ()=>{
    setQueen("Katrina");
  }

  const [gender,setGender] = useState("male")
  
  // const btnClicked = () =>{
  //   console.log("btnClicked");
  //   setNum("1");
  // }

  return(
    <div className="container">
      
      <div className='top'>
        <h1>{king}</h1>
        <h1>{num}</h1>
        <h1>{queen}</h1>
        {/* random */}
        <h1>{data}</h1>
        {/* array */}
        <h1>{array[arr]}</h1>
        <h1>{gender}</h1>

        <div className="middle">
          
          {marks.map((elem,idx)=>{
            return <h3>Student {idx+1} = {elem} ({elem>33?"Pass":"Fail"})</h3>
          })}

          <div>
            <div>
              <input type="radio" name="gender" id="male" />
              <label htmlFor="male">Male</label>
            </div>

            <div>
              <input type="radio" name="gender" id="female" />
              <label htmlFor="female">female</label>
            </div>
          </div>

        </div>

      </div>
      
      <div className="bottom">
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
            <button 
              onClick={()=>{
                setNum(num +2)
            }}
            >
              Jump By 2
            </button>
        <button 
          onClick={changeKing}
          >
            Change king
          </button>
        <button
        onClick={changeQueen}
        >
          Change Queen
        </button>

      </div>

      <button onClick={()=>{
        let rdm = Math.floor(Math.random()*100);
        setData(rdm);
      }}
      >
        Random Number
      </button>

      <button onClick={()=>{
        if (arr < array.length-1){  
        setArr(arr+1)
        }
      }}
      >
        Change person
      </button>

      <button onClick={graceStudent}>Give them Grace</button>
      
      <button onClick={()=>{
        if(gender == "male"){
          setGender("female")
        }else {
          setGender("male")
        }
      }}
      >Change Gender</button>

    </div>
  )
}

export default App