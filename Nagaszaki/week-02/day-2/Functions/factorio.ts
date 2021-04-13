'use strict';

// - Create a function called `calculateFactorial()`
//   that returns the factorial of its input

function calculateFactorial(numberNeedsFactorio: number){
    let factorial: number = numberNeedsFactorio;
    for (let i: number = numberNeedsFactorio-1; i > 0; i--){
        factorial *= i;
    }
    return factorial;
}