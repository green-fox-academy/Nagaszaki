'use strict'
const audio = document.querySelector('audio');

audio.onloadstart = () =>{
  console.log('onloadstart happened');
}

audio.onplay = () =>{
  console.log('onplay happened');
}

audio.onended = () =>{
  console.log('onended happened');
}

audio.onprogress = () => {
  console.log('onprogress happened');
}
