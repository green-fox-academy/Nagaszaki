'use strict';

//  Create a function that takes a list of numbers as a parameter
//  and returns a list of numbers where every number is unique (occurs only once)

function findUniqueItems(arr) {
    let collectionOfUniqueNumbers: number[] = [];
    for(let i: number = 0; i < arr.length;i++){
        let isPresent: boolean = false;
        for(let j: number = 0; j < collectionOfUniqueNumbers.length; j++){
            if (arr[i] == collectionOfUniqueNumbers[j]){
                isPresent = true;
            }
        }
        if (!isPresent){
            collectionOfUniqueNumbers.push(arr[i]);
        }
    }
    return collectionOfUniqueNumbers;
}

//  Example
console.log(findUniqueItems([1, 11, 34, 11, 52, 61, 1, 34]))
//  should print: `[1, 11, 34, 52, 61]`