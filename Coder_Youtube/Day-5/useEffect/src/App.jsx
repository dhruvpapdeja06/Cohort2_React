// There are two imp hooks in React useEffect and useState mostly we used it.

// The useEffect Hook in react allows functional components to perform side effects.

// Problem Statement --> Build an UI with the help of React , Call an Api of github users and display the profile.





import React,{ useState, useEffect } from 'react'

const App = () =>{

  const [users,setUsers] = useState([]);
  // const [name,setName] = useState("");
  const [count,setCount] = useState(30);

  // useEffect takes empty array as dependecy and callback function
  useEffect(()=>{

    // This useEffect function call at last 
    async function githubProfile(){

      const response = await fetch(`https://api.github.com/users?per_page=${count}`);
      const data = await response.json();
      console.log(data);
      setUsers(data);  // when call back fn call then re-render the App , empty array only one time run otherwise work as normal way
    }

    githubProfile();
  },[count]) //here count i want to track every time when count change then useEffect function will run

  // Dependecy array --> In future some condition come then we have to call it again.

  // async function GithubProfile(){
  //   const response = await fetch("https://api.github.com/users"); //return promise --> take time to solve it.

  //   const data = await response.json(); //return promise (data comes as array) --> take to solve it.
  //   console.log(data); // print two times becuase of StrictMode
  //   // setUsers(data);  // In this flow App function render in loop (Then API calls exhausted)

  //   // To solve that problem we have useEffect
  //   console.log("API Calls")
  // }


  // When data comes then we have to create state varible to re-render the app function 
  // GithubProfile();

  // function handleChange(e){
  //   console.log(e.target.value.toUpperCase());
  //   setName(e.target.value.toUpperCase());
  // }


  // Use Case : Based on the user choice the no profile i want to show the user.
  function profileShow(e){
    setCount(e.target.value);
  }

// return JSX first before get the data
  return (
    <div>
      <h2>Github Users : </h2>
      {/* Here input text is not handle the React handle by Browser , i need it control */}
      {/* Here data goes value field */}
      <input type="text" onChange={profileShow} value={count} ></input>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap",gap:"10px"}}>
        {
          users.map(user=>(
            // Here key should be unique and don't give the index number.
            <img src={user.avatar_url} height={"100px"} width={"100px"} key={user.login} />  //Js use like this
          ))
        }
      </div>
    </div>
  )
}

export default App;


