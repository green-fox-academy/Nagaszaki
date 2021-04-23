'use strict'
let digitsSum: number = 0; 
function sumOfDigits(n: number){
    if(Math.floor(n/10) <= 0){
        return digitsSum + n ;
    } else {
        digitsSum += (n % 10)
       return  sumOfDigits(Math.floor(n/10));
    }
}
