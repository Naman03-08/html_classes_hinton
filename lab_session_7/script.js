// // let arr = ["naman", "yash", "aryman", "satya"]
// // console.log(arr)
// // console.log(typeof arr)
// // console.log(arr.slice(-2, -1))

// // for(item of arr){
// //     console.log(item)
// // }

// // let favMovie = "Marvels"
// // let guess = prompt("please enter youe guess: ")

// // while(true){
// //     if(guess == "quit"){
// //         console.log("you quit")
// //         break;
// //     }else if(guess != favMovie){
// //         alert("please try again it was wrong guess")
// //         guess = prompt("please try again: ")
// //     }
// //     else if(guess == favMovie){
// //         console.log("congrats!!!")
// //         break;
// //     }
// // }

// function diec() {
//     num = (Math.floor(Math.random()*6) + 1)
//     console.log(num)
// }

// diec();

// function PrintName(Name){
//     console.log(Name)
// }

// PrintName("naman");

const data = {
  products: [
    {
      id: 26,
      title: "Green Chili Pepper",
      price: 0.99,
    },
    {
      id: 27,
      title: "Honey Jar",
      price: 6.99,
    },
    {
      id: 28,
      title: "Ice Cream",
      price: 5.49,
    },
    {
      id: 29,
      title: "Juice",
      price: 3.99,
    },
    {
      id: 30,
      title: "Kiwi",
      price: 2.49,
    },
    {
      id: 31,
      title: "Lemon",
      price: 0.79,
    },
    {
      id: 32,
      title: "Milk",
      price: 3.49,
    },
    {
      id: 33,
      title: "Mulberry",
      price: 4.99,
    },
    {
      id: 34,
      title: "Nescafe Coffee",
      price: 7.99,
    },
    {
      id: 35,
      title: "Potatoes",
      price: 2.29,
    },
  ],
  total: 194,
  skip: 25,
  limit: 10,
};

console.log(data);
