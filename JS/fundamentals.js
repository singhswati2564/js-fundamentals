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

let radius = [1,2,3];
let area = radius.map((r)=>{
    return 3.24*2*r;
})

console.log(area);