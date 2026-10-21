// console.log("naman pandey");

// ----------------------------------------->

// a = 12
// b = 13
// sum = a+b
// console.log(sum)
// type = typeof(sum)
// console.log(type)
// console.log(typeof(true))

// ----------------------------------------->

// let Name = "naman";
// console.log(Name);
// never use var, only use let and const

// ----------------------------------------->

// let arr1 = [["X", "", ""], ["", "X", ""], ["O", "", "X"]]

// console.log(arr1)
// for (let i = 15; i >= 1; i -= 2) {
//     console.log(i);
// }

// for(let i = 5; i<=50; i+=5){
//     console.log(i)
// }

// n = prompt("enter a number: ")
// n = parseInt(n)
// for(let i = n; i <= n*10; i = i + n){
//     console.log(i);
// }

// for(i = 1; i<=3; i++){
//     for(j = 1; j <= 3; j++){
//         console.log(j)
//     }
//     console.log(`loop over ${i}`)
// }

// favMovie = "Marvels"
// Name = prompt("enter movie name: ")
// // while(favMovie != Name){
// //     Name = prompt("you were wrong, please Try again")
// // }
// // console.log(`you guess is correct and the movie name is: ${Name}`)

// if(favMovie == Name){
//    console.log(`You are correct the movie name is ${favMovie}`)
// }
// else if(Name == "Quit"){
//     console.log("you quit the game")
// }

// else if(favMovie != Name){
//      while(favMovie != Name){
//         prompt("you were wrong, please Try again: ")
//     }
// }

// let favMovie = "Avangers";
// let guess = prompt("guess ythe movie name: ")

// while(guess != favMovie){
//     if(guess == "quit"){
//         console.log("you quit")
//         break;
//     }
//     console.log("wrong answer")
//     guess = prompt("your guess was wrong, please try again: ")
// }

// if(guess == favMovie){
//     console.log(`congrats you got it right, the movie name is ${guess}`)
// }

// let fruites = ["mango", "apple", "orange", "banana", "papaya"]

// for(i = fruites.length - 1; i>=0; i--){
//     console.log(i, fruites[i])
// }

// let heros = [["heman", "ironman", "spiderman"], ["wonderwomen", "thor", "antman"]]

// for(i = 0; i<heros.length; i++){
//     console.log(`list# ${i}`)
//     for(j=0; j<heros[i].length; j++){
//         console.log(j, heros[i][j])
//     }
//     console.log(`list# ${i} compleated`)
// }

// let arr = [["naman", "pandey"], ["yash", "raj"], ["aman", "kumar"]]

// for(user of arr){
//     console.log(user)
//     for(Name of user){
//         console.log(Name)
//     }
// }

// ----------------------------------------------------------------------->
// let todo = []
// let req = prompt("enter your request: ")

// while(true){
//     if(req == "quit"){
//         console.log("you quit")
//         break;
//     }

//     if(req == "list"){
//         console.log("-------------------------")
//         for(task of todo){
//             console.log(task)
//         }
//         console.log("-------------------------")
//     }else if(req == "add"){
//         console.log("-------------------------")
//         let add = prompt("enter what you want to add: ")
//         todo.push(add)
//         console.log("task added")
//         console.log("-------------------------")
//     }else if(req == "delete"){
//         todo.pop()
//         console.log("task deleted")
//     }

//     req = prompt("enter your request: ")
// }

// ----------------------------------------------------------------------->

// let num = prompt("enter your number which you want to get counted: ")
// while(num > 0){
//     for(n of num){
//         console.log()
//     }
// }
// let firstName = "naman"
// let lastName = "pandey"
// let total = 12;
// let tax = 13
// console.log(firstName + " " + lastName)
// let num = BigInt(48)
// console.log(typeof(num))
// let num2 = 48
// num2.toLocaleString()
// console.log(num === num2)

// console.log(true == 2)

let num = prompt("enter the max number: ")
let req = prompt("enter youe guess now: ")
let maxNum = (Math.floor(Math.random()*num) + 1);
while(true){
    if(req == "quit"){
        console.log("you quit!!")
        break;
    }

    if(req == maxNum){
        console.log(`Congrats the number was ${maxNum}`)
        break;
    }else if(req > maxNum){
        req = prompt("Hint: you guess was too big please try to enter some small value: ")
    }else if(req < maxNum){
        req = prompt("Hint: you guess was too small please try to enter some big value: ")
    }
}