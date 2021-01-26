let inputNum = document.getElementById("inputNum");
let text = document.getElementById("text");

var count = 0;

var primeNum = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
inputNum.addEventListener("input",function(){
    count = 0;
    for(n=0; n<primeNum.length; n++){
        if(inputNum.value==primeNum[n]){
            count++;
        }
    }
    if(count==1){
        text.innerHTML=`Yes! ${inputNum.value} is a prime number!`;
        document.body.style.backgroundColor = "red";
    }
    else{
        text.innerHTML=`No, ${inputNum.value} is not a prime number!`;
        document.body.style.backgroundColor = "white";
    }
})
