const button = document.querySelector('button');
function append(){
  const p = document.createElement('p');
  p.innerText = '2 seconds elapsed'
  document.querySelector('body').appendChild(p);
}
button.onclick = () =>{
  setTimeout(append,2000);
};