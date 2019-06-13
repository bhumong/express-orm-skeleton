var express = require('express');
var router = express.Router();
var models = require('../models');
/* GET users listing. */
router.get('/', function (req, res, next) {
    var title = 'test';
    models.Todo.findAll().then(function(todo) {
        res.render('index', {title: title, data: todo});
    });
});

module.exports = router;
