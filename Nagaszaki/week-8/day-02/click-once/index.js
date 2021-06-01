const button = document.querySelector('button');
let wasClicked = false;
button.onclick = () => {
  if (!wasClicked){
    console.log(Date.now());
    wasClicked = true;
  }
};