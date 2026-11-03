// i = 0
// while(i<=5){
//     j = 0
//     while(j<=5){
//         console.log(`the number is ${j}`)
//         j++
//     }
//     console.log(`this is ${i} loop`)
//     i++
// }

// i=0
// do{
//     console.log("hello")
//     i++
// } while(i<=5);

// let n = prompt("enter a number: ")
// n = parseInt(n)
// console.log(n)

// n = number(n)
// console.log(n)
// n = number(n)
// console.log(n)

// while (true) {
//   let item = prompt("item Title? ");
//   console.log(item);
//   while (true) {
//     let price = parseInt(prompt("Item Price? "));
//     console.log(price);
//     while (true) {
//       let add = prompt("Add Another(yes/no)");
//       if (add == "yes") {
//         while (true) {
//           item = prompt("item Title? ");
//           console.log(item);

//           while (true) {
//             ice1 = parseInt(prompt("Item Price? "));
//             console.log(ice1);
//             ice1 += price;
//             alert(`your final price is ${ice1}`);
//             console.log(`the final price is${ice1}`);
//             break;
//           }
//           while(true){
//             newItem = prompt("Add Another(yes/no)")
//             if(newItem == "yes"){
            
//             }
//             else if(newItem == "no"){
//             alert(`your final price is ${price}`);
//             break;
//             }
//           }
//         }
//       } else if (add == "no") {
//         alert(`your final price is ${price}`);
//         break;
//       }
//       break;
//     }
//     break;
//   }
//   console.log(`the final price is${ice1}`);
//   break;
// }
// let multipleGreet = function(func, n){
//     for(let i = 1; i <= n; i++){
//         func()
//     }
// }
// let greet = function(){
//     console.log("naman")
// }

// multipleGreet(greet, 5)
// n = prompt("enter a number")
// let MultipleGreet = (func, i) => {
//     for(i = 1; i<=n; i++){
//         func();
//     }
// }
// let greet = function(){
//     console.log("naman")
// }

// MultipleGreet(greet, n)
// console.log("hello")
// console.log("My name is: ")
// setTimeout( ()=>{
//     console.log("pandey")
// }, 2000)
// console.log("Naman")

// setTimeout(()=>{
//     console.log("Hello:")
// }, 1000)
// setTimeout(()=>{
//     console.log("My name is: ");
// }, 1500)
// setTimeout(()=>{
//     console.log("Naman");
// }, 2000)
// setTimeout(()=>{
//     console.log("pandey");
// }, 2500)

// let sum = (a, b) => (
//     a+b
// );
// console.log(sum(2, 4))

// let calculator = {
//     sum(a, b){
//         return a+b;
//     }, 
//     sub(a, b){
//         return a-b;
//     }, 
//     mul(a, b){
//         return a*b;
//     }, 
//     divide(a, b){
//         return a/b;
//     }
// }

// let arr = ["naman", "pandey"]

// let finalvalue = arr.reduce((res, el)=>(res + el))

// console.log(finalvalue)

// const sum = (a, b) =>(
//     a+b
// )
// console.log(sum(3, 5))

// let arr = [1, 2, 3, 4, 6 , 7]
// console.log(...arr)
// let sum = (a, b)=>(
//     a+b
// )

// function multipleGreet(func, n){
//     for(let i = 1; i<=n; i++){
//         func()
//     }
// }

// let greet = ()=>{
//     console.log("naman")
// }

// multipleGreet(greet, 5)

// let arr1 = [1, 2, 3, 4, 5, 6]
// let finval = arr1.reduce((rel, acc)=>{
//     return rel+acc
// })
// console.log(finval)

// // let check = arr.map((el)=>{
// //     return el*2
// // })
// // console.log(check)

// let arr = [1, 2, 3, 4, 5, 6]
// let finalValue = arr.reduce((ans, acc)=>{
//     return ans+acc
// })
// console.log(finalValue)

// console.log(...arr)

// let sum = (a, b)=>{
//     let ans = a+b;
//     return ans;
// };

// let new_arr = [sum(2, 3), sum(4, 5), sum(6, 7)];
// console.log(new_arr)

// let arr = [1, 3, 4, 5, 9, 12]
// let minimum = Math.min(...arr)
// let maximum = Math.max(...arr)
// console.log(maximum - minimum)


