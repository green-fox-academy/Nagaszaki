'use strict'

function powerN (base: number, kitevo: number){
    if (kitevo === 0){
        return 1;
    }
        return base * powerN( base, kitevo-1);
}
console.log(powerN(2,2));