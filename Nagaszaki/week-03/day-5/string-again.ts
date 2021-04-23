'use strict'

export{}



function swapper(word: string, counter = word.length) {

    if(counter === 0){

        return word
    }


    return swapper(word.replace('x' , ''), counter - 1);



}