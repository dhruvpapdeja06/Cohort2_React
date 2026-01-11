import React,{useState} from 'react'

const BackgroundColor = ()=>{
    

    // useState Example

    let clr = ["white","red","orange","blue","green","yellow","pink"];
    const [color,setColor] = useState(clr[0]);
  
    function changeColor(){
        let randomIndex = Math.floor(Math.random()*clr.length);
        console.log(randomIndex);
        console.log(color);
        setColor(clr[randomIndex])
  }
  
    
    return (
        <div>
            <h1 style={{ backgroundColor:color }}>Helo Sheriyans, Now it's time to change the color : {color} </h1>
            <button onClick={changeColor}>
                Change Color
            </button>

        </div>

    )
}

export default BackgroundColor;