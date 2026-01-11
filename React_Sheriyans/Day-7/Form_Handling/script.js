
// It's the nature of form that when we submit it reload the page


let form = document.querySelector('form');

form.addEventListener('submit',function(dets){
    // by preventDefault we can solve the page reload problem
    dets.preventDefault()
    console.log("form submitted");
})