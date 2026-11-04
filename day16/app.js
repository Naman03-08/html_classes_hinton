function calculateSum(a){
    return a*a*a;
}

console.log(calculateSum(3));

age = prompt("enter youe age: ")
if(age>= 18){
    console.log("you are an adult now");
}else{
    console.log("you are not an adult now ")
}

function bmi(weight, height){
    return weight / (height * height);
}
console.log(bmi(79, 0.6))

function gradeMarker(marks){
    if(marks>= 90){
        console.log("A");
    }else if(marks>= 75){
        console.log("B");
    }else if(marks>=50){
        console.log("C");
    }else if(marks>=33){
        console.log("P")
    }else{
        console.log("F");
    }
}
gradeMarker(90);

let price = prompt("enter a number");
let member = prompt("are you a member? (Y/N)");
function isMember(price, member = false){
    if(member == "Y"){
        console.log(price*0.9);
    }else if(member == "N"){
        console.log(price)
    }
}

isMember(price, member)


let fruiet = prompt("enter fruiet name :")
function fruiets(fruiet){
    let sum = 0;
    for(vovels of fruiet){
        if(vovels == "a" || vovels == "e" || vovels == "i" || vovels == "o" || vovels == "u"){
            sum++;
        }
    }
    console.log(sum);
}
fruiets(fruiet);