'use strict';

const express = require('express');
const mysql = require('mysql');
const app = express();
app.use(express.json());
app.use(express.static('public'));

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'reddit',
});

conn.connect((err) => {
  if(err) {
    console.log(err);
  } else {
    console.log('connected');
  }
})

app.get('/', (req,res) => {
  res.sendFile(__dirname+'./public/index.html');
})

app.get('/posts', (reg,res) => {
  conn.query('SELECT * FROM posts', (err, rows) => {
    if (err) {
      res.status(500).json(err);
    } 
    res.status(200).json(rows);
  })
})

app.post('/posts', (req,res) => {
  conn.query('INSERT INTO posts (title, url, timestamp, score) VALUES (?,?,?,0);',
  [req.body.title,req.body.url,req.body.timestamp], (err, result) => {
    if (err) {
      res.status(500).json(err);
    }
    res.status(200).json(result);
  }
)})

app.put('/posts/:id/upvote', (req,res) => {
  conn.query('UPDATE posts SET score = score+1 WHERE id = ?;', [req.params.id], (err,rows) => {
    if (err) {
      console.log(err.toString());

      res.status(500).json(err);
    }
    res.status(200).redirect('/');
  }
  )
})


app.put('/posts/:id/downvote', (req,res) => {
  conn.query('UPDATE posts SET score = score-1 WHERE id = ?;', [req.params.id], (err,rows) => {
    if (err) {
      console.log(err.toString());

      res.status(500).json(err);
    }
    res.status(200).redirect('/');
  }
  )
})

app.listen(3000);