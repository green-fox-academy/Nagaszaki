const Div = document.querySelector('div');
const UserScore = document.createElement('p');
const question = document.createElement('h2');
let score = 0;

const body = document.querySelector('body');
body.insertBefore(UserScore,Div);

function render(){
  UserScore.innerText = score;
  Div.innerText = '';
  Div.appendChild(question);
  fetch('http://localhost:3000/api/game')
  .then((response) => response.json())
  .then((fields) => {
    question.innerText = fields[0].question;
    fields.forEach(answer => {
      const option = document.createElement('button');
      option.innerText = answer.answer;
      Div.appendChild(option);

      if(answer.is_correct == 1){
        option.onclick = () => {
          option.setAttribute('style','background-color:green');
          score++;
          setTimeout(render,3000);
        }
      } else {
        option.onclick = () => {
          option.setAttribute('style','background-color:red');
          setTimeout(render,3000);
        }
      }
    });
  });

}

window.onload = () =>{
  render();
}