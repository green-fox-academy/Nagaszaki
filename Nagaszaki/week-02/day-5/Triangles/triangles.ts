'use strict'

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

let squareSize= 50
let lineCount= 12

function drawLines(ctx:CanvasRenderingContext2D,lineCount:number,squareSize: number) {
    for(let i=1;i<lineCount+1;i++){
        let x1=0
        let y1 =i*squareSize
        let x2 =i*squareSize
        let y2=600
      
        ctx.strokeStyle = 'green';
        ctx.beginPath();
        ctx.moveTo(x1,y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    }
}


function drawLines2(ctx:CanvasRenderingContext2D,lineCount:number,squareSize: number) {
    for(let i=1;i<lineCount+1;i++){
        let x1=600
        let y1 =i*squareSize
        let x2 =i*squareSize
        let y2=0
      
        ctx.strokeStyle = 'purple';
        ctx.beginPath();
        ctx.moveTo(x1,y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    }
}


drawLines(ctx,lineCount,squareSize)
drawLines2(ctx,lineCount,squareSize)