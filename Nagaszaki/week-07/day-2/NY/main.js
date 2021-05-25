const body = document.querySelector('body');
const input = document.createElement('input');
const button = document.createElement('button');
const display = document.createElement('div');
input.setAttribute('input','type:text');
input.setAttribute('value','Apollo 11');
button.innerText = 'Kerezzse';
body.appendChild(input);
body.appendChild(button);
body.appendChild(display);

let SHEARCH = '';
const URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=';
const API_KEY = 'h3LxcC1wlREx4rThThAhFLEYAVr3Kg3t';

function render (){
  SHEARCH = input.value;
  display.innerText = '';
fetch(`${URL}${SHEARCH}&api-key=${API_KEY}`)
  .then((response) => response.json())
  .then((resp) => {
    console.log(resp);
    resp.response.docs.forEach(element => {
      const article = document.createElement('article');
      const h2 = document.createElement('h2');
      const p = document.createElement('p');
      const link = document.createElement('a');
      article.appendChild(h2);
      article.appendChild(p);
      h2.innerText = element.headline.print_headline;
      p.innerText = element.snippet + '\n'+ element.pub_date.substr(0,10);
      article.appendChild(link);
      link.innerText = 'link';
      link.setAttribute('href',element.web_url);
      link.setAttribute('target','_blank');
      display.appendChild(article);
    });
  })
  .catch((error) => console.log('Error:',error));
}

render();

button.onclick = () => {
  render();
};