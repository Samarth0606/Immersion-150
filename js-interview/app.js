//// Question 1
// {
//     var a = 1
//     let b = 2

//     console.log(a)
//     console.log(b)
// }

// console.log(a)
// console.log(b)

//// ------------------

//// Question 2
//   console.log(a)
//   var a = 5
// //// -----------------
  // console.log(name)
  // var name = 'pankaj'

//// ------------------

//// Question 3
  // var x = 20

  // function foo() {
  //   console.log(x)
  //   var x = 10
  // }
  // foo()

  // ******* //

  // foo()
  // var foo = 20
  // function foo() {
  //   console.log('Calling foo')
  // }
  // foo()

//// ------------------

//// Question 4
  // function outer() {
  //   function inner() {
  //     console.log(x)
  //   }
  //   const x = 5
  //   return inner
  // }
  // const inner = outer()
  // inner()

//// ------------------

//// Question 5
  // console.log('Start')
  // setTimeout(() => {
  //   console.log('Timeout 1')
  // }, 4000)
  // setTimeout(() => {
  //   console.log('Timeout 2')
  // }, 2000)
  // console.log('End')

//// ------------------

//// Question 6
//// print the numbers after a delay of 1s
  // for (const i = 1; i <= 3; i++) {
  //   setTimeout(() => {
  //     console.log(i)
  //   }, 1000)
  // }

//// ------------------

//// Question 7
  // setTimeout(() => {
  //   console.log('Timeout')
  // }, 0)
  // Promise.resolve().then(() => console.log('Promise'))
  // console.log('End')

//// ------------------
//// Question 8


  // async function foo() {
  //   return 'Hello World'
  // }

  // const result = foo()
  // console.log(result)

//// ------------------
//// Question 9 (try array methods in this)
//   const numbers = [10, 20, 30, 40, 50]

//// ------------------

//// Question 10
  // let a = null
  // console.log(typeof a)
  // console.log(typeof null)
  // console.log(typeof NaN)

//// ------------------

//// Question 11 (Why are we able to change the arr when it is declared using const)
  // const arr = [1,2,3]
  // arr[14] = 5
  // console.log(arr[13])

  // console.log(arr)
//   console.log(arr.length)

//// ------------------
//// Question 13
//  const user = {

//     address:{
//         home:"delhi"
//     },
//     age:10,

//  }
// const { age, address } = user;
// console.log(age, address )
// ----
  // const [a, b , c="mango"] = [10, 'Hii' , 'apple']
  // console.log(a, b , c)
  // ---

//// ------------------
//// Question 14
// function abc() {
//     console.log('hii')
// }

// const value = new abc()
// console.log(value)

//// ------------------
//// Question 15
  // function foo(a, ...rest) {
  //   console.log(arguments)
  //   // console.log(a, rest, c);
  //   console.log(rest);
  // }

  // foo(1, 2, 3, 4, 5)

  // ---------------------


//   let arr = [10,30,40];
//   let arr2 = [90,70];
//   // let arr3 = arr.concat(arr2)
//   // console.log(arr3)
//   let arr4 = [...arr , ...arr2]
// console.log(arr4)

// -------

let obj = {
  a:10,
  b:20
}

let obj2 = {
  ...obj,
  c:"sammy"
}
console.log(obj , obj2)