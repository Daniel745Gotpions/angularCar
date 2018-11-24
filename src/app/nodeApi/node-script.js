var express = require('express');
var app = express();

// Allowed Cross domain
var cors = require('cors');
app.use(cors());

var mysql = require('mysql');
// Connection to db
var conn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'password',
    database : 'angularCar'
});

conn.connect();
// Call to api
app.get('/get-cars', function(request, response){
    conn.query('select * from cars', function(error, results){
        
        var data = {status:true,returnData:[],message:''};
        if ( error ){
            data.status = false;
            data.message = 'Error in database operation';
            response.status(400).send(data);
        } else {
            data.returnData = results;
            response.send(data);
        }
    });
});

app.get('/get-news', function(request, response){
    conn.query('select * from news', function(error, results){
        var data = {status:true,returnData:[],message:''};
        if ( error ){
            data.status = false;
            data.message = 'Error in database operation';
            response.status(400).send(data);
        } else {
            data.returnData = results;
            response.send(data);
        }
    });
});

// chosen runing port
app.listen(3000, function () {
    //console.log('Express server is listening on port 3000');
});