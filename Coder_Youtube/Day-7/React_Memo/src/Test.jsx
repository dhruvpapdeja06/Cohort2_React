import React from 'react'

const Test = ({onButtonClick}) =>{
    console.log("Test function Re-render");
    return (
        <div>
            <h2>This is test function in child Component </h2>
            <button onClick={onButtonClick}>Click</button>
        </div>
    )
}

export default React.memo(Test);