let candies = 0;
let lollypops = 0;
let multiplier = 1;

function refres() {
  document.querySelector('.candies').innerText = candies;
  if (lollypops == 0){
    document.querySelector('.lollypops').innerText = 0;
  } else {
    document.querySelector('.lollypops').innerText = '';
  }
  for(let i =0; i < lollypops; i++){
  document.querySelector('.lollypops').innerText += '🍭';
  }
  if (parseInt(lollypops/10) >= 1){
    candies += parseInt(lollypops/10)*multiplier;
  }
  document.querySelector('.speed').innerText = parseInt(lollypops/10)*multiplier;
}
window.onload = () =>{
  setInterval(refres,1000);
}
const buttoncandy = document.querySelector('.create-candies');
buttoncandy.onclick = () => {
  candies++;
  refresh();
}

const buttonlolly = document.querySelector('.buy-lollypops');
buttonlolly.onclick = () => {
  if (candies >= 100){
    candies -= 100;
    lollypops++;
  }
  refresh();
}

const buttonmultiply = document.querySelector('.candy-machine');
buttonmultiply.onclick = () => {
  multiplier *= 10;
  refresh();
}