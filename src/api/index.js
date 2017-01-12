'use strict'


var express = require('express');
var todos   = require('../../mock/todos.json')
var router  = express.Router();


router.get('/todos', function(req, res) {
    // here we tell our api to send mock data we required
    res.json({todos:todos});
});

// TODO: Add POST route to create new entry

// TODO: Add PUT route to update existing entries

// TODO: Add DELETE route to delete todo
module.exports = router;
