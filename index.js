'use strict';
const express = require('express');
const app = express();
const path = require('path');
app.set('port', (process.env.PORT || 5000));

app.use('/css', express.static('css'));
app.use('/fonts', express.static('fonts'));
app.use('/images', express.static('images'));
app.use('/js', express.static('js'));

app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname + '/index.html'));
});

app.get(['/twitter', '/pages/twitter'], function(request, response) {
    response.sendFile(path.join(__dirname + '/pages/twitter/index.html'));
});

app.get(['/blog', '/pages/blog'], function(request, response) {
    response.sendFile(path.join(__dirname + '/pages/blog/index.html'));
});

app.get(['/contact', '/pages/contact'], function(request, response) {
    response.sendFile(path.join(__dirname + '/pages/contact/index.html'));
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
