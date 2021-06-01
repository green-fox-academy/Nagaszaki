const button = document.querySelector('button');
let isPassed= false;
let counter = 0;
function settrue (){
  isPassed = true;
}

window.onload = () => {
  setTimeout(settrue,5000);
}
button.onclick = () =>{
  counter++
  if (isPassed && counter >= 3 ){
    const p = document.createElement('p');
    p.innerText = '5 seconds elapsed and cliked the button '+counter+' times.'
    document.querySelector('body').appendChild(p);
  }
};