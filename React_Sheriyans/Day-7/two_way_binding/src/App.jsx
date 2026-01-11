import React,{useState} from 'react'

const App = ()=>{

  // In form you are directly interact with DOM like you type it into the input box 

  // I want you don't directly interact with DOM by React interaction

  // Human  ---> React ---> Input Sarthak

  // two way binding --> From one arrow two targets hit

  // value="Sarthak" hard coded value

  const [allUsers,SetAllUsers] = useState([]);
  
  const formSubmit = (e)=>{
    e.preventDefault()
    // console.log("Form Submitted");
    
    // const newAllUsers = [...allUsers]
    // newAllUser.push(name)
    // SetAllUsers(newAllUsers)

    // setAllUsers([...allUsers],title)
    
    
    
    
    let oldUsers = [...allUsers];
    oldUsers.push(name);
    // console.log(name);
    SetAllUsers(oldUsers);
    console.log(oldUsers);


    setName('')
    
  }



  const [name,setName] = useState(" ");

  return (
    <div className="parent">
      <form onSubmit={(e)=>{
        formSubmit(e)
      }}>
        <label htmlFor="">First Name: </label>
        <input 
          type="text" 
          placeholder="Enter you First Name"
          value={name}
          onChange={(e)=>{
            console.log("hey...")
            setName(e.target.value);
          }} />
        <br />
        <button>submit</button>

        {allUsers.map((e,idx)=>{
          return <h2 key={idx}>{e}</h2>
        })}


      </form>



    </div>
  )
}

export default App;