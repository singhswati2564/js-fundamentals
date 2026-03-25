// console.log("Hello world")

// let city = "bhopal";
// city = "Indore";  //allowed
// console.log("city",city);

// const country = "India";
// country = "USA";
// console.log("country",country);

// let marks = 90;
// let student = "Rahul";
// let isPassed = true;
// let x;
// let y = null;

// console.log("marks,student,ispassed,x,y---->",marks,student,isPassed,x,y);

// let student = "Rahul";
// let x = 5;
// let z=typeof x;
// typeof student;

// console.log("z-->",z);

// let a =10;
// let b = 3.5;

// let inf = Infinity;
// let notANumber = NaN;

// console.log(typeof notANumber);

// let age = "20";
// Number(age);
// parseInt("10.5");

// console.log(typeof(parseInt("10.5")));


// console.log("age-->",typeof Number(age));

//strings

// let firstName = "Swati";
// let course = 'javascript';

// firstName.length
// firstName.toUpperCase()
// firstName.toLowerCase()
// firstName.includes("Swa")

// console.log(firstName.includes("java"));

// let first = "Swati";
// let last = "Kumari";

// let full = first + " " + last;
// console.log(full);

// Tempelate literals

// let firstName = "Swati";
// let age = 21;

// let msg = `My name is ${firstName} and my age is ${age};`

// console.log("message",msg);

// let a = 10, b = 20;
// let Sum = `Sum is ${a+b}`;

// console.log("Sum", Sum);

//NAN

// let a = 10;
// let b = "abc";

// let result = a*b;
// console.log(typeof result);

// 5+5
// "5"+5
// "5"*5
// 25*"abc"

//scope
// let a = 10;

// if(true) {
//     let b = 20;
//     console.log(b);
// }b
// console.log(a);

// // var (old,function scoped)
// if (true) {
//     var x = 10;
//     var x = 20;
// }
// console.log(x); // (accesible outside the block)

//hoisting

// console.log(a);  //undifened
// var a = 10;    

// console.log(b);  
// let b =20;

// var z;
// console.log(z);

// loose (==) vs Strict (===) Equality

// 5 == "5"   //true
// true == 1 //true
// null == undefined //true

// 5 === "5"   //false
// true === 1 //false
// null === undefined //false

// function fib(n){
//     if(n==1){
//         return 1;

//     }
//     if(n<=0){
//         return 0;
//     }
//     return fib(n-1)+fib(n-2);
// }

// console.log(fib(10))

// //IIFE function

// (function(){
//     console.log("I am running automatically");
// })();

// (function (name) {
//     console.log("Hello " + name);

// })
// ("Swati");

// (function(){

// })();

// //object

// let user = {
//     name: "Swati",
//     age: 21,
//     isAdmin: true
// };

// for(let key in user){
//     console.log("key : ",key , "value :",user[key]);
// }


// console.log("USER", user);

// let user2 = new Object();
// user2.name = "SWati";
// user2.age = 21;

// console.log("USER",user2);

// console.log("user 2 name", user2.name);

// dot notation

// console.log(user["name"]);

// bracket notation
// console.log(user["name"]);

// objects with function and this keyword

// let firstName = "Mumbai";
// let person = {
//     firstName: "Ananya",
//     greet: function() {
//         return "Hello " + this.firstName;
//     }
// };
// console.log(person.greet());

// // nested objects

// let company = {
//     name: "Google",
//     location: {
//         city: "Bangalore",
//         pincode: 560001,
//         googlemap:{
//             latitude:" ",
//             longitute:" "
//         }
//     }
// };

// console.log(company.location.pincode);

// // Traversal of object in js

// let company = {
//     name: "Google",
//     location: {
//         city: "Bangalore",
//         pincode: 560001,

//     }
// };

// function printObject(company) {
//     for (key in company) {
//         if (typeof company[key] === 'object') {
//             // for (let innerkey in company[key]) {
//             //     console.log(innerkey, company[key][innerkey]);
//             // }
//             console.log("Object",company[key]);
//             printObject(company[key]);
//         }
//         else {
//             console.log(key, company[key]);
//         }
//     }                    
// }

// printObject(company);

// // arrays

// let a1 = [1,2,3];
// let a2 = a1;

// a2.push(4);
// console.log(a1);  //[1,2,3,4]

// //copy methods 
// let b = a1;
// b.push(55);
// console.log(a1);

// let c =[...a1];
// c.push(90);
// console.log(a1);

//clone method / deep copy method
// let d = structuredClone(a1);
// d.push(99);
// console.log(a1);

