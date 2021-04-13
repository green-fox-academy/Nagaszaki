'use strict';

// Write a function called `sum()` that returns the sum of numbers from zero to the given parameter

function sum(endParameter:number){
    let sum:number = 0;
    for (let i: number = 0; i<=endParameter;i++){
        sum+=i;
    }
    return sum;
}