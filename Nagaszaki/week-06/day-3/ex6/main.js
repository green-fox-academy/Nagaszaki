const list = document.querySelector('ul');
const newElement = document.createElement('li');
newElement.textContent = 'The Green Fox';
list.appendChild(newElement);

const newElement1 = document.createElement('li');
newElement1.textContent = 'The Lamp Lighter';
list.appendChild(newElement1);

const container = document.querySelector('.container');
container.innerHTML = '<h1>I can add elements to the DOM!</h1>';
container.innerHTML += `<img src='https://i.pinimg.com/originals/67/1a/e4/671ae40b155248164d306edb67685c1c.jpg'>`;