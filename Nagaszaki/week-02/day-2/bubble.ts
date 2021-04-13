'use strict';

//  Create a function that takes a list of numbers as parameter
//  and returns a list where the elements are sorted in ascending numerical order
//  When you are done, add a second boolean parameter to the function
//  If it is `true` sort the list descending, otherwise ascending

function bubble(arr){
    let wasSwapped: boolean;
    do {
        wasSwapped = false;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                let tmp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = tmp;
                wasSwapped = true;
            }
        }
    } while (wasSwapped);
    return arr;
}

function advancedBubble(arr, isdescending: boolean){
    if(!isdescending){
        let wasSwapped: boolean;
        do {
            wasSwapped = false;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] > arr[i + 1]) {
                    let tmp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = tmp;
                    wasSwapped = true;
                }
            }
        } while (wasSwapped);
        return arr;
    } else {
        let wasSwapped: boolean;
        do {
            wasSwapped = false;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] < arr[i + 1]) {
                    let tmp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = tmp;
                    wasSwapped = true;
                }
            }
        } while (wasSwapped);
        return arr;
    }
}
//  Example:
console.log(bubble([34, 12, 24, 9, 5]));
//  should print [5, 9, 12, 24, 34]
console.log(advancedBubble([34, 12, 24, 9, 5], true));
//  should print [34, 24, 12, 9, 5]