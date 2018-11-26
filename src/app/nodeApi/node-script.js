var express = require('express');
var app = express();
const { parse } = require('querystring');
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
// chosen runing port
app.listen(3000, function () {
    //console.log('Express server is listening on port 3000');
});

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

// Update car
app.get("/update",function(request,response){

    var id = parseInt(request.query.id);
    var details = {details:'{"year":"'+request.query.year+'","engine":"'+request.query.engine+'","price":"'+request.query.price+'","rating":"'+request.query.rating+'"}'};
    conn.query('UPDATE cars SET ? WHERE id = '+request.query.id, details, function(error, result) {
        var data = {status:true,message:'Update Success'};
        if ( error ){
            data.status = false;
            data.message = error;
            response.status(400).send(data);
        } else {
            response.send(data);
        }
    });
});

// Get data from spesific car
app.get('/car-details/:carId',function(request,response){
    var carId = parseInt(request.params.carId);
    conn.query("SELECT * FROM cars WHERE id = "+carId ,function(error,results){        
        response.send(results);
    });
});

// Get news
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

