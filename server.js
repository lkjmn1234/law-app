const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

app.use(favicon(__dirname + '/build/favicon.ico'));
app.use(express.static(__dirname+'/public'));
app.use(express.static(path.join(__dirname, 'build')));



app.get('/interactive.jpg', function(req, res) {
  res.sendFile(path.join(__dirname,'build',  'interactive.jpg'));
});
app.get('/informative.jpg', function(req, res) {
  res.sendFile(path.join(__dirname,'build', 'informative.jpg'));
});
app.get('/intelligent.jpg', function(req, res) {
  res.sendFile(path.join(__dirname,'build', 'intelligent.jpg'));
});
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port);