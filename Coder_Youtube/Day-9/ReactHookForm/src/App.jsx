import React,{ useState } from 'react'


// React Hook Form --> 

const App = ()=>{

  // Normal way
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");


  // In low-end phone screen will be hang out due to less memory because here phone will be render when user give input
  // Also we have to validate all the input field , then it is difficult , problem is solved by React Hook Form
  function handleSubmit(e){
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(password);
  }

  console.log("render");

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        </div>
        
        <div>
          <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        </div>

        <div>
          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        </div>

        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default App;