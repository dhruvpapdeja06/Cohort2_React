import React from 'react'


const FormHandling = ()=>{
  
  // Form by default re-load the page after submit how to prevent it

  const submitHandler = (e)=>{
    e.preventDefault()
    console.log("Form submitted");
  }
  
  return (
    <div className="parent">

      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <label htmlFor="">First Name :</label>
        <input type="text" placeholder='Enter your First Name' required=" " />
        <br />
        <label htmlFor="">Second Name :</label>
        <input type="text" placeholder='Enter you Last Name' required="" />
        <br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default FormHandling;