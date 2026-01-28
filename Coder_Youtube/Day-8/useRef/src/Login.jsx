// import React, { useState } from 'react'
import React ,{useRef} from 'react';

// Direct Dom is handle to input field or Browser handle , Problem is that while there are so  
//  many re-render when user pass data , here are only two field but there is possibility that many field are available

// emailRef, passRef directly point to he main Dom
const Login = () => {
  
    // const [email,setEmail] = useState("");
    // const [passwd,setPasswd] = useState("");

    // Everyone should not have good phone instaed of useRef your Browser will hang up because of Re-render
    const emailRef = useRef(null);
    const passRef = useRef(null);

    console.log("render");
    function handleSubmit(e){
        e.preventDefault();

        // console.log(email);
        // console.log(passwd);

        console.log(emailRef.current.value);
        console.log(passRef.current.value);
    }

    return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} /> */}
        <input type="email" ref={emailRef} />
        {/* <input type="password" value={passwd} onChange={(e)=>setPasswd(e.target.value)} /> */}
        <input type="password" ref={passRef} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Login;
