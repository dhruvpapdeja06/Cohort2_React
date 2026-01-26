import React from 'react'
import List from './List'

// props : {
//      'foods' : ['Apple','Orange','Pineapple']
//       'age' : 12
// } Data pass as an object 


const Food = ({foods})=>{

    return (
        <div>
            <ul>
                {/* {foods.map((food,index) => <li key={index}>{food}</li>)}   */}
                {foods.map(food=> <li>{food}</li>)}
            </ul>
            
        </div>
    )
}

export default Food;