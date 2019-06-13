var express = require('express');
var router = express.Router();
var models = require('../models');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

/* GET home page. */
router.get('/', function(req, res, next) {
    var title = 'Todo App';
    models.Todo.findAll({where: {is_delete: '0'}}).then(function(todo) {
        res.render('index', {title: title, data: todo});
    });
});

router.post('/', urlencodedParser, function(req, res) {
    var post = {
        todo: req.body.item,
        is_delete: '0',
        created_date: new Date().toISOString().slice(0, 19).replace('T', ' ')
    };
    models.Todo.create(post);
    res.redirect('/');
});

router.delete('/', function(req, res) {

});

module.exports = router;
