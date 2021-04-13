'use strict';

'use strict';
//  Create a function that takes a number and an array of numbers as a parameter
//  and returns the indices of the numbers of the array which contain the given number
//  or returns an empty list (if the number is not part of any of the numbers in the array)

function findMatchingIndexes(number: number, arr){
    let indices: number[] = [];
    for(let i: number = 0;i < arr.length; i++){
        let subStr1: string = arr[i].toString().substr(0,1), subStr2: string = arr[i].toString().substr(1,2);
        if (parseInt(subStr1) == number || parseInt(subStr2) == number){
            indices.push(i);
        }
    }
    return indices;
}

// Example
console.log(findMatchingIndexes(1, [1, 11, 34, 52, 61]));
// should print: `[0, 1, 4]`
console.log(findMatchingIndexes(9, [1, 11, 34, 52, 61]));
// should print: '[]'