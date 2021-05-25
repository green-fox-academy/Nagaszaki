const body = document.querySelector('body');
const input = document.createElement('input');
const input2 = document.createElement('input');
const button = document.createElement('button');
const display = document.createElement('div');
input.setAttribute('input','type:text');
input.setAttribute('value','green fox');
input2.setAttribute('value','16');
input2.setAttribute('type','number');
button.innerText = 'Kerezzse';
body.appendChild(input);
body.appendChild(input2);
body.appendChild(button);
body.appendChild(display);

let SHEARCH = 'green fox';
const URL = 'https://api.giphy.com/v1/gifs/search?api_key=EgicojixcTjqBAEUSS3TYytDY8i9JSNd&q=';
let LIMIT = 10;

function render (){
  SHEARCH = input.value;
  LIMIT = input2.value;
  display.innerText = '';
fetch(`${URL}${SHEARCH}&limit=${LIMIT}&offset=0&rating=g&lang=en`)
  .then((response) => response.json())
  .then((resp) => {
    console.log(resp);
    resp.data.forEach(currentElement => {
      const img = document.createElement('img');
      img.setAttribute('src',currentElement.images.original.url);
      display.appendChild(img);
    });
    
  })
  .catch((error) => console.log('Error:',error));
}

render();

button.onclick = () => {
  render();
};