// callbacks

// function greet(name, sayBye) {
//     console.log("Hello" + name);
//     sayBye();
//     console.log("call returning back to greet")
// }

// function sayBye() {
//     console.log("Bye!")
    
// }

// greet("Ankita", sayBye);

// HOF --> High order function

// function calculate(a,b, operation) {
//     return operation(a,b);
// }

// function add(x,y) {
//     return x + y;
// }

// console.log(calculate(10,5,add));

// Every calllback is passed to a HOF
// Function using another function = Higher order function
// Function being passed = callback

//ForEach
// let students = ["Swati", "Ankita", "Raunak"];

// students.forEach((name, index, array) => {
//     console.log(index + " -> " + name);
// });

// students.forEach((i,j,k)=>{
//     console.log("array log",i,j,k);
// })

// let prices = [100, 200, 300];

// let gstPrices = prices.map(p => p + p *0.18);

// console.log(gstPrices);

// let r1 = prices.map(
//     (x)=>{
//         return x*x;
//     }
// )
// console.log("Map result",r1);

// Area of circle

// let radius = [1,2,3];
// let circumference = radius.map((r)=>{
//     return 3.14*2*r;
// })

// console.log(circumference);

// create a new array with elements 

// let users = [
//     {name: "A", age: 17, height:170},
//     {name: "B", age: 22, height:175},
//     {name: "c", age: 15, height:168}
// ];

// let adults = users.filter(u => u.age >= 18);

// let adults = users.filter((u)=>{
//     return u.age>18;

// })

// reduce array to a single value

// let cart = [
//     {item: "Book", price:200,loss:50},
//     {item: "Pen", price:50,loss:90},
//     {item: "Bag", price:1000,loss:50},
// ];

// let initialLoss = 10;

// let total = cart.reduce((sum,obj)=> {
//     return sum +obj.price},
//     0);

// let loss = cart.reduce((loss,obj)=>{
//     return loss+obj.loss;
// },initialLoss);

// console.log(total);
// console.log(loss);