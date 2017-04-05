"use strict";

// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');


//
// create server instance
var app = express();


// middleware to serve static files from public directory
// this serves our public directory which contains our angular app

app.use(express.static(path.join(__dirname, '../public')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});


//
//
app.listen(3000, function() {
    console.log('welcome creatures...follow me to port '+3000);
});
