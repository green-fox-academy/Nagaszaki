'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r4.png]

let sumOfPrevousLengths: number = 0;
for (let i = 1; i < 10; i++){
    ctx.fillRect(sumOfPrevousLengths,sumOfPrevousLengths,i*10,i*10);
    sumOfPrevousLengths += i*10;
}