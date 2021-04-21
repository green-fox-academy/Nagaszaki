'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern

function draw (size: number, color: string){
    ctx.strokeStyle = color;
    ctx.strokeRect(size,size,10,10);
}

for (let i: number = 0; i < 60; i++){
    for (let j: number = 0; j < 40; j++){
        draw (i+10, "purple");
    }
    
}