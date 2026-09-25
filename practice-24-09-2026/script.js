num = prompt("enter any score: ")
if (100 <= num <= 80){
    console.log("you got A grade with marks:", num)
}
else if(80 <= num <= 60){
    console.log("you got grade B with mark:", num)
}
else if( 60<= num <= 40){
    console.log("you got C grade with marks:", num)
}
else{
    console.log("you grade is D with marks:", num)
}