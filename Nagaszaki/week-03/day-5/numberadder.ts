'use strict';

function summer(n: number){
    if (n === 1){ return 1 
    } else {
     return (n + summer(n-1)) ;
    }
}
