'use strict';

 // - Create a two dimensional list dynamically with the following content.
 //   Note that a two dimensional list is often called matrix if every
 //   internal list has the same length.
 //   Use a loop!
 //
 //   1 0 0 0
 //   0 1 0 0
 //   0 0 1 0
 //   0 0 0 1
 //
 //   Its length should depend on a variable
 //  
 // - Print this two dimensional list to the output

 let matrix: number[][] = [], lengthAndNumberOfMatrixRows = 4;
 for(let i: number = 0; i < lengthAndNumberOfMatrixRows; i++){
     let matrixRow: number[] = [];
     for(let j: number = 0; j < lengthAndNumberOfMatrixRows; j++){
        if(j == i){
            matrixRow.push(1);
        } else {
            matrixRow.push(0);
        }
     }
     matrix.push(matrixRow);
 }
 console.table(matrix);