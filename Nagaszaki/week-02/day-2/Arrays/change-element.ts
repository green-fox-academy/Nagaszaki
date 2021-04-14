'use strict';

// -  Create an array named `numbers` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the value of the fourth element (8) to 4 with the `.map` method 
// -  Print the fourth element as a test

let numbers: number [] = [1, 2, 3, 8, 5, 6];
let changer = numbers.map(x => x / 2);
numbers[3] = changer[3];
console.log(numbers[3]);