let dadu = document.querySelector('#dadu');
let papa = document.querySelector('#papa');
let beta = document.querySelector('#beta');

// dadu.addEventListener('click' , function(){console.log("dadu")} ,true)
// papa.addEventListener('click' , function(){console.log("papa")} ,true)
// beta.addEventListener('click' , function(){console.log("beta")} ,true)
// ---------------

// dadu.addEventListener('click' , function(){console.log("dadu")} ,true)
// papa.addEventListener('click' , function(){console.log("papa")})
// beta.addEventListener('click' , function(){console.log("beta")} ,true)

// ---------------
// HTML
// body
dadu.addEventListener('click' , function(e){
    e.stopPropagation()
    console.log("dadu")
} , false)
papa.addEventListener('click' , function(e){
    e.stopPropagation()
    console.log("papa")
} , true)
beta.addEventListener('click' , function(e){
    e.stopPropagation()
    console.log("beta")
} ,true)



// ------------------------
// let btn = document.querySelector('button');
// function hello(){console.log("hello")}
// function hi(){console.log("hi")}

// btn.onclick = hello;
// btn.onclick = hi;

// btn.addEventListener('click'  , hello)
// btn.addEventListener('click'  , hi)
 

