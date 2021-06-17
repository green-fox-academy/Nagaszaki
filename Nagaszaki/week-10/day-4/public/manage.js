const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (form.first.value === '' || form.second.value === '' ||
  form.third.value === '' ||form.fourth.value === '' ) {
    alert('Please fill out the form');
    return;
  }

  const answers = [];
  if(document.querySelector('#radiofirst').checked){
    answers.push({answer_1: document.querySelector('#first').value, is_correct:1});
  } else {
    answers.push({answer_1: document.querySelector('#first').value, is_correct:0});
  }
  if(document.querySelector('#radiosecond').checked){
    answers.push({answer_2: document.querySelector('#second').value, is_correct:1});
  } else {
    answers.push({answer_2: document.querySelector('#second').value, is_correct:0});
  }
  if(document.querySelector('#radiothird').checked){
    answers.push({answer_3: document.querySelector('#third').value, is_correct:1});
  } else {
    answers.push({answer_3: document.querySelector('#third').value, is_correct:0});
  }
  if(document.querySelector('#radiofourth').checked){
    answers.push({answer_1: document.querySelector('#fourth').value, is_correct:1});
  } else {
    answers.push({answer_1: document.querySelector('#fourth').value, is_correct:0});
  }
  
  const data = {
    question: form.question.value,
    answers: answers,
  };

  fetch('http://localhost:3000/api/questions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((message) => {
      console.log(message);
    });
});