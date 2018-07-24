const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'dist/myangular')));

// API Location

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/myangular/index.html'));
});

const server = http.createServer(app);

server.listen(3000, () => {
    console.log('Server is Running on the port: 3000');
})
