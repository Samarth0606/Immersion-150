// let inpEl = document.querySelector('input');

// let callApi = (e)=>{
//     console.log(`Calling api on` , e.target.value)
// }

// inpEl.addEventListener('input' , callApi)

// // part-2 => debounce ------


// let inpEl = document.querySelector('input');

// let callApi = (e)=>{
//     console.log(`Calling api on` , e.target.value)
// }
// // debounce => fn , wait => return a fn
// let debounce = (fn , wait)=>{
//     return ()=>{}
// }

// inpEl.addEventListener('input' , callApi)

// // -------------------------------
// // part-3 => debounce ------


// let inpEl = document.querySelector('input');

// let callApi = (e)=>{
//     console.log(`Calling api on` , e.target.value)
// }
// // debounce => fn , wait => return a fn
// let debounce = (fn , wait)=>{
//     return ()=>{
//         fn()
//     }
// }
// let debouncedValue = debounce(callApi , 2000)
// console.log(debouncedValue)
// inpEl.addEventListener('input' , callApi)

// -------------------------------
// part-4 => debounce ------


let inpEl = document.querySelector('input');

let callApi = (e)=>{
    console.log(`Calling api on` , e.target.value)
}
// debounce => fn , wait => return a fn
let debounce = (fn , wait)=>{
    let timerId = null;
    return (e)=>{
        clearTimeout(timerId)
        timerId = setTimeout(()=>{
            fn(e)
        } ,wait)
    }
}
let debouncedValue = debounce(callApi , 2000)
// console.log(debouncedValue)
inpEl.addEventListener('input' , debouncedValue)