'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a box that has different colored lines on each edge

ctx.strokeStyle = "red";
ctx.beginPath();
ctx.moveTo(10,10);
ctx.lineTo(10,200);
ctx.stroke();

ctx.strokeStyle = "green";
ctx.beginPath();
ctx.moveTo(10,200);
ctx.lineTo(200,200);
ctx.stroke();

ctx.strokeStyle = "purple";
ctx.beginPath();
ctx.moveTo(200,200);
ctx.lineTo(200,10);
ctx.stroke();

ctx.strokeStyle = "yellow";
ctx.beginPath();
ctx.moveTo(200,10);
ctx.lineTo(10,10);
ctx.stroke();