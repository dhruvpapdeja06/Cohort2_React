import React,{useState} from 'react'
import Card from './components/Card';

const App = ()=>{

  // Basic To DO App 

  const [alluser,setAllUser] = useState([])

  const [username,setUserName] = useState();
  const [userimage,setUserImage] = useState();
  const [userrole,setUserRole] = useState();
  const [userdesc, setUserDesc] = useState();

  const submitHandler = (e)=>{
    e.preventDefault()
    const olduser = [...alluser];

    olduser.push({username,userimage,userrole,userdesc});

    setAllUser(olduser);
    console.log(olduser);

    // console.log(username,userimage,userrole,userdesc);
    console.log("From Submitted");
    setUserName('')
    setUserImage('')
    setUserRole('')
    setUserDesc('')
  }

  


  return (
    <div className='h-screen bg-black text-white'>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input 
        className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 w-[45%]' 
        type="text" 
        placeholder='Enter your Name'
        onChange={(e)=>{
          // console.log("Data ...");
          setUserName(e.target.value);
        }}
        
        />

        <input 
        className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 w-[45%]' 
        type="text" 
        placeholder='Image URL' 
        onChange={(e)=>{
          setUserImage(e.target.value);
        }}
        />
        
        <input 
        className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 w-[45%]' 
        type="text" 
        placeholder='Enter Role' 
        onChange={(e)=>{
          setUserRole(e.target.value)
        }}
        />
        
        <input 
        className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 w-[45%]' 
        type="text" 
        placeholder='Enter Description' 
        onChange={(e)=>{
          setUserDesc(e.target.value);
        }}
        />
        
        <br />
        
        <button 
        className='px-5 py-2 bg-emerald-700 active:scale-95 cursor-pointer rounded m-2 w-[92%]'>
          Create User
        </button>
      </form>

      <Card/>
    </div>

    
  )
}

export default App;