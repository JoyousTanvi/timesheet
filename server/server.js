"use strict";

var express = require('express');
var app = express();

app.use(express.static(__dirname + './../webapp'));

app.listen(3000);

//var http = require('http');
/*var fs = require('fs');
var qs = require('querystring');*/
 
/*var options = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.crt')
};*/
 
var PORT = 8181;
 
//Create a server
//var server = http.createServer(options, handleRequest);
 
//Start server
/*server.listen(PORT, function(){
  console.log("Server listening on: https://localhost:" + PORT);
});*/

app.listen(PORT, function() {
   console.log("App listening on: https://localhost:" + PORT);
 });

/*app.get('/', function(req, res){
  res.sendFile(__dirname + 'index.html');
});*/


 
 /* serves main page */
/* app.get("/", function(req, res) {
    res.sendfile('../webapp/index.html')
    //res.send("OK");
 });*/
 
  app.post("/user/add", function(req, res) { 
  /* some server side logic */
  res.send("OK");
  });
 
 /* serves all the static files */
 app.get(/^(.+)$/, function(req, res){ 
     console.log('static file request : ' + req.params);
     res.sendFile( __dirname + req.params[0]); 
 });
 
 
 