import React,{ useState } from 'react'
import Food from './Food'

const List = ()=>{

    const [listItems,setListItems ] = useState(['Apple','Orange','Pineapple']);
    
    function handleChange(){
        setListItems(['Mango',...listItems]);
    }

    return (
        <div>
            <button onClick={handleChange}>Add Items</button>
            <Food foods={listItems}></Food>
        </div>
    )
}

export default List;