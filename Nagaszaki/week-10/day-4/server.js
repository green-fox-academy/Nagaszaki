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
  conn.query('SELECT * FROM questions',(err,row) =>{
    if(err){
      res.status(500).json(err);
      return;
    }
    let random = Math.floor(Math.random() * row.length) + 1;
    conn.query('SELECT * FROM answers INNER JOIN questions ON answers.question_id = questions.id WHERE question_id = ?;',[random],(err,row) =>{
      if(err){
        res.status(500).json(err);
        return;
      }
      res.status(200).json(row);
    });
  });
  
  
});

app.get('/api/questions', (req, res) => {
  conn.query('SELECT * FROM questions',(err,row) =>{
    if(err){
      res.status(500).json(err);
      return;
    }
    res.status(200).json(row);
  });
});

app.post('/api/questions', (req, res) => {
  let id;
  conn.query('SELECT id FROM questions;',(err,row) =>{
    if(err){
      res.status(500).json(err);
      console.log(err);
      return;
    }
    id = row.length+1;
    conn.query('INSERT INTO questions (question) VALUES(?);',[req.body.question],(err,row) =>{
      if(err){
        res.status(500).json(err);
        console.log(err);
        return;
      };
      req.body.answers.forEach((element,index) => {
        conn.query('INSERT INTO answers (question_id,answer,is_correct) VALUES(?,?,?);',[id,element.answer,element.is_correct],(err,row) =>{
          if(err){
            res.status(500).json(err);
            console.log(err);
            return;
          };
          if(index === 3){
            res.status(200).json('Updated succesfully!');
          };
        });
      });
    });
  }); 
});