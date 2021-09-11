let readlineSync=require("readline-sync")
var age=readlineSync.questionInt("enter  a age---")
if (age==5){
    console.log("can go to school",age)
}
else if (age==18){
    console.log("can vote in elections",age)
}
else if (age==21){
    console.log(" can drive a car.",age)
}
else if(age==24){
    console.log(" can marry",age)
}
else if(age==25){
    console.log("age can  drink")
}
else {
    console.log("sorry")
}
