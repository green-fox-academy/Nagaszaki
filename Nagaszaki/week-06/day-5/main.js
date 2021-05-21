const content = document.querySelector('#content');
const gallery = document.createElement('div');
const button_left = document.createElement('img');
const button_right = document.createElement('img');
const description = document.createElement('div');
const title = document.createElement('h1');
const descript = document.createElement('p');
const display = document.createElement('div');
const displayedimg = document.createElement('img');
const imglist = document.createElement('div');

let i=0;

let texts = [{
  title:'(z)Űrös kép',
  alt:'Huston cat has problemhs'
},
{
  title:'Cat bread',
  alt:'Hate my human'
},
{
  title:'Lick',
  alt:'Mlem'
}];

function setdisplay(number){

  if(number != null){
    i=number;
  }
  display.removeChild(displayedimg);
  displayedimg.setAttribute('src',i+'.jpg');
  display.appendChild(displayedimg);
  display.removeChild(description);
  title.textContent = texts[i].title;
  descript.textContent = texts[i].alt;
  display.appendChild(description);
  if(number != null){
    render();
  }
}

function render(){
  imglist.textContent='';

  for (let j = 0 ; j < texts.length; j++){
    const img = document.createElement('img');
    img.classList = 'showoff';

    if (j === i){
      img.id = 'active';
    }

    img.setAttribute('src',j+'.jpg');
    img.onclick = () => setdisplay(j);
    imglist.appendChild(img);
  }
}

function plus(){
  if (i >= 2){
    i = 0;
  } else {
    i++;
  }

  setdisplay();

  render();

}

function minus(){
  if (i <= 0){
    i = 2;
  } else {
    i--;
  }

  setdisplay();

  render();
}

gallery.classList = 'gallery';

button_left.classList = 'button_left';
button_left.setAttribute('src','arrow.svg');
button_left.onclick = () => minus();

button_right.classList = 'button_right';
button_right.setAttribute('src','arrow.svg');
button_right.onclick = () => plus();

description.classList = 'description';

title.textContent = texts[i].title;
descript.textContent = texts[i].alt;
title.classList = 'title';
descript.classList = 'descript';

displayedimg.classList = 'displayedimg';
displayedimg.setAttribute('src',i+'.jpg');

display.classList = 'display';

imglist.classList = 'imglist';

render();

content.appendChild(gallery);
gallery.appendChild(button_left);
gallery.appendChild(display);
display.appendChild(displayedimg);
display.appendChild(description);
description.appendChild(title);
description.appendChild(descript);
gallery.appendChild(button_right);
display.appendChild(imglist);