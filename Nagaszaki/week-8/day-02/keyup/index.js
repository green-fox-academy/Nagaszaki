document.onkeypress = function(evt) {
  evt = evt || window.event;
  const h1 = document.querySelector('h1').innerText ='Last pressed key code is: '+ evt.keyCode || evt.which;
};