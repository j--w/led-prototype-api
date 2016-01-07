var express = require('express');
var lights = require('./lights')();
var app = express();
app.set('view engine', 'jade');
app.use('/static', express.static('static'));
app.get('/', function get(req, res) {
  res.render('index');
});

app.get('/light/:floor/on', function get(req, res) {
  lights.on(req.params.floor);
  console.log(req.params.floor, 'on'); // eslint-disable-line no-console
  res.send(200);
});

app.get('/light/:floor/off', function get(req, res) {
  lights.off(req.params.floor);
  console.log(req.params.floor, 'off'); // eslint-disable-line no-console
  res.send(200);
});

app.listen(1337, '0.0.0.0');
