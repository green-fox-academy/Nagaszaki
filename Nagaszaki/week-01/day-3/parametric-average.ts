'use strict';

// Write a program that calculates the sum and the average from 1 to a given number
// Example input: 5
// Example output: Sum: 15, Average: 3

let number: number = 5,sum:number = 0;
for(let i:number = 0; i < number; i++){
    sum += i+1;
}
console.log("Sum: ",sum,", Average: ", sum/number);