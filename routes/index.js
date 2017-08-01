var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about', {layout: 'layout-dark'});
});

router.get('/eboard', function(req, res, next) {
  res.render('eboard', {layout: 'layout-dark'});
});

router.get('/join', function(req, res, next) {
  res.render('join', {layout: 'layout-dark'});
});

router.get('/contact', function(req, res, next) {
  res.render('contact', {layout: 'layout-dark'});
});

module.exports = router;
