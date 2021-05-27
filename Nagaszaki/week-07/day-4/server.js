'use strict'

const mysql = require('mysql');
const express = require('express');
const app = express();
const conn = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'password',
  database:'test',
  insecureAuth: 'true'
});

app.listen(3000);
app.use(express.json());
app.use(express.static('public'));

conn.connect((err) =>{
  if (err){
    console.log(err.toString())
  } else {
    console.log('Connected to mysql');
  }
});

app.get('/', (req,res) => {
  res.sendFile(__dirname + '/public/books.html');
});

app.get('/books', (req,res) => {
  conn.query(`SELECT * FROM book_mast INNER JOIN author ON book_mast.aut_id = author.aut_id INNER JOIN category ON book_mast.cate_id = category.cate_id INNER JOIN publisher ON book_mast.pub_id = publisher.pub_id`, (error,rows) => {
    if(error){
      res.status(500).json(error);
    } else {
      res.status(200).json(rows);
    }
  });
});