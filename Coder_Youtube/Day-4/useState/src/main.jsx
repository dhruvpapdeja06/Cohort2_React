import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* React effeciently handle the manipulation , how it handle it */}

    {/*       Root   
        App         App
    counter code(count = 0)  counter code (count = 0)
    
    // increse function call increase the value of count , we use queryselector select the first h2,button in the code we have 2 of it

    count --> 1,2 when press left child button 

    Update the value of the first
    
    when press right child button start count = 1 (count is local variable of right child)

    React manage the state and based on that they change it (internally not change the otherone
    
    state kis particular function sa attach hai

    Ex- open video of coder but play music , then user experience is not good.
    )
    */}

    {/* <App /> */}
  </StrictMode>,
)
