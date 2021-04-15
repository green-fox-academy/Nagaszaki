'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters
// (the square size and the fill color)
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with a rainbow of colored squares.

function draw (size: number, color: string){
    ctx.strokeStyle = color;
    ctx.strokeRect(300-(size/2),200-(size/2),size,size);
}

for (let i: number=600; i > 0; i--){
    draw (i, `${"#" + ((1<<24)*Math.random() | 0).toString(16)}`);
}