const helper = document.querySelectorAll('li');
let array = ['apple', 'banana', 'cat', 'dog'];
for (let i = 0; i < 4; i++){
  helper[i].innerHTML=array[i];
}

const ul = document.querySelector('ul');
ul.setAttribute('style','background-color: limegreen')