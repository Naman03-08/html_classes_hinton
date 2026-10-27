// let arr = ["naman", "yash", "aryman", "satya"]
// console.log(arr)
// console.log(typeof arr)
// console.log(arr.slice(-2, -1))

// for(item of arr){
//     console.log(item)
// }


let favMovie = "Marvels"
let guess = prompt("please enter youe guess: ")

while(true){
    if(guess == "quit"){
        console.log("you quit")
        break;
    }else if(guess != favMovie){
        alert("please try again it was wrong guess")
        guess = prompt("please try again: ")
    }
    else if(guess == favMovie){
        console.log("congrats!!!")
        break;
    }
}