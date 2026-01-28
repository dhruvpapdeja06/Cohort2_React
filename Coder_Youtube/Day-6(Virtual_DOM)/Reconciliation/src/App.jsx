
{/* 
  Notes -->

  Today's Learning
  1.How React under the Hood works and how effeciently update the DOM.
  2.Virtual DOM Tree,Reconciliation and Diffing Algo, React Fibre , Child Element Jo Dynamic hai , why provide key not Index?
  
  // Start here

  1.    HTML -- -----------  DOM    |->
                                       Render Tree ------ Reflow --------- Repaint
                                    |-> 
        CSS -----------------CSSOM      

        When code run it Represent on the UI.
        HTML convert to DOM Tree, CSS convert TO CSSOM then combine file convert into Render Tree 

        Render Tree --> HTML + CSS Tree combine --> single file and Convert into render tree

        Reflow: At what position element show on UI , height,width calculate.

        Repaint : Screen pixel fill with color by position of element.

        (Reflow and Repaint are high resource Operation , calculation and color filling) -->Expensive

        JS is used to manipulate the DOM(create element attach to DOM) , then further process trigger it. 

        React update the DOM efficently. Jo element create that impact the positioning of other element is done under Reflow.

        When new element is create all the UI is not repaint it , Jo element is changed only that part is then that part is re-paint it         .

        Created a counter Project in Js and React and understand the DOM Problem like in React it only re-render the change part 
        but in case of Js t re-render the entire DOM create then problem in scaling.

        Then Appication is not Optimized , it present in DOM tree add and deletion consume memory and resources, that's 
        why direct manipulation on DOM is not recomed though by React.

        In case of JS when we re-render operation depend on the render function based on that computation decide.

        By changing code we can efficently do this but when we have to use the count muliple times  then every time we have to select the element
        and manual work increase.

        Like if we don't add it every time we do zero in React it doesn't re-render but in case of js it re-render(handle by writing some condn)

      

        How React efficently know the changes where to perform (By using virtual tree)

        Virtual DOM --> create a copy of the Real DOM and detect what changes we have done (Adding element and deleting element).
        Not perform direct changes on real dom , first detect the change and copy of Real DOM store it. 


        Virtual DOM Tree --> Light Node means --> In React when we create a element(props , less property), same in JS(all property) 
        
        React ka element ko virtual DOM element. (light weight copy of Real DOM)
        BY JS element Creation (h1 size is big)


        (Function Re-render)
        When setCount re-render the App then it creates the new virtual tree ,Why in form of tree (Beacuase it 
        represent the relationship b/t all of them)

        Start comparing the Virtual Tree 1 vs Virtual Tree 2 , and detect the change like if first one count = 0, and 
        after count = 2 , then told the ReactDOM then it changes on the Real DOM.

        We have currently 2 Virtual DOM Tree present.

        when we set the setCount = 0 then re-render create the virutal Tree all he element same no state change then non change to React DOm.

        Without the React then it will delete all the nodes and create again if we do change in the Real DOM. then method is crash.

        In new virtual DOM it not inculdes top of root if not change perform on it , then we don't require it After root node 
        will create.

        Here root node is not require to include it ,  node  whose change only that node re-render and there child.

        Flow 

        <App>
          <Header>
            <Counter>
          </Header>
          <main>
            p
          </main>
          <footer>
            h1
          </footer>
        </App>


        How this tree first time --> App function call the Header function --> child

        function App(){
          Header() --> Child function call (Left to Right) --> Counter --> State variable present --> change function Re-render --> counter part re-render
          main()
          footer()
        }

        If state variable present in counter then it re-render it , the new virtual create only the change part.(Same as function call ,parent and there children)
        Not build it from scratch becuase 100 of's nodes are present.

        In Virtual DOM only the created function where state is change . This way it's optimized.
  
        Primitive Data type compared based on value and obj,array compare based on reference(No change then no show array)
        Referce by spread operator new array is created then based on that change

        Virtual trees comparison is diffing algo.

        Preciously detect which part is change here h1 textCount is same .
        If h1 value is changed ,then it creates test node for static and dynaimc value
        then precisously change the count variable based on test node.

        ------------------------------------------------------------------
        Key: Children (Dynamic Child) --> Not give the Index number why?

        We have virutal copy of list in which  3 items are there, want to add one list more 
        in the next copy we have 4 child , it compare 

        1.Element Type is same but there textContent is change 
          --1.Text Content change Mango
          --2.Text Content change Apple
          --3.Text Content change Orange
          --4. Create new element and text content Banana 

          Now change in real DOM. --> Based on changes detect.

          React compare based on position(Behind key) , how React can know what changes , happen , for that we can use then it 
          not compare based on postion , compare based on key.

          In first solution i have to select element and chage there textCOntent (4 Operation Perform)
          (Position --> behind the scene use index as key )

          1.Now React ,create a new list Item and text content Mango.
          2.In Real DOM Apple is in 1 position , but in new Virtual DOM it's positon in 2 place.

          ---> In Real DOM , ul list create add first Item as Mango


          Detect changes based on key if the key doesn't exist then based on that element create .
          Apple in real dom at first position but in virtual there positon chage.

          Parent --> 

          document.createElement('li');
          list.textContent = "Mango";

          parent.prePend(list);

          Here only One Operation Only add child as First child , added as first 
          In Index way it same as Positon compare
  
          Problem --> 
          We create a clock program to create it when i append without key pass then other key who hold some 
          state not able to hold that give to new clock.


          Any component state will attach with key when it re-render it otherwise state management problem.

          State attach to key.


          (VT Reimplementaion --More Optimized , statechage --function re-render , Js is Single Threade , then go build tree)
          React fibre --> In process of creating virtual tree if any input come from the user in that process 
          before react fibre tree remove from the stack , handle the user input after create the VT.

          But this process is not efficent and problem is solve by react Fibre,that you feel your laggy.

          React Fibre stop the process of VT.(Mutliple things at same) --> how to make it possible

          Tree build first left child then right child , stored it stack using recurision and possibility 
          stack memory error , size is small 

          (Tree build DFS process ) --> i don't use , solve using while loop.

          Parent 
        |  |     |
      child1  -- child2  --> Parent point to left child ,left child point to parent ,and child point to sibling child
      WHy this Data Structue solve using loop.


      // Behind the scenen linked List, there is way to optimize it 
  
   */}




import React, { useState } from 'react'

const App = ()=>{

  const [count,setCount] = useState([10,88]);
  console.log("App");

  function handleChange(){
    console.log(typeof count,count);
    setCount([33,...count]);
    // console.log(count);
  }

  return (
    <div>
      <h1>This is the counter for React App</h1>
      <h2>Counter: {count}</h2>
      <button onClick={handleChange}>Increment</button>
      {/* <button onClick={()=>setCount(count-1)}>Decrement</button> */}
    </div>
  )
}

export default App;