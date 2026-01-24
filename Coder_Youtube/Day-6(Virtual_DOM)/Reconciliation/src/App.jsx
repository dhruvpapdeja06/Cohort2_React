
{/* 
  Notes -->

  Today's Learning
  1.How React under the Hood works and how effeciently update the DOM.
  2.Virtual DOM Tree,Reconciliation Algo, React Fibre , Child Element Jo Dynamic hai , why provide key not Index?
  
  // Start here

  1.    HTML -- -----------  DOM    |->
                                       Render Tree ------ Reflow --------- Repaint
                                    |-> 
        CSS -----------------CSSOM      

        When code run it Represent on the UI.
        HTML convert to DOM Tree, CSS convert TO CSSOM then combine file convert into Render Tree 

        Render Tree --> HTML + CSS Tree combine --> single file and Convert into render tree

        Reflow: At what position element show on UI , height,width calculate.

        Repaint : Screen pixel will cover with color by position of element.

        (Reflow and Repaint are high resource Operation , calculation and color filling)

        JS is used to manipulate the DOM , then this process trigger it. 

        React update the DOM efficently. Jo element create that impact the positioning of other element is done under Reflow.

        When new element is create all the UI is not repaint it , Jo element is changed only that part is changed.


  
  
  
  
  
  
  
  
  
  
  */}




import React, { useState } from 'react'

const App = ()=>{

  const [count,setCount] = useState(0);

  return (
    <div>
      <h1>This is the counter for React App</h1>
      <h2>Counter: {count}</h2>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
    </div>
  )
}

export default App;