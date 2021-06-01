const button = document.querySelector('button');

button.addEventListener('click', () => {
  const result = document.querySelector('.result');
  const lis = document.querySelectorAll('li');
  result.textContent = lis.length;
})