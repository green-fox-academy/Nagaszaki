'use strict'

export class Sum {
  private numbers: number[] = [];

  add(usersNumber: number){
    this.numbers.push(usersNumber);
  }

  sum(){
    let sum: number = 0;
    this.numbers.forEach(x => {
      sum += x;
    });
    return sum;
  }
}