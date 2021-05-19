const baloon = document.querySelector('.balloon');
let helper = document.getElementsByClassName('apple')[0].innerHTML +' '+ document.getElementsByClassName('balloon')[0].innerHTML;
baloon.innerHTML = helper;

const cat = document.querySelector('.cat');
helper = document.getElementsByClassName('balloon')[0].innerHTML +' '+ document.getElementsByClassName('cat')[0].innerHTML;
cat.innerHTML = helper;

const animals = document.querySelector('.animals');
helper = document.getElementsByClassName('cat')[0].innerHTML +' '+ document.getElementsByClassName('animals')[0].innerHTML;
animals.innerHTML = helper;