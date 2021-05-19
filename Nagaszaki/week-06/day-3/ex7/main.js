const list = document.querySelector('.asteroids');
list.removeChild(document.querySelector('li'));

const planetData = [
  {
    category: 'inhabited',
    content: 'Foxes',
    asteroid: true,
  },
  {
    category: 'inhabited',
    content: 'Whales and Rabbits',
    asteroid: true,
  },
  {
    category: 'uninhabited',
    content: 'Baobabs and Roses',
    asteroid: true,
  },
  {
    category: 'inhabited',
    content: 'Giant monsters',
    asteroid: false,
  },
  {
    category: 'inhabited',
    content: 'Sheep',
    asteroid: true,
  },
]

for (let i = 0; i < planetData.length;i++){
  if (planetData[i].asteroid){
    const newItem = document.createElement('li');
    newItem.innerText = planetData[i].content;
    newItem.classList = planetData[i].category;
    list.appendChild(newItem);
  }
}