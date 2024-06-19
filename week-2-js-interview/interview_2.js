// Question 1 (binary floating point)
// console.log(0.1 + 0.2 === 0.3); 
// console.log(0.1 + 0.3); 
// console.log(0.2 + 0.3); 

// -----------
//// Question 2
// var a = [1, 2, 3];
// var b = a;
// b.push(4);
// console.log(a);

// -----------
//// Question 3

// (function(){
//   var a = b = 3;
// })();
// console.log(typeof a === 'undefined');
// console.log(typeof b === 'undefined');
// console.log(typeof b === 'number');

// -----------
//// Question 4
// function foo(){
//   return
//   {
//      message: "Hello"
//   };
// }
// console.log(foo());

// -----------
//// Question 5 (type coersion)
// console.log([1, 2, 3] + [4, 5, 6]);


// -----------
//// Question 7
// const [a, , b] = [1, 2, 3];
// console.log(a, b);

/// ----------
//// Question 8
// let x = { a: 1, b: 2 };
// let y = { b: 3, c: 4 };
// let z = {...x, ...y};
// console.log(z);

// -----------
//// Question 9
// const person = {
//   name: 'John',
//   age: 28
// };

// const { name: fullName, age } = person;
// console.log(fullName, age);
// console.log(name, age);


// -----------
//// Question 10
// console.log('Request started')

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then((response) => response.json())
//   .then((data) => {
//     console.log('Data Received 1')
//     console.log(data)
//     console.log('Data Received 2')
//   })
// console.log('Request ended')

// -----------
//// Vs

// async function getData() {
//   console.log('Request started')
//   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//   const data = await response.json()
//   console.log('Data Received')
//   console.log(data)
//   console.log('Request ended')
// }
// getData()

// -----------
////  Question 11
// console.log(a)
// console.log(b)
// var a = b = 5


// -----------
////  Question 12 (Call vs bind)

// const foo = () => {
//   console.log(this.name)
// }
// foo.call({ name: 'John' })

// ---------------

// function foo() {
//     console.log(this.name)
// }
// foo.call({ name: 'John' })

// -----------
////  Question 13
// Make id readonly

// const user = {
//   id: 123,
//   name: 'John Doe',
//   age: 28,
//   address: {
//     city: 'Mumbai',
//     state: 'Maharashtra',
//   },
// }


// -----------------

// function sam(){
//     console.log(this);
// }
// sam();
// --------
// let obj = {
//     a:10,
//     fn: function(){
//         console.log(this)
//     }
// }

// obj.fn();
// ans()
// -------------


// let abc = {
//     a:10,
//     fn: function(){
//         let sam = ()=>{
//             console.log(this)
//         }
//         sam()
//     }
// }
// let ans = abc.fn
// ans()


// -------------------

// let obj1 = {
//     a: 10,
//     b: function(){
//         console.log(this)
//     }
// }
// let obj2 = {
//     a:50
// }
// obj1.b()
// obj1.b.call(obj2 ,11,12,13)
// obj1.b.apply(obj2 ,[111,112,113])
// let newFn = obj1.b.bind(obj2);
// newFn()
