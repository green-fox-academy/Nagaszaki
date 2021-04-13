'use strict';

// -  Create a variable named `numbers`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements of `numbers`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numbers`

let numbers: number[] = [3, 4, 5, 6, 7], tempArray: number[] = [];

//Built in method
numbers = numbers.reverse();
console.log("Reversed:"+numbers);

//Loop and temp array
for (let i: number = numbers.length-1; i >= 0; i--){
    tempArray.push(numbers[i]);
}
numbers = tempArray;
console.log("Reversed again:"+numbers);