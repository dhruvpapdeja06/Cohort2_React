
// Digital Clock practise

import React, {useState} from 'react'
import Counting from './Counting';

const Clock = ()=>{

    const [clocks,setClocks] = useState(["A","B","C"])


    // function getTime(){
    //     let time = new Date().toLocaleTimeString();
    //     return time;
    // }

    function handleChange(){
        setClocks(["D",...clocks]);
    }

    return(
        <div>
            <button onClick={handleChange}>Increase Clock</button>
            <div>
                {clocks.map(clock => <Counting key={clock} name={clock}></Counting>)}
            </div>
        </div>
    )
}

export default Clock;