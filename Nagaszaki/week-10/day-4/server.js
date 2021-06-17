const mysql = require('mysql');
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.listen(3000, () => {
  console.log(`The server is running at: PORT ${3000}`);
});

const conn = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'password',
  database:'questions'
});

conn.connect((error)=>{
  if(error){
    console.log(error.toString());
    return;
  }
  console.log('Connected to mysql');
});

app.get('/', (req, res) => {
  res.send(__dirname + '/index.html');
});

app.get('/api/game', (req, res) => {
  let random = Math.floor(Math.random() * 10) + 1;
  conn.query('SELECT * FROM answers INNER JOIN questions ON answers.question_id = questions.id WHERE question_id = ?;',[random],(err,row) =>{
    if(err){
      res.status(500).json(err);
      return;
    }
    res.status(200).json(row);
  });
});

app.get('/api/questions', (req, res) => {
  let random = Math.floor(Math.random() * 10) + 1;
  conn.query('SELECT * FROM questions',(err,row) =>{
    if(err){
      res.status(500).json(err);
      return;
    }
    res.status(200).json(row);
  });
});

app.post('/api/questions', (req, res) => {
  conn.query('SELECT id FROM questions;',(err,row) =>{
    if(err){
      res.status(500).json(err);
      return;
    }
    let id = row.length;
  });
  conn.query('INSERT INTO question (question) VALUES(?);',[req.question],(err,row) =>{
    if(err){
      res.status(500).json(err);
      return;
    };
    req.answers.forEach(answer => {
      conn.query('INSERT INTO answers (question_id,answer,is_correct) VALUES(?,?,?);',[id,req.question,answer.is_correct],(err,row) =>{
        if(err){
          res.status(500).json(err);
          return;
        };
        res.status(200).json(row);
      });
    });
  });
});