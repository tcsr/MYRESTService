var express = require('express');

var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var mysql = require('mysql');


var connection = mysql.createConnection({
    host: "localhost",
    user: 'admin',
    password: 'admin',
    database: 'mydb'
})

connection.connect((err) => {
    if (err) throw err
    connection.query("SELECT * FROM mydata", (err, res) => {
        if (err) throw err
        myArray = res;
    })
})
// const router = express.Router();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/getMyData', (req, res) => {
    res.send(myArray);
})

// app.get('/getMyData/' + id, (req, res) => {
//     res.send(myArray);
// })

app.listen(3000, () => {
    console.log('server started');
})
