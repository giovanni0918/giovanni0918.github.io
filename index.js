'use strict';
const express = require('express');
const app = express();
const path = require('path');
app.set('port', (process.env.PORT || 5000));

app.use('/dist', express.static(path.join(__dirname, '_site', 'dist')));

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, '_site', '/index.html'));
});

app.get(['/twitter', '/pages/twitter'], (request, response) => {
    response.sendFile(path.join(__dirname, '_site', '/pages/twitter/index.html'));
});

app.get(['/blog', '/pages/blog'], (request, response) => {
    response.sendFile(path.join(__dirname, '_site', '/pages/blog/index.html'));
});

app.get(['/contact', '/pages/contact'], (request, response) => {
    response.sendFile(path.join(__dirname, '_site', '/pages/contact/index.html'));
});

app.listen(app.get('port'), () => {
    console.log('Node app is running on port', app.get('port'));
});
