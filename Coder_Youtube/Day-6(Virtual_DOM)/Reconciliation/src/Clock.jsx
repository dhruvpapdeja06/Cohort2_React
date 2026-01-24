
// Digital Clock practise

import React from 'react'

const Clock = ()=>{

    function getTime(){
        let time = new Date().toLocaleTimeString();
        return time;
    }

    return(
        <div>
            <h2>Digital Clock : {getTime()}</h2>
        </div>
    )
}

export default Clock;