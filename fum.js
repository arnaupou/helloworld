var express=require('express');
var app= express();
var fs = require('fs');
var web;
fs.readFile(__dirname +'/index.html', function (err, data) {
  if (err) {
    throw err; 
  }
  web=data.toString();
  console.log(web);
});


app.get('/', function(req,res){
   res.send(web);
});

app.listen(80);