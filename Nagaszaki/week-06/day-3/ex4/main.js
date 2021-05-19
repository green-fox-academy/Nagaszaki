const image = document.querySelector('img');
console.log(image.getAttribute('src'));
image.src = 'https://i.pinimg.com/originals/67/1a/e4/671ae40b155248164d306edb67685c1c.jpg'; 

const link = document.querySelector('a');
link.href = 'https://www.greenfoxacademy.com/';

const disabledbutton = document.querySelector('.this-one');
disabledbutton.setAttribute('disabled','');
disabledbutton.innerHTML=`Don't click me!`