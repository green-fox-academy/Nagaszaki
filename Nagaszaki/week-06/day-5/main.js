const content = document.querySelector('#content');
const gallery = document.createElement('div');
const button_left = document.createElement('img');
const button_right = document.createElement('img');
const description = document.createElement('div');
const title = document.createElement('h1');
const descript = document.createElement('p');
const display = document.createElement('div');
const displayedimg = document.createElement('img');

let i=0;

let texts = ['(z)Űrös kép','Cat bread','Lick']
let alttexts = ['Huston cat has problemhs','Hate my human','Mlem']

function plus(){
  if (i >= 2){
    i = 0;
  } else {
    i++;
  }

  display.removeChild(displayedimg);
  displayedimg.setAttribute('src',i+'.jpg');
  display.appendChild(displayedimg);
  display.removeChild(description);
  title.textContent = texts[i];
  descript.textContent = alttexts[i];
  display.appendChild(description);
}

function minus(){
  if (i <= 0){
    i = 2;
  } else {
    i--;
  }
  display.removeChild(displayedimg);
  displayedimg.setAttribute('src',i+'.jpg');
  display.appendChild(displayedimg);
  display.removeChild(description);
  title.textContent = texts[i];
  descript.textContent = alttexts[i];
  display.appendChild(description);
}

gallery.classList = 'gallery';

button_left.classList = 'button_left';
button_left.setAttribute('src','arrow.svg');
button_left.onclick = () => minus();

button_right.classList = 'button_right';
button_right.setAttribute('src','arrow.svg');
button_right.onclick = () => plus();

description.classList = 'description';

title.textContent = texts[i];
descript.textContent = alttexts[i];
title.classList = 'title';
descript.classList = 'descript';

displayedimg.classList = 'displayedimg';
displayedimg.setAttribute('src',i+'.jpg');

display.classList = 'display';

content.appendChild(gallery);
gallery.appendChild(button_left);
gallery.appendChild(display);
display.appendChild(displayedimg);
display.appendChild(description);
description.appendChild(title);
description.appendChild(descript);
gallery.appendChild(button_right);