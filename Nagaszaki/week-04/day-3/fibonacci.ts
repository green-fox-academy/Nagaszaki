'use strict'

export function fibonacci(index: number): number{
  if (index <= 1)
    return 0;
  let n = 1, pn = 1;
  for(let i = 3; i < index; i++){
    let helper = n ;
    n = n+pn;
    pn = helper;
  }
  return n;
}
