
// Counter App --> This is React type Counter App in Js 

/*
Notes -->

1. Performance and DOM Destruction
Every time you call render(), the browser destroys the existing DOM nodes inside #rootand creates brand-new ones. 
 
2. Loss of Focus and State
Because the buttons are deleted and recreated every time you click them:
<input> 

3. Scope Issues (Global vs. Module)
Your code relies on the functions increment()and decrement()being in the global scope so that the inline onClick="..."attribute can find them. 
If you include this script as a module ( <script type="module">), it will fail because modules do not add functions to the global windowobject. Inline handlers can only see global variables. 

4. Security Risks
innerHTML



*/






let count = 0;


function increment(){
    count++;
    render();
}

function decrement(){
    count--;
    render();
}


function render(){
    
    document.querySelector("#root").innerHTML = `
    
        <h1>This is Counter for JS App</h1>

        <h2>Counter : ${count}</h2>
        <button onClick="increment()">Increment</button>
        <button onClick="decrement()">Decrement</button>
    `;

}



render();