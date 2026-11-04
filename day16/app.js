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