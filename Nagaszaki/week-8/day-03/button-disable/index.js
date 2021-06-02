'use strict'

const cat = document.querySelector('#cat');
const dog = document.querySelector('#dog');
const lovecat = document.querySelector('#loveCat');
const signup = document.querySelector('#signUp');
const yes = document.querySelector('#yes');
const no = document.querySelector('#no');
const buttons = document.querySelectorAll('input');
const viktor = document.querySelector('#goldfish');



window.onclick = () =>{
  if(viktor.checked && no.checked){
    signup.disabled=false;
    lovecat.disabled=true;
  } else {
    if (cat.checked || dog.checked){
      signup.disabled=false;
    } else {
      signup.disabled=true;
    }
  
    if (yes.checked){
      lovecat.disabled=false;
    } else {
      lovecat.disabled=true;
    }
  }
}

buttons.forEach( (button) => {
  if(viktor.checked && no.checked){
    button.onclick = () =>{
      alert(`Sigh, we still added you to the cat facts list`);
    }
  } else {
    button.onclick = () =>{
      alert(`Thank you, you've successfully signed up for cat facts`);
    }
  }
})