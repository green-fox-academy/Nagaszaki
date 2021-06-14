'use strict'

const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('public'));
const mysql = require('mysql');
let fs = require('fs');
let mm = require('musicmetadata');
app.listen(3000);

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'reddit',
});

conn.connect((err) =>{
  if(err){
    console.log(err.toString());
    return;
  }
  console.log('connected to mysql');
})


app.get('/', (req,res) =>{
  res.sendFile(__dirname+'.index.html');
});

app.get('/playlist-tracks/', (req, res) => {
  const Folder = './public/audio/';
  fs.readdir(Folder,(err,songs)=>{
      songs.forEach(song =>{
      let readableStream = fs.createReadStream(Folder+song);
      let parser = mm(readableStream, function (err, metadata) {
        if (err) throw err;
        console.log(metadata);
        readableStream.close();
      });
    })
  })
})

app.get('/playlist-tracks/:id', (req, res) => {
  const Folder = './public/audio/';
  fs.readdir(Folder,(err,songs)=>{
    let readableStream = fs.createReadStream(Folder+songs[req.params.id-1]);
    let parser = mm(readableStream, function (err, metadata) {
      if (err) throw err;
      console.log(metadata);
      readableStream.close();
    });
  })
})

app.get('/playlists/', (req, res) => {

})
