
// [object HTMLHeadingElement],[object HTMLButtonElement],[object HTMLButtonElement]

// String(h2)

// This happens when JavaScript tries to convert DOM elements into a string.

// Inserts plain text only

// Does NOT parse HTML

// Safer (prevents XSS)

// Affected by CSS (display: none text won’t show)

// div.innerText = "<h1>Hello</h1>";
// // shows: <h1>Hello</h1>

// 🔑 innerHTML

// Inserts HTML as string

// Parses & renders HTML

// Faster for static UI

// ❌ Unsafe with user input

// div.innerHTML = "<h1>Hello</h1>";
// // shows: Hello (as heading)

// One-line interview answer

// Use innerText for text, innerHTML for HTML, and avoid innerHTML with user input.


// append() takes multiple arguments, not an array — spread it if needed.


// Counter App

let count = 0;

// Increase the value
function incrementNumber(){
    count++;
}

// Descrease the value
function descrementNumber(){
    count --;
}

const h2 = document.createElement("h2");
h2.innerText = `Counter is : ${count}`;

const btnIncr = document.createElement("button");
btnIncr.innerText = "Increment";

const btnDesc = document.createElement("button");
btnDesc.innerText = "Decrement";

btnIncr.addEventListener('click',()=>{
    incrementNumber();
    h2.innerText = `Counter is : ${count}`
    console.log(`Counter Value is Increased : ${count}`);
})

btnDesc.addEventListener('click',()=>{
    descrementNumber();
    h2.innerText = `Counter is : ${count}`;
    console.log("Counter Value is Descreased : ", count);
})

const parent = document.querySelector(".parent");
parent.append(h2,btnIncr,btnDesc);

const root = document.querySelector("#root");
root.append(parent);



