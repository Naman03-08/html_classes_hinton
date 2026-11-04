// function calculateSum(a){
//     return a*a*a;
// }

// console.log(calculateSum(3));

// age = prompt("enter youe age: ")
// if(age>= 18){
//     console.log("you are an adult now");
// }else{
//     console.log("you are not an adult now ")
// }

// function bmi(weight, height){
//     return weight / (height * height);
// }
// console.log(bmi(79, 0.6))

// function gradeMarker(marks){
//     if(marks>= 90){
//         console.log("A");
//     }else if(marks>= 75){
//         console.log("B");
//     }else if(marks>=50){
//         console.log("C");
//     }else if(marks>=33){
//         console.log("P")
//     }else{
//         console.log("F");
//     }
// }
// gradeMarker(90);

// let price = prompt("enter a number");
// let member = prompt("are you a member? (Y/N)");
// function isMember(price, member = false){
//     if(member == "Y"){
//         console.log(price*0.9);
//     }else if(member == "N"){
//         console.log(price)
//     }
// }

// isMember(price, member)

// let fruiet = prompt("enter fruiet name :")
// function fruiets(fruiet){
//     let sum = 0;
//     for(vovels of fruiet){
//         if(vovels == "a" || vovels == "e" || vovels == "i" || vovels == "o" || vovels == "u"){
//             sum++;
//         }
//     }
//     console.log(sum);
// }
// fruiets(fruiet);

// let number = prompt("enter a number: ")
// function square(number){
//     console.log(number**2);
// }
// function cube(number){
//     console.log(number**3);
// }

// function squareandcube(number){
//     console.log(square(number) + cube(number));
// }
// squareandcube(number);

// function squareandcube(number){
//     let square = number**2;
//     let cube = number ** 3;
//     console.log(square+cube);
// }

// squareandcube(number);

// let number1 = prompt("enter a number: ")
// number1 = parseInt(Math.abs(number1))
// function squareRoot(number1){
//     let sqrt = Math.sqrt(number1);
//     console.log(sqrt);
// }

// squareRoot(number1);

// let arr = [5, 10, 15, 20, 100];
// let mx = 0;
// function maxNum(newNum){
//     for(let i = 0; i<arr.length; i++){
//     if(arr[i]>mx){
//         mx = arr[i];
//     }
// }
//     return mx;
// }
// console.log(maxNum());

// const products = {
//     pen : 10,
//     Notebook : 45,
//     Bag : 500,
// }

// let {pen, Notebook, bag} = products

// function total(a, b, c){
//     let sum = a+b+c;
//     console.log(sum)
// }

// total(products.pen, products.Notebook, products.Bag)

const students = {
  studentNames: {
    student1: "Naman",
    student2: "yash",
    student3: "shashwat",
  },
  studentRollNo: {
    student1: 2616400035,
    student2: 2616400049,
    student3: 2616400055,
  },
  studentBatch: {
    student1: "hinton",
    student2: "hinton",
    student3: "hinton",
  },
  studentCollage: {
    student1: "Zenith School Of AI",
    student2: "Zenith School Of AI",
    student3: "Zenith School Of AI",
  },
  studentAge: {
    student1: 19,
    student2: 20,
    student3: 19
  }
};

let { studentNames, studentBatch, studentCollage, studentRollNo, studentAge } = students;
console.log("student 1 data ===============================================>");
console.log(studentNames.student1);
console.log(studentBatch.student1);
console.log(studentRollNo.student1);
console.log(studentCollage.student1);
console.log(studentAge.student1)
console.log("student 2 data ===============================================>");
console.log(studentNames.student2);
console.log(studentBatch.student2);
console.log(studentRollNo.student2);
console.log(studentCollage.student2);
console.log(studentAge.student2)
console.log("student 3 data ===============================================>");
console.log(studentNames.student3);
console.log(studentBatch.student3);
console.log(studentRollNo.student3);
console.log(studentCollage.student3);
console.log(studentAge.student3)
console.log("end===================================================>");
