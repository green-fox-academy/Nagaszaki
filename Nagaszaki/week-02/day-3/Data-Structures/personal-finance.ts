'use strict';
export{};

let expenses: number[] = [500, 1000, 1250, 175, 800, 120], sum: number = 0,
greatestExpense: number = 0, lowestExpense: number = expenses[0];

for (let i = 0; i < expenses.length; i++){
    sum += expenses[i];
}

for (let i = 0; i < expenses.length; i++){
    if (expenses[i] > greatestExpense ){
        greatestExpense = expenses[i];
    }
}

for (let i = 1; i < expenses.length; i++){
    if (lowestExpense > expenses[i] ){
        lowestExpense = expenses[i];
    }
}
console.log("Expenses in total: ", sum);
console.log("Greatest expense: ", greatestExpense);
console.log("Cheapest spending: ", lowestExpense);
console.log("Average expense: ", sum/expenses.length);