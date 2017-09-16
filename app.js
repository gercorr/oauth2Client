const express = require('express');
var path = require('path');
const app = express();

app.get('/index.html', function (req, res) {
  res.sendFile('index.html', {root: __dirname })
})

app.get('/', function (req, res) {
  res.sendFile('index.html', {root: __dirname })
})

app.get('/login-redirect.html', function (req, res) {
  res.sendFile('login-redirect.html', {root: __dirname })
})

app.listen(3000, function () {
  console.log('app listening on port 3000!')
})
