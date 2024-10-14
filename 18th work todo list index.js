// make a input bar
// add a buttton
// call a function on a button click
// add input value in div.innerHTML

function ADD() {
    
    var input = document.querySelector(".input").value;
    var div = document.querySelector(".box")
    div.innerHTML += `<h1>${input}</h1>`
    console.log("input")
    input.value = ''
    


}
