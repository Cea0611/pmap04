const express = require('express');
const path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'javascript')));
app.use(express.static(path.join(__dirname, 'styles')));

app.get('/', function(request, response){
    response.sendFile(path.join(__dirname + '/views/index.html'))
});

app.get('/map01', function(request, response) {
    response.sendFile(path.join(__dirname + '/views/map01.html'));
});

app.get('/map02', function(request, response) {
    response.sendFile(path.join(__dirname + '/views/map02.html'));
});

app.get('/map03', function(request, response) {
    response.sendFile(path.join(__dirname + '/views/map03.html'));
});

app.listen(3000);