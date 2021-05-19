const ps = document.querySelectorAll('p');

if (ps[3].classList == 'dolphin'){
  ps[0].innerHTML = 'pear';
}

if (ps[0].classList == 'apple'){
  ps[2].innerHTML = 'dog';
}

ps[0].classList = 'red';
ps[1].setAttribute('style','border-radius: 10%');