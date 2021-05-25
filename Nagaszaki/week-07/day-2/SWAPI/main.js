const body = document.querySelector('body');
const input = document.createElement('input');
const button = document.createElement('button');
const display = document.createElement('div');
const ol = document.createElement('ol');
input.setAttribute('input','type:text');
input.setAttribute('value','Luke Skywalker');
button.innerText = 'Kerezzse';
body.appendChild(input);
body.appendChild(button);
body.appendChild(display);
body.appendChild(ol);

let SHEARCH = '';
let count = 0;
const URL = 'https://swapi.dev/api/people/';

function render (){
  SHEARCH = input.value;
  display.innerText = '';
  for(let i=1;i<count;i++){
    fetch(`${URL}${i}/`)
      .then((response) => response.json())
      .then((resp) => {
        if (SHEARCH === resp.name){
          const p = document.createElement('p');
          p.innerText = JSON.stringify(resp, null, 4);
          body.appendChild(p);
          return;
        }
    })
    .catch((error) => console.log('Error:',error));
  }
}

fetch(`${URL}`)
  .then((response) => response.json())
  .then((resp) => {
    console.log(resp);
    count = resp.count;
    resp.results.forEach(element => {
      const li = document.createElement('li');
      li.innerText = element.name;
      ol.appendChild(li);

    });
  })
  .catch((error) => console.log('Error:',error));

button.onclick = () => {
  render();
};