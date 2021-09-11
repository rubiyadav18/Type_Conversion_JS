let readlineSync=require('readline-sync')
var num=readlineSync.questionInt("enter a number--")

if(num%2=="0"){
    console.log("it is divible by 2")
}
else{
    console.log("it not divsble bye 2")
}

