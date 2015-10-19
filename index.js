var express = require('express');
var lights = require('./lights');
var app = express();
var lights = lights();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello world');
});

app.get('/light/:floor/on', function(req, res) {
  lights.on(req.params.floor);
  console.log(req.params.floor, 'on');
  res.send(200);
});

app.get('/light/:floor/off', function(req, res) {
  lights.off(req.params.floor);
  console.log(req.params.floor, 'off');
  res.send(200);
});

app.listen(1337, '0.0.0.0');