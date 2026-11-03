// let n = prompt("Enter a number: ") //question 2 

// let isAdult = (n)=>{
//     if(n>= 18){
//         console.log("You are an adult")
//     }else{
//         console.log("You are not an adult")
//     }
// }
// isAdult(n)


// let BMI = (weight, height) => ( //question 3 solved 
//     (weight / (height * height))
// )
// console.log(BMI(70, 1.75))

// let num = prompt("Enter a number: ") 

// let marks = (num)=>{
//     if(num >= 90){
//         console.log("A")
//     }else if(num >= 75){
//         console.log("B")
//     }else if(num>=50){
//         console.log("C")
//     }else{

//         console.log("F")
//     }
// }
// console.log(marks(num))
// price = 500
// n = parseInt(prompt("Enter a number: "))
// let applyDiscount = (price, n=false) => {
//      if(n > 0 || n< 0){
//         price = price - (price/100)*n
//         console.log(price)
//      }else{
//         console.log(price)
//      }
// }

// applyDiscount(price, n)

// let Name = prompt("Enter your fruiet name: ") // question 6
// let sum = 0;
// let fruite = (Name) =>{
//     for(item of Name){
//         if(item == "a" || item == "e" || item == "i" || item == "o" || item == "u"){
//             sum += 1;
//         }
//     }
//     console.log(sum);
// }
// fruite(Name)

// question no 7

// let num = prompt("Enter a number: ")
// let cube = (num)=>(
//     num ** 3
// )
// let sum = (num)=>(
//     num ** 2 
// )

// let sumOfSquareAndCub = (cube, sum)=>{
//     let result = cube + sum
//     console.log(result);
// }
// sumOfSquareAndCub(cube(num), sum(num))


// question no 9
// let num = prompt("Enter a number: ")
// num = Math.abs(num)

// let safeSquareRoot = (num)=>(
//     Math.sqrt(num)
// )

// console.log(safeSquareRoot(num))

// let max = 0 // question 10
// let arr = [100, 500, 1000, 400, 2000, 1006]

// let findMax = (arr) => {
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i]>max){
//             max = arr[i]
//         }
//     }
//     return max
// }

// console.log(findMax(arr))

// const products = [ // Question number 11 
// { title: "Pen", price: 10 },
// { title: "Notebook", price: 45 },
// { title: "Bag", price: 500 }
// ];

// let [Pen, Notebook, Bag] = products;

// let sum = (n)=>(
//     n = Pen.price + Notebook.price + Bag.price
// )
// console.log(sum())


let arr = [5, 1, 3, 2, 4]
let i = []
m= 1
for(let j = 0; j< arr.length - 1; j++){
    if(arr[m] > arr[m+1]){
        console.log((i.push(arr[m+1])))
    }else{
      console.log(i.push(arr[m]))
    }
    m++
}
console.log(i)