
import React, { useMemo, useState ,useCallback} from 'react';
import Math from "./Math"
import Post from "./Post"
import Test from "./Test"

// Primitive vs Non-primitve pass in hook
const App = ()=>{
  // const [count,setCount] = useState([10,20]);
  const [count,setCount] = useState(0);
  const [number,setNumber] = useState(100000);
  console.log("App");


  // function handleChange(){

  //   // primitive data type --> compare based on the value  not change then no manipulation on DOM.
  //   // count.push(88);
  //   // setCount(count);
  //   // console.log(count);

  //   // Non-primitive
  //   console.log(count);
  //   setCount([55,...count]);
  //   // console.log(count);
  // }

  function handleChange(){
    setCount(count+1);
  }

// In Optimized Application i don't want that this math function call if there is no change in the value.
// In h1 and h2 inside math again re-created it there is any need of it.Why we not use the older one.To 
// solve that problem we have one special hook that is reactMemo 

// We know that Math is a child App function so here Math function value is same. I want child component 
// Re-render na ho.There is no content display of parent , there is no of change it.

// Function create , object create they occupy some memory
// function totalPrime(){
//   let total = 0;

//   if (number > 1){
//     total++;
//   }

//   for(let i=3; i<=number; i++){
//     total++;
//     for(let j=2; j<i; j++){
//       if( i % j == 0){
//         total--;
//         break;
//       }
//     }
//   }
//   console.log("Prime Call");
//   return total;
// }

  // useMemo hook is used to store the previous value of result if there is no change in the value. 
  // Remember the result across the function re-render.
  const prime = useMemo(()=>{
    let total = 0;

    if (number > 1){
      total++;
    }

    for(let i=3; i<=number; i++){
      total++;
      for(let j=2; j<i; j++){
        if( i % j == 0){
          total--;
          break;
        }
      }
    }
    console.log("Prime Call");
    return total;
  },[number]);

  // function lexical value ko markdown here count value is 0(Global scope value store), It prevent the older value
  const handleClick = useCallback(()=>{
    console.log("Function is nothing basically an Object that across re-render occupy memory");
    console.log(count);
  },[count]);

  // UseCallback remember the funciton across the re-render (This function not depend on count,number)
  // handleClick();

  // By useMemo we can solve the problem of obj 
  const obj = useMemo(()=>{
    return {name: "AI", age: "22"}
  },[])


  // Homework --> useCallback --> As a props you pass a function to the children component
  const childProp = useCallback(()=>{
    console.log('Button clicked in the child component!');
    // setMessage('Message updated from child!');
  },[])

return(
    <div className="parent">
      <h1>This is a Counter App in React</h1>
      <h2>Counter : {count}</h2>
      <button onClick={handleChange}>Increment</button>
      {/* Here i am passing props again it's not re-render again , Here check last time what props you have passed in App*/}
      {/* Here compare the props if no change there is no change in result */}
      
      <h2>Your Current Number : {number}</h2>
      <button onClick={()=>{setNumber(number + 100)}}>Increment Number</button>

      <button onClick={handleClick}>Click</button>
      <Math number={1000}></Math> 
      <h3>Total No of Prime Numbers is : {prime}</h3>
      {/*The Post component is not depend on any value why this re-render it? beause you pass an object ,
      it compare based on reference , In Js we have two obj in which content is same base they take different
      space in memory , primitive compare base on the value  , In Obj it create a new obj  */}
      <Post value={obj}></Post>
      <Test onButtonClick={childProp}></Test>
    </div>
  )
}

export default App;