const express = require('express');
const path = require('path');
const { davet } = require("./rewus/ayarlar.json")

const app = express();
const port = process.env.PORT;

// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './src/index.html'));
});

app.get('/iletisim', function(req, res) {
  res.sendFile(path.join(__dirname, './src/iletisim.html'));
});

app.get('/projeler', function(req, res) {
  res.sendFile(path.join(__dirname, './src/projeler.html'));
});

app.get('/discord', function(req, res, redirect) {
  res.redirect(davet);
});



app.listen(port);
console.log('Sunucu Başlatıldı!');
